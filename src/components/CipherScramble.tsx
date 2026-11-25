import { useCallback, useEffect, useRef, useState } from 'react';

const CIPHER_CHARS = '0123456789abcdef#@$%&';
const PULSE_INTERVAL_MS = 5000;
const STEP_MS = 28;

interface CharState {
  char: string;
  active: boolean;
}

function buildPlain(text: string): CharState[] {
  return Array.from(text, (char) => ({ char, active: false }));
}

function randomGlyph(): string {
  return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

interface CipherScrambleProps {
  text: string;
  className?: string;
}

export function CipherScramble({ text, className = '' }: CipherScrambleProps) {
  const [chars, setChars] = useState<CharState[]>(() => buildPlain(text));
  const rafRef = useRef<number | null>(null);
  const pulseTimerRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  const stopAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    isAnimatingRef.current = false;
  }, []);

  // Smooth one-by-one cipher sweep across the visible text (no full-text scramble)
  const runSweep = useCallback(() => {
    if (prefersReducedMotion()) {
      setChars(buildPlain(text));
      return;
    }

    stopAnimation();
    isAnimatingRef.current = true;

    const target = Array.from(text);
    const total = target.length;
    let cursor = 0;
    let lastTick = 0;

    const step = (timestamp: number) => {
      if (!lastTick) {
        lastTick = timestamp;
      }

      if (timestamp - lastTick >= STEP_MS) {
        lastTick = timestamp;

        // Skip spaces/punctuation smoothly
        while (cursor < total && !/[A-Za-zÀ-ÿ0-9]/.test(target[cursor])) {
          cursor += 1;
        }

        if (cursor >= total) {
          setChars(buildPlain(text));
          isAnimatingRef.current = false;
          rafRef.current = null;
          return;
        }

        const activeIndex = cursor;
        setChars(
          target.map((char, idx) =>
            idx === activeIndex
              ? { char: randomGlyph(), active: true }
              : { char, active: false }
          )
        );

        cursor += 1;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  }, [stopAnimation, text]);

  // Subtle periodic pulse transforming 2 individual characters briefly
  const runSubtlePulse = useCallback(() => {
    if (prefersReducedMotion() || isAnimatingRef.current) {
      return;
    }

    const target = Array.from(text);
    const eligible = target
      .map((char, idx) => (/[A-Za-zÀ-ÿ0-9]/.test(char) ? idx : -1))
      .filter((idx) => idx !== -1);

    if (eligible.length === 0) return;

    const picked = new Set<number>();
    const count = Math.min(2, eligible.length);
    while (picked.size < count) {
      picked.add(eligible[Math.floor(Math.random() * eligible.length)]);
    }

    isAnimatingRef.current = true;
    const startTime = performance.now();
    let lastTick = 0;
    const duration = 260;

    const step = (timestamp: number) => {
      if (timestamp - startTime >= duration) {
        setChars(buildPlain(text));
        isAnimatingRef.current = false;
        rafRef.current = null;
        return;
      }

      if (!lastTick || timestamp - lastTick >= 65) {
        lastTick = timestamp;
        setChars(
          target.map((char, idx) =>
            picked.has(idx)
              ? { char: randomGlyph(), active: true }
              : { char, active: false }
          )
        );
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  }, [text]);

  useEffect(() => {
    setChars(buildPlain(text));
    runSweep();

    pulseTimerRef.current = window.setInterval(() => {
      runSubtlePulse();
    }, PULSE_INTERVAL_MS);

    return () => {
      stopAnimation();
      if (pulseTimerRef.current !== null) {
        window.clearInterval(pulseTimerRef.current);
        pulseTimerRef.current = null;
      }
    };
  }, [runSweep, runSubtlePulse, stopAnimation, text]);

  return (
    <p
      aria-label={text}
      onMouseEnter={runSweep}
      className={`cursor-default ${className}`}
    >
      <span aria-hidden="true">
        {chars.map((item, idx) =>
          item.active ? (
            <span key={idx} className="text-[#007D6A]">
              {item.char}
            </span>
          ) : (
            <span key={idx}>{item.char}</span>
          )
        )}
      </span>
    </p>
  );
}
