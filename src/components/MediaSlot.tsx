import { useState } from 'react';
import { MediaAssetSlot } from '../content/siteContent';

interface MediaSlotProps {
  slot: MediaAssetSlot;
  darkSurface?: boolean;
  aspectClass?: string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  lightFrame?: boolean;
  children?: React.ReactNode;
}

export function MediaSlot({
  slot,
  darkSurface = false,
  aspectClass = 'aspect-[16/10]',
  objectFit = 'cover',
  objectPosition = 'object-center',
  lightFrame = false,
  children,
}: MediaSlotProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(slot.src) && !imgError;

  const frameClass = lightFrame
    ? 'border-white/15 bg-white'
    : darkSurface
      ? 'border-white/10 bg-[#102A26]'
      : 'border-[#111816]/10 bg-[#ECEFEF]';

  return (
    <figure className="w-full">
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
      <figcaption
        className={`mt-2 text-xs ${
          darkSurface ? 'text-white/70' : 'text-[#4B5955]'
        }`}
      >
        {slot.caption}
      </figcaption>
    </figure>
  );
}
