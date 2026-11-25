import { useMemo, useState } from 'react';
import { SiteDictionary } from '../content/siteContent';
import { Reveal } from './Reveal';

interface SkillsLeadershipSectionProps {
  content: SiteDictionary['skillsLeadership'];
}

type FilterId = 'all' | 'development' | 'security' | 'infrastructure';

export function SkillsLeadershipSection({ content }: SkillsLeadershipSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [selectedTagName, setSelectedTagName] = useState<string | null>(null);

  const visibleCategories = useMemo(
    () =>
      activeFilter === 'all'
        ? content.skillCategories
        : content.skillCategories.filter((category) => category.filter === activeFilter),
    [activeFilter, content.skillCategories]
  );

  const selectedTag = useMemo(() => {
    if (!selectedTagName) return null;
    for (const category of visibleCategories) {
      const match = category.tags.find((tag) => tag.name === selectedTagName);
      if (match) {
        return { ...match, categoryTitle: category.title };
      }
    }
    return null;
  }, [selectedTagName, visibleCategories]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Skills */}
        <div id="skills" className="scroll-mt-24">
          <Reveal delay={0}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-[#111816] sm:text-3xl">
                {content.skillsHeading}
              </h2>

              <div
                role="tablist"
                aria-label={content.skillsHeading}
                className="flex flex-wrap items-center gap-2"
              >
                {content.skillsFilters.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  const count =
                    filter.id === 'all'
                      ? content.skillCategories.length
                      : content.skillCategories.filter((c) => c.filter === filter.id).length;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'border-[#007D6A] bg-[#007D6A] text-white'
                          : 'border-[#111816]/12 bg-[#F4F6F6] text-[#4B5955] hover:border-[#007D6A]/50 hover:text-[#111816]'
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span
                        className={`font-mono text-[11px] ${
                          isActive ? 'text-white/80' : 'text-[#4B5955]/75'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive tag context bar */}
            <div className="mt-5 flex min-h-[3.25rem] flex-wrap items-center justify-between gap-3 rounded-xl border border-[#111816]/10 bg-[#F4F6F6] px-4 py-3">
              {selectedTag ? (
                <>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
                    <span className="font-mono text-xs font-semibold text-[#007D6A]">
                      {selectedTag.name}
                    </span>
                    <span className="text-[#111816]/85">{selectedTag.context}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTagName(null)}
                    className="rounded-lg border border-[#111816]/12 bg-white px-2.5 py-1 text-xs font-medium text-[#4B5955] transition-colors hover:border-[#007D6A] hover:text-[#007D6A] cursor-pointer shrink-0"
                  >
                    {content.clearTagLabel}
                  </button>
                </>
              ) : (
                <p className="text-xs text-[#4B5955]">{content.skillsHint}</p>
              )}
            </div>
          </Reveal>

          <div
            className={`mt-6 grid grid-cols-1 gap-6 ${
              visibleCategories.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
            }`}
          >
            {visibleCategories.map((category, index) => {
              const isDark = category.variant === 'dark-featured';

              const cardStyle =
                category.variant === 'dark-featured'
                  ? 'border-[#0B1F1C] bg-[#0B1F1C] text-white hover:border-[#23D1B5]/50 hover:shadow-lg hover:shadow-black/20'
                  : category.variant === 'accent-light'
                    ? 'border-[#111816]/10 border-t-2 border-t-[#007D6A] bg-white text-[#111816] hover:border-[#007D6A]/50 hover:shadow-md hover:shadow-[#111816]/8'
                    : category.variant === 'neutral'
                      ? 'border-[#111816]/10 bg-[#F4F6F6] text-[#111816] hover:border-[#007D6A]/50 hover:shadow-md hover:shadow-[#111816]/8'
                      : 'border-[#111816]/15 bg-white text-[#111816] hover:border-[#007D6A]/50 hover:shadow-md hover:shadow-[#111816]/8';

              return (
                <Reveal key={category.id} delay={70 + index * 85} className="h-full">
                  <article
                    className={`flex h-full flex-col justify-between rounded-xl border p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 motion-reduce:transform-none sm:p-7 ${cardStyle}`}
                  >
                    <div>
                      <div
                        className={`flex items-baseline justify-between gap-2 border-b pb-4 ${
                          isDark ? 'border-white/10' : 'border-[#111816]/8'
                        }`}
                      >
                        <div>
                          <h3
                            className={`text-base font-semibold ${
                              isDark ? 'text-white' : 'text-[#111816]'
                            }`}
                          >
                            {category.title}
                          </h3>
                          <p
                            className={`mt-1 text-xs ${
                              isDark ? 'text-white/65' : 'text-[#4B5955]'
                            }`}
                          >
                            {category.subtitle}
                          </p>
                        </div>
                        <span
                          className={`font-mono text-xs font-medium shrink-0 ${
                            isDark ? 'text-[#23D1B5]' : 'text-[#007D6A]'
                          }`}
                        >
                          {category.index}
                        </span>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {category.tags.map((tag) => {
                          const isSelected = selectedTagName === tag.name;

                          const tagClass = isDark
                            ? isSelected
                              ? 'border-[#23D1B5] bg-[#23D1B5] text-[#0B1F1C]'
                              : 'border-white/12 bg-[#102A26] text-white/90 hover:border-[#23D1B5]/70 hover:text-[#23D1B5]'
                            : isSelected
                              ? 'border-[#007D6A] bg-[#007D6A] text-white'
                              : category.variant === 'neutral'
                                ? 'border-[#111816]/10 bg-white text-[#111816]/90 hover:border-[#007D6A] hover:text-[#007D6A]'
                                : 'border-[#111816]/10 bg-[#F4F6F6] text-[#111816]/90 hover:border-[#007D6A] hover:bg-white hover:text-[#007D6A]';

                          return (
                            <button
                              key={tag.name}
                              type="button"
                              aria-pressed={isSelected}
                              onClick={() =>
                                setSelectedTagName((prev) =>
                                  prev === tag.name ? null : tag.name
                                )
                              }
                              className={`rounded-lg border px-3 py-2 text-xs font-medium transition-[transform,border-color,background-color,color] duration-150 ease-out hover:-translate-y-0.5 motion-reduce:transform-none cursor-pointer text-left ${tagClass}`}
                            >
                              {tag.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Leadership */}
        <div
          id="leadership"
          className="mt-16 scroll-mt-24 border-t border-[#111816]/8 pt-16"
        >
          <Reveal delay={0}>
            <h2 className="text-2xl font-bold tracking-tight text-[#111816] sm:text-3xl">
              {content.leadershipHeading}
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {content.leadershipItems.map((item, index) => (
              <Reveal key={item.org} delay={80 + index * 100} className="h-full">
                <article className="h-full rounded-xl border border-[#111816]/10 bg-[#F4F6F6] p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-[#007D6A]/45 hover:shadow-md hover:shadow-[#111816]/8 motion-reduce:transform-none">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-[#111816]">{item.org}</h3>
                    <span className="text-xs text-[#4B5955] tabular-nums">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[#007D6A]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5955]">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
