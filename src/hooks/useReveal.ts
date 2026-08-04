import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement>(selector = '.reveal') {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '-100px' }
    );

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [selector]);

  return ref;
}
