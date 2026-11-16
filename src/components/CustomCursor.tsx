import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cursor = cursorRef.current;
    if (!cursor) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        cursor.classList.add("cursor-on");
      });
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      cursor.classList.toggle("cursor-active", Boolean(target.closest("a, button, input, textarea, select")));
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
    };
  }, []);
  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}
