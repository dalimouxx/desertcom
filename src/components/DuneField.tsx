import { useEffect, useRef } from "react";

export function DuneField() {
  const sceneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 14;
        scene.style.setProperty("--dune-x", `${x}px`);
        scene.style.setProperty("--dune-y", `${y}px`);
      });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);
  return (
    <div className="dune-scene" ref={sceneRef} aria-hidden="true">
      <div className="sun-disc"><span>DC</span></div>
      <svg className="dune-lines" viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 15 }, (_, index) => (
          <path key={index} d={`M -90 ${70 + index * 39} C 110 ${-10 + index * 43}, 230 ${250 + index * 20}, 405 ${145 + index * 29} S 690 ${45 + index * 45}, 900 ${155 + index * 34}`} fill="none" stroke="currentColor" strokeWidth={index % 4 === 0 ? 1.8 : 1} opacity={0.2 + (index % 5) * 0.09} />
        ))}
      </svg>
      <div className="dune-coordinate">34.0209° N<br />6.8416° W</div>
      <div className="dune-caption">DESIGNER L’IMPACT<br />CODER LE MOUVEMENT</div>
    </div>
  );
}
