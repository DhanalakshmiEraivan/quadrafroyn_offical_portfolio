import { useEffect, useRef } from 'react';

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useScrollToTop() {
  const location = typeof window !== 'undefined' ? window.location.pathname : '';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let rafId = 0;

    const onDown = (e: PointerEvent) => {
      isDown = true;
      el.classList.add('dragging');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      velocity = 0;
      cancelAnimationFrame(rafId);
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.8;
      velocity = walk * 0.3;
      el.scrollLeft = scrollLeft - walk;
    };
    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('dragging');
      const momentum = () => {
        if (Math.abs(velocity) < 0.5) return;
        el.scrollLeft -= velocity;
        velocity *= 0.95;
        rafId = requestAnimationFrame(momentum);
      };
      rafId = requestAnimationFrame(momentum);
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointerleave', onUp);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointerleave', onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return ref;
}
