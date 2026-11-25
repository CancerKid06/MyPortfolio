import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { RotateCcw, X, ZoomIn, ZoomOut } from 'lucide-react';
import { MediaAssetSlot } from '../content/siteContent';
import { useLang } from '../context/LangContext';

interface MediaLightboxProps {
  slot: MediaAssetSlot;
  lightFrame?: boolean;
  onClose: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3.5;
const ZOOM_STEP = 0.5;

const LIGHTBOX_COPY = {
  en: {
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    reset: 'Reset zoom',
    close: 'Close',
    hintDefault: 'Click image or scroll to zoom',
    hintZoomed: 'Drag to pan · Click to reset',
  },
  fr: {
    zoomIn: 'Zoom avant',
    zoomOut: 'Zoom arrière',
    reset: 'Réinitialiser le zoom',
    close: 'Fermer',
    hintDefault: 'Cliquer ou défiler pour zoomer',
    hintZoomed: 'Glisser pour déplacer · Cliquer pour réinitialiser',
  },
} as const;

export function MediaLightbox({ slot, lightFrame = false, onClose }: MediaLightboxProps) {
  const lang = useLang();
  const labels = LIGHTBOX_COPY[lang];

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const movedRef = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const applyZoom = useCallback((nextZoom: number) => {
    const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(nextZoom.toFixed(2))));
    setZoom(clamped);
    if (clamped <= 1) {
      setPan({ x: 0, y: 0 });
    }
  }, []);

  const handleReset = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        setZoom((z) => Math.min(MAX_ZOOM, Number((z + ZOOM_STEP).toFixed(2))));
      } else if (event.key === '-') {
        event.preventDefault();
        setZoom((z) => {
          const next = Math.max(MIN_ZOOM, Number((z - ZOOM_STEP).toFixed(2)));
          if (next <= 1) setPan({ x: 0, y: 0 });
          return next;
        });
      } else if (event.key === '0') {
        event.preventDefault();
        handleReset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, handleReset]);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.25 : -0.25;
    applyZoom(zoom + delta);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    movedRef.current = false;
    dragStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };
    if (zoom > 1) {
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current || zoom <= 1) return;
    const dx = event.clientX - dragStartRef.current.x;
    const dy = event.clientY - dragStartRef.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      movedRef.current = true;
    }
    setPan({
      x: dragStartRef.current.panX + dx,
      y: dragStartRef.current.panY + dy,
    });
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);

    if (!movedRef.current && dragStartRef.current) {
      if (zoom > 1) {
        handleReset();
      } else {
        applyZoom(2);
      }
    }
    dragStartRef.current = null;
  };

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={slot.caption}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F1C]/90 p-3 backdrop-blur-xs sm:p-6"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#0B1F1C] shadow-2xl"
      >
        {/* Header & Zoom Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#102A26] px-4 py-3 text-white">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">{slot.caption}</p>
            <p className="mt-0.5 font-mono text-[11px] text-white/60">
              {zoom > 1 ? labels.hintZoomed : labels.hintDefault}
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => applyZoom(zoom - ZOOM_STEP)}
              disabled={zoom <= MIN_ZOOM}
              aria-label={labels.zoomOut}
              title={labels.zoomOut}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#0B1F1C] text-white transition-colors hover:border-[#23D1B5] hover:text-[#23D1B5] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              <ZoomOut className="h-4 w-4" strokeWidth={1.75} />
            </button>

            <span className="min-w-[3.5rem] text-center font-mono text-xs font-medium text-white/90 tabular-nums">
              {Math.round(zoom * 100)}%
            </span>

            <button
              type="button"
              onClick={() => applyZoom(zoom + ZOOM_STEP)}
              disabled={zoom >= MAX_ZOOM}
              aria-label={labels.zoomIn}
              title={labels.zoomIn}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#0B1F1C] text-white transition-colors hover:border-[#23D1B5] hover:text-[#23D1B5] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              <ZoomIn className="h-4 w-4" strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={handleReset}
              disabled={zoom === 1 && pan.x === 0 && pan.y === 0}
              aria-label={labels.reset}
              title={labels.reset}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#0B1F1C] text-white transition-colors hover:border-[#23D1B5] hover:text-[#23D1B5] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" strokeWidth={1.75} />
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={labels.close}
              title={labels.close}
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:border-[#23D1B5] hover:bg-[#23D1B5] hover:text-[#0B1F1C] cursor-pointer"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Centered Zoomable Viewport */}
        <div
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`relative flex h-[70vh] w-full items-center justify-center overflow-hidden bg-[#0B1F1C] p-4 select-none touch-none sm:h-[76vh] sm:p-6 ${
            zoom > 1
              ? isDragging
                ? 'cursor-grabbing'
                : 'cursor-grab'
              : 'cursor-zoom-in'
          }`}
        >
          <img
            src={slot.src}
            alt={slot.alt}
            draggable={false}
            style={{
              transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
            }}
            className={`max-h-full max-w-full rounded-md object-contain ${
              lightFrame ? 'bg-white p-2 shadow-sm' : ''
            } ${
              isDragging
                ? 'transition-none'
                : 'transition-transform duration-150 ease-out motion-reduce:transition-none'
            }`}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
