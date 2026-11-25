import { SiteDictionary } from '../content/siteContent';
import { Reveal } from './Reveal';

interface OtherProjectsSectionProps {
  content: SiteDictionary['otherProjects'];
}

export function OtherProjectsSection({ content }: OtherProjectsSectionProps) {
  return (
    <section className="border-b border-[#111816]/8 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal delay={0}>
          <h2 className="text-2xl font-bold tracking-tight text-[#111816] sm:text-3xl text-balance">
            {content.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Movie recommender card */}
          <div className="lg:col-span-6">
            <Reveal delay={90}>
              <article className="rounded-xl border border-[#111816]/10 bg-[#F4F6F6] p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-[#007D6A]/50 hover:shadow-md hover:shadow-[#111816]/8 motion-reduce:transform-none sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-[#111816]">
                    {content.recommenderTitle}
                  </h3>
                  <span className="text-xs font-medium text-[#007D6A]">
                    {content.recommenderYear}
                  </span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#4B5955]">
                  {content.recommenderBody}
                </p>
              </article>
            </Reveal>
          </div>

          {/* Smaller builds cards */}
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <h3 className="text-xl font-semibold text-[#111816]">
                {content.smallerHeading}
              </h3>
            </Reveal>
            <ul className="mt-4 space-y-3">
              {content.smallerItems.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={180 + index * 90}>
                    <div className="rounded-xl border border-[#111816]/10 bg-white p-5 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-[#007D6A]/50 hover:shadow-md hover:shadow-[#111816]/8 motion-reduce:transform-none">
                      <div className="text-sm font-semibold text-[#111816]">{item.title}</div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#4B5955]">
                        {item.detail}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
