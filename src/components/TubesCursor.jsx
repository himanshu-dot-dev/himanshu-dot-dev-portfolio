import React, { useEffect, useRef } from 'react';
import TubesCursorApp from 'threejs-components/build/cursors/tubes1.min.js';

const PALETTES = [
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

export default function TubesCursor() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const appRef = useRef(null);
  const paletteIndexRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let app;
    const timer = setTimeout(() => {
      try {
        const initial = PALETTES[0];
        app = TubesCursorApp(canvas, {
          tubes: {
            colors: initial.tubes
          },
          lights: {
            intensity: 220,
            colors: initial.lights
          }
        });
        appRef.current = app;
      } catch (err) {
        console.error("Failed to initialize TubesCursor:", err);
      }
    }, 50);

    // Fade or reduce intensity when cursor is over interactive content
    const handlePointerMove = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el || !wrapperRef.current) return;

      const overComp = Boolean(
        el.closest(
          'button, a, input, textarea, header, nav, footer, .group, [data-component], img, [role="button"]'
        )
      );

      wrapperRef.current.style.opacity = overComp ? '0.2' : '1';
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
        paletteIndexRef.current = (paletteIndexRef.current + 1) % PALETTES.length;
        const next = PALETTES[paletteIndexRef.current];
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
