import { SiteDictionary } from '../content/siteContent';

interface FooterProps {
  content: SiteDictionary['footer'];
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-[#0B1F1C] py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="font-display text-sm font-semibold text-white">{content.name}</p>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href={`mailto:${content.email}`}
            className="text-white/85 underline decoration-white/25 underline-offset-4 transition-colors duration-150 hover:text-[#23D1B5] hover:decoration-[#23D1B5]"
          >
            {content.email}
          </a>
          <a
            href={content.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/85 underline decoration-white/25 underline-offset-4 transition-colors duration-150 hover:text-[#23D1B5] hover:decoration-[#23D1B5]"
          >
            {content.linkedinLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
