import { useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { MediaAssetSlot } from '../content/siteContent';
import { useLang } from '../context/LangContext';
import { MediaLightbox } from './MediaLightbox';

interface MediaSlotProps {
  slot: MediaAssetSlot;
  darkSurface?: boolean;
  aspectClass?: string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  lightFrame?: boolean;
  inspectable?: boolean;
  children?: React.ReactNode;
}

export function MediaSlot({
  slot,
  darkSurface = false,
  aspectClass = 'aspect-[16/10]',
  objectFit = 'cover',
  objectPosition = 'object-center',
  lightFrame = false,
  inspectable = false,
  children,
}: MediaSlotProps) {
  const lang = useLang();
  const [imgError, setImgError] = useState(false);
  const [isInspectOpen, setIsInspectOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const showImage = Boolean(slot.src) && !imgError;

  const frameClass = lightFrame
    ? 'border-white/15 bg-white'
    : darkSurface
      ? 'border-white/10 bg-[#102A26]'
      : 'border-[#111816]/10 bg-[#ECEFEF]';

  const inspectLabel = lang === 'fr' ? 'Agrandir' : 'Inspect';

  const handleClose = () => {
    setIsInspectOpen(false);
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  };

  return (
    <figure className="w-full">
      {showImage && inspectable ? (
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsInspectOpen(true)}
          aria-label={`${inspectLabel}: ${slot.caption}`}
          className={`group relative block w-full overflow-hidden rounded-xl border ${aspectClass} ${frameClass} cursor-zoom-in text-left transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#111816]/10 motion-reduce:transform-none motion-reduce:transition-none ${
            darkSurface ? 'hover:border-[#23D1B5]/70' : 'hover:border-[#007D6A]/70'
          }`}
        >
          <img
            src={slot.src}
            alt={slot.alt}
            onError={() => setImgError(true)}
            className={`h-full w-full transition-transform duration-200 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
              objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'
            } ${objectPosition}`}
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#0B1F1C]/90 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-xs transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
          >
            <ZoomIn className="h-3.5 w-3.5 text-[#23D1B5]" strokeWidth={1.75} />
            <span>{inspectLabel}</span>
          </span>
        </button>
      ) : (
        <div
          className={`relative w-full overflow-hidden rounded-xl border ${aspectClass} ${frameClass}`}
        >
          {showImage ? (
            <img
              src={slot.src}
              alt={slot.alt}
              onError={() => setImgError(true)}
              className={`h-full w-full ${
                objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'
              } ${objectPosition}`}
            />
          ) : children ? (
            children
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
              <p
                className={`text-sm font-medium ${
                  darkSurface ? 'text-white/85' : 'text-[#111816]/80'
                }`}
              >
                {slot.caption}
              </p>
              <p
                className={`mt-2 font-mono text-xs ${
                  darkSurface ? 'text-white/55' : 'text-[#4B5955]'
                }`}
              >
                [TODO: {slot.hintPath}]
              </p>
            </div>
          )}
        </div>
      )}

      <figcaption
        className={`mt-2 text-xs ${
          darkSurface ? 'text-white/70' : 'text-[#4B5955]'
        }`}
      >
        {slot.caption}
      </figcaption>

      {isInspectOpen && showImage && (
        <MediaLightbox slot={slot} lightFrame={lightFrame} onClose={handleClose} />
      )}
    </figure>
  );
}
