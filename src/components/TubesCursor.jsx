import React, { useEffect, useRef } from 'react';
import TubesCursorApp from 'threejs-components/build/cursors/tubes1.min.js';

const DARK_PALETTES = [
  {
    tubes: ["#5e72e4", "#8965e0", "#f5365c"],
    lights: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"]
  },
  {
    tubes: ["#00f5d4", "#7b2cbf", "#f72585"],
    lights: ["#4cc9f0", "#7209b7", "#f72585", "#4361ee"]
  },
  {
    tubes: ["#ff007f", "#00f0ff", "#ffe600"],
    lights: ["#ff007f", "#7928ca", "#0070f3", "#00dfd8"]
  },
  {
    tubes: ["#10b981", "#06b6d4", "#6366f1"],
    lights: ["#34d399", "#38bdf8", "#818cf8", "#c084fc"]
  }
];

const LIGHT_PALETTES = [
  {
    // Electric Cobalt, Royal Indigo & Vivid Magenta
    tubes: ["#0284c7", "#4f46e5", "#be185d"],
    lights: ["#38bdf8", "#818cf8", "#fb7185", "#34d399"]
  },
  {
    // Emerald Jade, Azure & Deep Purple
    tubes: ["#059669", "#2563eb", "#7c3aed"],
    lights: ["#10b981", "#3b82f6", "#a855f7", "#06b6d4"]
  },
  {
    // Crimson Ruby, Hot Coral & Royal Violet
    tubes: ["#dc2626", "#ea580c", "#7c3aed"],
    lights: ["#f87171", "#fb923c", "#c084fc", "#f43f5e"]
  }
];

export default function TubesCursor({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const appRef = useRef(null);
  const paletteIndexRef = useRef(0);

  // Helper to configure Three.js materials, lights, and bloom according to theme
  const applyThemeConfig = (app, currentTheme) => {
    if (!app) return;
    const isLight = currentTheme === 'light';
    const bgColor = isLight ? 0xf8f9fa : 0x0b0c0e;

    // 1. Set clear color to match the light/dark background
    if (app.three?.renderer?.setClearColor) {
      app.three.renderer.setClearColor(bgColor, 1);
    }

    // 2. Adjust material physics for light vs dark backgrounds:
    // In light mode: use glossy lacquered chrome (lower metalness, low roughness) so colors have rich diffuse pigment and specular shine
    // In dark mode: use high metallic PBR for glowing neon reflections
    if (app.tubes?.setMaterialOption) {
      app.tubes.setMaterialOption('metalness', isLight ? 0.25 : 0.95);
      app.tubes.setMaterialOption('roughness', isLight ? 0.12 : 0.2);
    }

    // 3. Set point light intensity: high intensity in light mode ensures specular highlights cut through bright background
    if (app.tubes?.setLightsIntensity) {
      app.tubes.setLightsIntensity(isLight ? 450 : 220);
    }

    // 4. Configure bloom:
    // In light mode: threshold set to 0.99 so the 0.975 background doesn't bloom, but 400+ specular highlights shine
    // In dark mode: threshold is 0 for rich neon bloom on dark canvas
    if (app.bloomPass) {
      app.bloomPass.threshold.value = isLight ? 0.99 : 0;
      app.bloomPass.strength.value = isLight ? 1.4 : 1.5;
    }

    // 5. Update palettes
    if (app.tubes) {
      const palettes = isLight ? LIGHT_PALETTES : DARK_PALETTES;
      paletteIndexRef.current = 0;
      const initial = palettes[0];
      app.tubes.setColors(initial.tubes);
      app.tubes.setLightsColors(initial.lights);
    }
  };

  // Initialize TubesCursorApp once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let app;
    const timer = setTimeout(() => {
      try {
        const isLight = theme === 'light';
        const palettes = isLight ? LIGHT_PALETTES : DARK_PALETTES;
        const initial = palettes[0];

        app = TubesCursorApp(canvas, {
          tubes: {
            colors: initial.tubes
          },
          lights: {
            intensity: isLight ? 450 : 220,
            colors: initial.lights
          }
        });

        applyThemeConfig(app, theme);
        appRef.current = app;
        window.__tubesApp = app;
      } catch (err) {
        console.error("Failed to initialize TubesCursor:", err);
      }
    }, 50);

    // Subtle dimming when cursor hovers directly over interactive components
    const handlePointerMove = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el || !wrapperRef.current) return;

      const overComp = Boolean(
        el.closest(
          'button, a, input, textarea, [data-component], img, [role="button"]'
        )
      );

      // Smooth subtle dimming to 0.4 instead of disappearing to 0.15
      wrapperRef.current.style.opacity = overComp ? '0.4' : '1';
    };

    // Click background to switch color themes
    const handleClick = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (
        el &&
        el.closest(
          'button, a, input, textarea, header, nav, footer, .group, [data-component], img, [role="button"]'
        )
      ) {
        return;
      }

      if (appRef.current && appRef.current.tubes) {
        const palettes = theme === 'light' ? LIGHT_PALETTES : DARK_PALETTES;
        paletteIndexRef.current = (paletteIndexRef.current + 1) % palettes.length;
        const next = palettes[paletteIndexRef.current];
        appRef.current.tubes.setColors(next.tubes);
        appRef.current.tubes.setLightsColors(next.lights);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('click', handleClick);
      if (app && typeof app.dispose === 'function') {
        app.dispose();
      }
    };
  }, []);

  // Sync color scheme, background clear color, and bloom when theme switches
  useEffect(() => {
    if (!appRef.current) return;
    applyThemeConfig(appRef.current, theme);
  }, [theme]);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-0 pointer-events-none w-screen h-screen overflow-hidden transition-opacity duration-300"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
