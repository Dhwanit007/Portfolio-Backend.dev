import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    const node = ref.current;
    let raf = null;

    const handleMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        node.style.setProperty("--mx", `${e.clientX}px`);
        node.style.setProperty("--my", `${e.clientY}px`);
        node.style.opacity = "1";
        raf = null;
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div className="cursor-glow" ref={ref} aria-hidden="true" />;
}
