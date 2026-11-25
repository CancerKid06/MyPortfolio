import { SiteDictionary } from '../content/siteContent';
import { MediaSlot } from './MediaSlot';
import { Reveal } from './Reveal';

interface FellahAiSectionProps {
  content: SiteDictionary['fellahAi'];
}

export function FellahAiSection({ content }: FellahAiSectionProps) {
  return (
    <section id="projects" className="bg-[#0B1F1C] py-16 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left narrative and debugging breakdown */}
            <div className="lg:col-span-6">
              <p className="text-sm font-medium text-[#23D1B5]">{content.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                {content.title}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/90">{content.lead}</p>
              <p className="mt-4 text-base leading-relaxed text-white/75">{content.body}</p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                {content.migrationNote}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                {content.datasetNote}
              </p>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-lg font-semibold text-white">{content.bugsHeading}</h3>
                <dl className="mt-4 space-y-4">
                  {content.bugs.map((bug) => (
                    <div
                      key={bug.title}
                      className="rounded-xl border border-white/10 bg-[#102A26] p-4"
                    >
                      <dt className="text-sm font-semibold text-[#23D1B5]">{bug.title}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-white/80">
                        {bug.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-medium text-white/60">{content.stackLabel}</p>
                <p className="mt-2 font-mono text-xs leading-relaxed text-white/85">
                  {content.stack.join(' / ')}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={content.reportHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-lg bg-[#23D1B5] px-4 text-xs font-semibold text-[#0B1F1C] transition-colors hover:bg-[#1EB89F] whitespace-nowrap"
                  >
                    {content.reportLabel}
                  </a>
                  <a
                    href={content.slidesHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-lg border border-white/20 bg-transparent px-4 text-xs font-semibold text-white transition-colors hover:border-[#23D1B5] hover:text-[#23D1B5] whitespace-nowrap"
                  >
                    {content.slidesLabel}
                  </a>
                </div>
              </div>
            </div>

            {/* Right media slots: Weather screen + Darija mobile screen & Architecture diagram */}
            <div className="space-y-6 lg:col-span-6">
              <MediaSlot
                slot={content.weatherScreen}
                darkSurface
                lightFrame
                objectFit="contain"
                aspectClass="aspect-[16/10]"
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <MediaSlot
                  slot={content.appScreens}
                  darkSurface
                  lightFrame
                  objectFit="contain"
                  aspectClass="aspect-[3/5]"
                />

                <MediaSlot
                  slot={content.diagram}
                  darkSurface
                  lightFrame
                  objectFit="contain"
                  aspectClass="aspect-[3/5]"
                >
                  <div className="flex h-full w-full flex-col justify-between bg-[#102A26] p-5">
                    <div className="text-xs text-white/70">{content.diagram.caption}</div>

                    <div className="my-4 space-y-3">
                      <div className="rounded-lg border border-white/15 bg-[#0B1F1C] p-3 text-xs text-white/90">
                        {content.diagramLabels.client}
                      </div>
                      <div className="rounded-lg border border-[#23D1B5]/40 bg-[#0B1F1C] p-3 text-xs text-[#23D1B5]">
                        {content.diagramLabels.voice}
                      </div>
                      <div className="rounded-lg border border-[#23D1B5] bg-[#13352F] p-3 text-center text-xs font-semibold text-white">
                        {content.diagramLabels.backend}
                      </div>
                      <div className="rounded-lg border border-white/15 bg-[#0B1F1C] p-3 text-xs text-white/90">
                        {content.diagramLabels.models}
                      </div>
                      <div className="rounded-lg border border-white/15 bg-[#0B1F1C] p-3 font-mono text-[11px] text-white/80">
                        {content.diagramLabels.satellite}
                      </div>
                    </div>
                  </div>
                </MediaSlot>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
