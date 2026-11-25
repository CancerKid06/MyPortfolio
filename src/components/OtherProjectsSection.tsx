import { SiteDictionary } from '../content/siteContent';
import { Reveal } from './Reveal';

interface OtherProjectsSectionProps {
  content: SiteDictionary['otherProjects'];
}

export function OtherProjectsSection({ content }: OtherProjectsSectionProps) {
  return (
    <section className="border-b border-[#111816]/8 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-[#111816] sm:text-3xl text-balance">
            {content.heading}
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Movie recommender: one concise paragraph */}
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-[#111816]">
                  {content.recommenderTitle}
                </h3>
                <span className="text-xs font-medium text-[#4B5955]">
                  {content.recommenderYear}
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#4B5955]">
                {content.recommenderBody}
              </p>
            </div>

            {/* Smaller builds: plain list */}
            <div className="lg:col-span-6">
              <h3 className="text-xl font-semibold text-[#111816]">
                {content.smallerHeading}
              </h3>
              <ul className="mt-4 divide-y divide-[#111816]/8 border-y border-[#111816]/8">
                {content.smallerItems.map((item) => (
                  <li key={item.title} className="py-4">
                    <div className="text-sm font-semibold text-[#111816]">{item.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-[#4B5955]">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
