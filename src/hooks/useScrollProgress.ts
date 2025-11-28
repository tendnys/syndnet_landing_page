import { useEffect, useState, useRef } from 'react';

interface UseScrollProgressOptions {
  totalSteps: number;
}

export function useScrollProgress({ totalSteps }: UseScrollProgressOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far through the container we've scrolled
      // When top of container hits top of viewport, progress starts
      // Progress completes when bottom of container hits bottom of viewport
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - viewportHeight;

      // If container is above viewport, show last step
      if (scrollStart > 0) {
        setActiveIndex(0);
        return;
      }

      // If container is below viewport, show first step
      if (scrollEnd < -containerHeight) {
        setActiveIndex(totalSteps - 1);
        return;
      }

      // Calculate progress (0 to 1)
      const scrollDistance = containerHeight - viewportHeight;
      const currentScroll = -scrollStart;
      const progress = Math.max(0, Math.min(1, currentScroll / scrollDistance));

      // Map progress to step index
      const index = Math.floor(progress * totalSteps);
      const clampedIndex = Math.max(0, Math.min(totalSteps - 1, index));

      setActiveIndex(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [totalSteps]);

  return { activeIndex, containerRef };
}
