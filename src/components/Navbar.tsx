import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Lang, SiteDictionary } from '../content/siteContent';

interface NavbarProps {
  lang: Lang;
  onToggleLang: (next: Lang) => void;
  content: SiteDictionary['nav'];
}

export function Navbar({ lang, onToggleLang, content }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: content.projects, href: '#projects' },
    { label: content.experience, href: '#experience' },
    { label: content.skills, href: '#skills' },
    { label: content.leadership, href: '#leadership' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#111816]/8 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-base font-bold tracking-tight text-[#111816] whitespace-nowrap shrink-0"
        >
          Ali Aitoufkir
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4B5955]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#007D6A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <div
            role="group"
            aria-label="Language"
            className="inline-flex items-center rounded-lg border border-[#111816]/10 bg-[#F4F6F6] p-1"
          >
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              aria-pressed={lang === 'en'}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-[#111816] shadow-xs'
                  : 'text-[#4B5955] hover:text-[#111816]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('fr')}
              aria-pressed={lang === 'fr'}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                lang === 'fr'
                  ? 'bg-white text-[#111816] shadow-xs'
                  : 'text-[#4B5955] hover:text-[#111816]'
              }`}
            >
              FR
            </button>
          </div>

          <a
            href={content.cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-lg border border-[#111816]/15 px-3 text-xs font-semibold text-[#111816] transition-colors duration-150 hover:border-[#007D6A] hover:text-[#007D6A] whitespace-nowrap shrink-0"
          >
            {content.cvLabel}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? content.menuCloseLabel : content.menuOpenLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#111816]/12 text-[#111816] md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-[#111816]/8 bg-white px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#111816] hover:bg-[#F4F6F6]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
