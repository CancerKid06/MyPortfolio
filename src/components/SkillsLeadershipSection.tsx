import { SiteDictionary } from '../content/siteContent';
import { Reveal } from './Reveal';

interface SkillsLeadershipSectionProps {
  content: SiteDictionary['skillsLeadership'];
}

export function SkillsLeadershipSection({ content }: SkillsLeadershipSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Skills */}
          <div id="skills" className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-[#111816] sm:text-3xl">
              {content.skillsHeading}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
              {/* Left 5 cols: Languages & Frameworks */}
              <div className="flex flex-col justify-between rounded-xl border border-[#111816]/10 bg-[#F4F6F6] p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#111816]/8 pb-4">
                    <h3 className="text-base font-semibold text-[#111816]">
                      {content.languagesBlock.title}
                    </h3>
                    <span className="font-mono text-xs font-medium text-[#007D6A]">
                      {content.languagesBlock.index}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {content.languagesBlock.primary.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-lg border border-[#111816]/8 bg-white px-4 py-3.5 transition-colors duration-150 hover:border-[#007D6A]/50"
                      >
                        <div className="text-sm font-semibold text-[#111816]">{item.name}</div>
                        <div className="mt-1 font-mono text-xs leading-relaxed text-[#4B5955]">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                  {content.languagesBlock.secondary.map((lang) => (
                    <div
                      key={lang}
                      className="rounded-lg border border-[#111816]/8 bg-white px-4 py-3 font-mono text-xs font-medium text-[#111816] transition-colors duration-150 hover:border-[#007D6A]/50"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 7 cols: Security, Networking & Infrastructure */}
              <div className="rounded-xl border border-[#0B1F1C] bg-[#0B1F1C] p-6 text-white sm:p-8 lg:col-span-7">
                <div className="flex items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <h3 className="text-base font-semibold text-white">
                    {content.securityBlock.title}
                  </h3>
                  <span className="font-mono text-xs font-medium text-[#23D1B5]">
                    {content.securityBlock.index}
                  </span>
                </div>

                <div className="mt-6 space-y-6">
                  {content.securityBlock.subgroups.map((subgroup) => (
                    <div key={subgroup.label}>
                      <p className="font-mono text-xs text-[#23D1B5]">{subgroup.label}</p>
                      <div
                        className={`mt-3 grid gap-2.5 ${
                          subgroup.items.length === 2
                            ? 'grid-cols-2'
                            : 'grid-cols-2 sm:grid-cols-3'
                        }`}
                      >
                        {subgroup.items.map((tool) => (
                          <div
                            key={tool}
                            className={`flex items-center rounded-lg border border-white/10 bg-[#102A26] px-3.5 py-2.5 text-xs font-medium leading-snug text-white/90 transition-colors duration-150 hover:border-[#23D1B5]/50 hover:text-white ${
                              tool.length > 26 ? 'col-span-2 sm:col-span-3' : ''
                            }`}
                          >
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div
            id="leadership"
            className="mt-16 scroll-mt-24 border-t border-[#111816]/8 pt-16"
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#111816] sm:text-3xl">
              {content.leadershipHeading}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {content.leadershipItems.map((item) => (
                <article key={item.org} className="border-t border-[#111816]/12 pt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-[#111816]">{item.org}</h3>
                    <span className="text-xs text-[#4B5955] tabular-nums">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[#007D6A]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5955]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
