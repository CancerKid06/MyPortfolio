import { SiteDictionary } from '../content/siteContent';
import { Reveal } from './Reveal';

interface ExperienceEducationSectionProps {
  content: SiteDictionary['experienceEducation'];
}

export function ExperienceEducationSection({ content }: ExperienceEducationSectionProps) {
  return (
    <section
      id="experience"
      className="border-b border-[#111816]/8 bg-[#F4F6F6] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Experience */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#111816] sm:text-3xl">
                {content.experienceHeading}
              </h2>

              <div className="mt-8 space-y-8">
                {content.experiences.map((exp) => (
                  <article
                    key={exp.company}
                    className="rounded-xl border border-[#111816]/8 bg-white p-6"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-[#111816]">{exp.company}</h3>
                      <span className="text-xs font-medium text-[#007D6A] tabular-nums">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#4B5955]">{exp.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-[#111816]/85">{exp.body}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#111816] sm:text-3xl">
                {content.educationHeading}
              </h2>

              <div className="mt-8 divide-y divide-[#111816]/10 border-y border-[#111816]/10">
                {content.educations.map((edu) => (
                  <article key={edu.school} className="py-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold text-[#111816]">{edu.school}</h3>
                      <span className="text-xs font-medium text-[#4B5955] tabular-nums">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#007D6A]">{edu.program}</p>
                    <p className="mt-2 text-sm text-[#4B5955]">{edu.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
