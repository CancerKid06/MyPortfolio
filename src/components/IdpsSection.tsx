import { ArrowDown, ArrowRight } from 'lucide-react';
import { SiteDictionary } from '../content/siteContent';
import { MediaSlot } from './MediaSlot';
import { Reveal } from './Reveal';

interface IdpsSectionProps {
  content: SiteDictionary['idps'];
}

export function IdpsSection({ content }: IdpsSectionProps) {
  const hasReportLink = Boolean(content.reportHref);
  const hasSlidesLink = Boolean(content.slidesHref);

  return (
    <section className="border-b border-[#111816]/8 bg-[#F4F6F6] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal delay={0}>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#007D6A]">{content.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111816] sm:text-4xl text-balance">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#111816]">{content.lead}</p>
            <p className="mt-4 text-base leading-relaxed text-[#4B5955]">{content.flowNote}</p>
          </div>
        </Reveal>

        {/* Lab Test Results Strip */}
        <Reveal delay={100}>
          <div className="mt-12 rounded-xl border border-[#111816]/10 bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-[#007D6A]/45 hover:shadow-md hover:shadow-[#111816]/8 motion-reduce:transform-none sm:p-8">
            <div className="flex flex-col gap-2 border-b border-[#111816]/8 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-[#111816]">{content.labLabel}</h3>
              <p className="text-xs text-[#4B5955]">{content.labSummary}</p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
              {content.labMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className="font-display text-2xl font-bold text-[#007D6A] tabular-nums sm:text-3xl">
                    {metric.value}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5955]">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#111816]/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#4B5955]">{content.academicNote}</p>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                {hasReportLink ? (
                  <a
                    href={content.reportHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-lg bg-[#007D6A] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#006354] whitespace-nowrap"
                  >
                    {content.reportLabel}
                  </a>
                ) : (
                  <span className="inline-flex h-10 items-center rounded-lg border border-[#111816]/15 px-4 text-xs font-medium text-[#4B5955] whitespace-nowrap">
                    {content.reportLabel} [TODO]
                  </span>
                )}

                {hasSlidesLink ? (
                  <a
                    href={content.slidesHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-lg border border-[#111816]/15 bg-white px-4 text-xs font-semibold text-[#111816] transition-colors hover:border-[#007D6A] hover:text-[#007D6A] whitespace-nowrap"
                  >
                    {content.slidesLabel}
                  </a>
                ) : (
                  <span className="inline-flex h-10 items-center rounded-lg border border-[#111816]/15 px-4 text-xs font-medium text-[#4B5955] whitespace-nowrap">
                    {content.slidesLabel} [TODO]
                  </span>
                )}
              </div>
            </div>

            {(!hasReportLink || !hasSlidesLink) && (
              <p className="mt-3 font-mono text-xs text-[#4B5955]">
                {content.linksTodoNote}
              </p>
            )}
          </div>
        </Reveal>

        {/* Screenshots + Terminal Simulation + Pipeline Diagram */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal delay={80}>
              <MediaSlot
                slot={content.dashboardScreen}
                lightFrame
                inspectable
                objectFit="contain"
                aspectClass="aspect-[4/3]"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={180}>
              <MediaSlot
                slot={content.alertScreen}
                lightFrame
                inspectable
                objectFit="contain"
                aspectClass="aspect-[4/3]"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-12">
            <Reveal delay={120}>
              <MediaSlot
                slot={content.terminalScreen}
                inspectable
                objectFit="contain"
                aspectClass="aspect-[21/8]"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-12">
            <Reveal delay={140}>
              {content.diagram.src ? (
                <MediaSlot slot={content.diagram} lightFrame inspectable objectFit="contain" aspectClass="aspect-[21/9]" />
              ) : (
                <div className="rounded-xl border border-[#111816]/10 bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-[#007D6A]/45 hover:shadow-md hover:shadow-[#111816]/8 motion-reduce:transform-none sm:p-8">
                  <h3 className="text-sm font-semibold text-[#111816]">
                    {content.diagram.caption}
                  </h3>

                  <div className="mt-6 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2">
                    <div className="flex-1 rounded-lg border border-[#111816]/12 bg-[#F4F6F6] p-4">
                      <span className="block font-mono text-[11px] font-medium text-[#007D6A]">
                        01
                      </span>
                      <p className="mt-1 text-xs font-semibold leading-snug text-[#111816]">
                        {content.diagramLabels.traffic}
                      </p>
                    </div>

                    <div className="flex justify-center text-[#4B5955] lg:px-1" aria-hidden="true">
                      <ArrowDown className="h-4 w-4 lg:hidden" strokeWidth={1.75} />
                      <ArrowRight className="hidden h-4 w-4 lg:block" strokeWidth={1.75} />
                    </div>

                    <div className="flex-1 rounded-lg border border-[#111816]/12 bg-[#F4F6F6] p-4">
                      <span className="block font-mono text-[11px] font-medium text-[#007D6A]">
                        02
                      </span>
                      <p className="mt-1 text-xs font-semibold leading-snug text-[#111816]">
                        {content.diagramLabels.suricata}
                      </p>
                    </div>

                    <div className="flex justify-center text-[#4B5955] lg:px-1" aria-hidden="true">
                      <ArrowDown className="h-4 w-4 lg:hidden" strokeWidth={1.75} />
                      <ArrowRight className="hidden h-4 w-4 lg:block" strokeWidth={1.75} />
                    </div>

                    <div className="flex-[1.35] rounded-lg border border-[#007D6A]/30 bg-[#F4F6F6] p-3">
                      <span className="block px-1 font-mono text-[11px] font-medium text-[#007D6A]">
                        03
                      </span>
                      <div className="mt-2 space-y-2">
                        <div className="rounded-md border border-[#111816]/10 bg-white px-3 py-2 text-xs font-medium text-[#111816]">
                          {content.diagramLabels.rf}
                        </div>
                        <div className="rounded-md border border-[#111816]/10 bg-white px-3 py-2 text-xs font-medium text-[#111816]">
                          {content.diagramLabels.iforest}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center text-[#4B5955] lg:px-1" aria-hidden="true">
                      <ArrowDown className="h-4 w-4 lg:hidden" strokeWidth={1.75} />
                      <ArrowRight className="hidden h-4 w-4 lg:block" strokeWidth={1.75} />
                    </div>

                    <div className="flex-1 rounded-lg border border-[#111816]/12 bg-[#F4F6F6] p-4">
                      <span className="block font-mono text-[11px] font-medium text-[#007D6A]">
                        04
                      </span>
                      <p className="mt-1 text-xs font-semibold leading-snug text-[#111816]">
                        {content.diagramLabels.fuzzy}
                      </p>
                    </div>

                    <div className="flex justify-center text-[#4B5955] lg:px-1" aria-hidden="true">
                      <ArrowDown className="h-4 w-4 lg:hidden" strokeWidth={1.75} />
                      <ArrowRight className="hidden h-4 w-4 lg:block" strokeWidth={1.75} />
                    </div>

                    <div className="flex-[1.2] rounded-lg border border-[#007D6A] bg-[#0B1F1C] p-4 text-white">
                      <span className="block font-mono text-[11px] font-medium text-[#23D1B5]">
                        05
                      </span>
                      <p className="mt-1 font-mono text-xs font-medium leading-snug text-white">
                        {content.diagramLabels.action}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
