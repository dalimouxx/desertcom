import { useEffect } from "react";

export function useScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    document.documentElement.classList.add("motion-ok");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    revealItems.forEach((item) => revealObserver.observe(item));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let ticking = false;
    const updateParallax = () => {
      const viewport = window.innerHeight;
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewport) return;
        const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
        item.style.setProperty("--parallax-y", `${Math.max(-1, Math.min(1, progress)) * -42}px`);
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateParallax); }
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.documentElement.classList.remove("motion-ok");
    };
  }, []);
}
