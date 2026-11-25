import { ReactNode, useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  distance = 24,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      setSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onTransitionEnd={(event) => {
        if (event.target === ref.current && visible) {
          setSettled(true);
        }
      }}
      style={{
        opacity: visible ? 1 : 0,
        transform: settled
          ? 'none'
          : visible
            ? 'translate3d(0, 0, 0)'
            : `translate3d(0, ${distance}px, 0)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: '620ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delay}ms`,
      }}
      className={`reveal-node ${className}`}
    >
      {children}
    </div>
  );
}
