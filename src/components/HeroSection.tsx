import { SHARED_CONTACT, SiteDictionary } from '../content/siteContent';
import { CipherScramble } from './CipherScramble';
import { MediaSlot } from './MediaSlot';
import { Reveal } from './Reveal';

interface HeroSectionProps {
  content: SiteDictionary['hero'];
  cvHref: string;
}

export function HeroSection({ content, cvHref }: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-[#111816]/8 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={0} distance={20}>
            <p className="text-sm font-medium text-[#4B5955]">{content.originLine}</p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-[#111816] sm:text-5xl text-balance">
              {content.name}
            </h1>

            <CipherScramble
              text={content.headline}
              className="mt-4 max-w-xl text-xl font-medium leading-snug text-[#111816] sm:text-2xl text-balance"
            />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4B5955]">
              {content.intro}
            </p>

            <div className="mt-6 space-y-1 text-sm text-[#4B5955]">
              <p className="font-medium text-[#007D6A]">{content.availability}</p>
              <p>{content.languagesLine}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#007D6A] px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#006354] whitespace-nowrap shrink-0"
              >
                {content.primaryCta}
              </a>

              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#111816]">
                <a
                  href={cvHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#111816]/25 underline-offset-4 transition-colors duration-150 hover:text-[#007D6A] hover:decoration-[#007D6A] whitespace-nowrap"
                >
                  {content.cvLinkLabel}
                </a>
                <a
                  href={`mailto:${SHARED_CONTACT.email}`}
                  className="underline decoration-[#111816]/25 underline-offset-4 transition-colors duration-150 hover:text-[#007D6A] hover:decoration-[#007D6A]"
                >
                  {content.emailLabel}
                </a>
                <a
                  href={SHARED_CONTACT.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#111816]/25 underline-offset-4 transition-colors duration-150 hover:text-[#007D6A] hover:decoration-[#007D6A] whitespace-nowrap"
                >
                  {content.linkedinLabel}
                </a>
              </div>
            </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={140} distance={24}>
              <MediaSlot
                slot={content.visual}
                aspectClass="aspect-square"
                objectFit="cover"
                objectPosition="object-top"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
