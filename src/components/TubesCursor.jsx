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
    // Minimalist Luxury Glossy Obsidian: pure jet black lacquer with crisp silver specular highlights
    tubes: ["#0a0a0a", "#050505", "#0e0e0e"],
    lights: ["#ffffff", "#f1f5f9", "#e2e8f0", "#ffffff"]
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

    // 2. Adjust material physics for glossy obsidian lacquer in light mode:
    // In light mode: use 0.90 metalness and 0.07 roughness so the black tubes behave like
    // mirror-polished piano lacquer / liquid obsidian, catching sharp white & silver specular reflections.
    // In dark mode: use 0.95 metalness and 0.20 roughness for luminous neon reflections.
    if (app.tubes?.setMaterialOption) {
      app.tubes.setMaterialOption('metalness', isLight ? 0.90 : 0.95);
      app.tubes.setMaterialOption('roughness', isLight ? 0.07 : 0.20);
    }

    // 3. Set point light intensity: 240 in light mode keeps sharp specular highlights along the black curves
    if (app.tubes?.setLightsIntensity) {
      app.tubes.setLightsIntensity(isLight ? 240 : 220);
    }

    // 4. Configure bloom:
    // In light mode: threshold set to 0.98 so the 0.975 background doesn't bloom, but specular glints sparkle
    // In dark mode: threshold is 0 for rich neon bloom on dark canvas
    if (app.bloomPass) {
      app.bloomPass.threshold.value = isLight ? 0.98 : 0;
      app.bloomPass.strength.value = isLight ? 1.2 : 1.5;
      if (app.bloomPass.radius) {
        app.bloomPass.radius.value = isLight ? 0.35 : 0.5;
      }
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
            intensity: isLight ? 240 : 220,
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
        // Light mode is strictly monochrome glossy black
        if (theme === 'light') return;

        const palettes = DARK_PALETTES;
        paletteIndexRef.current = (paletteIndexRef.current + 1) % palettes.length;
        const next = palettes[paletteIndexRef.current];
        appRef.current.tubes.setColors(next.tubes);
        appRef.current.tubes.setLightsColors(next.lights);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timer);
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
