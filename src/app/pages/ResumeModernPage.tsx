import React, { useEffect, useMemo, useState } from 'react';
import {
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Globe,
  Calendar,
  ChevronDown,
  ChevronUp,
  Briefcase,
} from 'lucide-react';
import { useAppLanguage } from '../context/AppLanguageContext';
import { Switch } from '../components/ui/switch';

import {
  experiencesPT,
  educationPT,
  summaryPT,
  achievementsPT,
  headerPT,
  sectionsPT,
  skillHighlightsPT,
  type SkillHighlightCard,
} from '../data/resumePT';

import {
  experiencesEN,
  educationEN,
  summaryEN,
  achievementsEN,
  headerEN,
  sectionsEN,
  skillHighlightsEN,
} from '../data/resumeEN';

function linkedinSlug(url: string): string {
  try {
    const path = new URL(url).pathname.replace(/\/$/, '');
    const segments = path.split('/').filter(Boolean);
    return segments[segments.length - 1] ?? '';
  } catch {
    return '';
  }
}

function skillHighlightLogoUrl(logo?: string): string | undefined {
  if (!logo) return undefined;
  if (logo.startsWith('http://') || logo.startsWith('https://')) return logo;
  return `${import.meta.env.BASE_URL}${logo.replace(/^\//, '')}`;
}

function SkillHighlightCardView({ card }: { card: SkillHighlightCard }) {
  const src = skillHighlightLogoUrl(card.logo);
  const fallback = card.iconFallback ?? card.source.slice(0, 2);

  return (
    <article className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        {src ? (
          <img
            src={src}
            alt={card.source}
            className="h-10 w-10 shrink-0 rounded-lg bg-neutral-50 object-contain p-0.5"
          />
        ) : (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-50 via-violet-50 to-purple-100 text-[0.65rem] font-bold text-purple-900"
            aria-hidden
          >
            {fallback}
          </div>
        )}
        <span className="min-w-0 text-[0.7rem] font-medium leading-tight text-gray-500">{card.source}</span>
      </div>
      <h3 className="mt-3 text-sm font-bold leading-snug text-gray-900">{card.title}</h3>
    </article>
  );
}

const labels = {
  pt: {
    sidebarMotto:
      'Apaixonada por construir o que ainda não existe e transformar isso em resultado real.',
    softSkillsTitle: 'Soft Skills',
    hardSkillsTitle: 'Hard Skills',
    phonePlaceholder: 'Telefone sob consulta',
    projectsTitle: 'Projetos recentes',
    projectA: {
      title: 'Design System em escala',
      desc: 'Marcação de exemplo — descreva aqui um projeto destacado com impacto em produto e negócio.',
    },
    projectB: {
      title: 'Operações de Produto & Design',
      desc: 'Marcação de exemplo — hub de IA, rituais e governança alinhados a OKRs.',
    },
    projectLink: 'Ver projeto',
    detailsToggle: 'Detalhar experiências',
    detailsHint: 'Ative para ver bullets e descrições completas em cada cargo.',
    hardSkillsTags: [
      'IA generativa',
      'Gestão de stakeholders',
      'Gestão de portfólio',
      'Design organizacional',
      'Estratégia de negócios',
      'Estratégia de produto',
      'Design Ops',
      'Product Ops',
      'Design System',
      'Research Ops',
      'Content Design',
      'Service Design',
    ],
    softSkillsTags: [
      'CrossFunctionalLeadership',
      'Resiliência',
      'Pensamento Estratégico',
      'Proatividade',
      'OrientaçãoAResultados',
      'Pensamento Analítico',
      'Liderança Inspiracional',
      'Problem Solving',
    ],
  },
  en: {
    sidebarMotto:
      'Passionate about building what does not yet exist and turning it into real results.',
    softSkillsTitle: 'Soft Skills',
    hardSkillsTitle: 'Hard Skills',
    phonePlaceholder: 'Phone on request',
    projectsTitle: 'Latest projects',
    projectA: {
      title: 'Design system at scale',
      desc: 'Placeholder — describe a flagship project with product and business impact.',
    },
    projectB: {
      title: 'Product & design operations',
      desc: 'Placeholder — AI hub, rituals, and governance aligned with OKRs.',
    },
    projectLink: 'View project',
    detailsToggle: 'Show experience details',
    detailsHint: 'Turn on to show full bullets and descriptions for each role.',
    hardSkillsTags: [
      'Generative AI',
      'Stakeholder Management',
      'Portfolio Management',
      'Organizational Design',
      'Business Strategy',
      'Product Strategy',
      'Design Ops',
      'Product Ops',
      'Design System',
      'Research Ops',
      'Content Design',
      'Service Design',
    ],
    softSkillsTags: [
      'CrossFunctionalLeadership',
      'Resiliência',
      'Pensamento Estratégico',
      'Proatividade',
      'OrientaçãoAResultados',
      'Pensamento Analítico',
      'Liderança Inspiracional',
      'Problem Solving',
    ],
  },
} as const;

export default function ResumeModernPage() {
  const { language } = useAppLanguage();
  const [showExperienceDetails, setShowExperienceDetails] = useState(true);
  const [openExpIndex, setOpenExpIndex] = useState<number | null>(0);

  useEffect(() => {
    if (showExperienceDetails) setOpenExpIndex(0);
  }, [showExperienceDetails]);

  const L = labels[language];

  const data = useMemo(() => {
    return language === 'pt'
      ? {
          experiences: experiencesPT,
          education: educationPT,
          summary: summaryPT,
          achievements: achievementsPT,
          header: headerPT,
          sections: sectionsPT,
          skillHighlights: skillHighlightsPT,
        }
      : {
          experiences: experiencesEN,
          education: educationEN,
          summary: summaryEN,
          achievements: achievementsEN,
          header: headerEN,
          sections: sectionsEN,
          skillHighlights: skillHighlightsEN,
        };
  }, [language]);

  const toggleExp = (i: number) => {
    setOpenExpIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] pb-12 pt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 lg:flex-row lg:items-start lg:gap-8">
        {/* Sidebar */}
        <aside className="w-full shrink-0 rounded-2xl bg-[#F8F9FA] p-6 shadow-sm lg:sticky lg:top-24 lg:w-[min(100%,320px)]">
          <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full bg-gray-200 shadow-md ring-2 ring-white">
            <img
              src={`${import.meta.env.BASE_URL}juliana-veiga-avatar.png`}
              alt={data.header.name}
              className="h-full w-full object-cover object-[center_22%]"
            />
          </div>
          <h1 className="text-center text-xl font-bold text-gray-900">{data.header.name}</h1>
          <p className="mt-2 text-center text-xs font-medium leading-snug text-[#5b4d7a]">
            {data.header.title}
          </p>

          <div className="mt-4 rounded-xl border border-white/80 bg-white p-3 text-sm italic text-gray-600 shadow-sm">
            “{L.sidebarMotto}”
          </div>

          <ul className="mt-5 space-y-2.5 text-xs font-medium text-gray-800">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              <a href={`mailto:${data.header.email}`} className="hover:underline">
                {data.header.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              <a
                href={data.header.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {linkedinSlug(data.header.linkedin)}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              <span className="text-gray-500">{L.phonePlaceholder}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              <span>{data.header.location}</span>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-700">
              {L.softSkillsTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {L.softSkillsTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex shrink-0 items-center rounded-full bg-[#f3e8ff] px-3 py-1 text-[0.65rem] font-medium leading-none text-[#6b21a8] whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-700">
              {L.hardSkillsTitle}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {L.hardSkillsTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f3e8ff] px-2.5 py-1 text-[0.65rem] font-medium text-[#6b21a8]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-700">
              {data.sections.education}
            </h3>
            <div className="space-y-3">
              {data.education.map((edu, i) => (
                <div
                  key={`${edu.school}-${i}`}
                  className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white ${
                        i % 2 === 0 ? 'bg-violet-400' : 'bg-emerald-400'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase text-gray-500">
                        {edu.period}
                      </p>
                      <p className="text-[0.7rem] font-bold leading-tight text-gray-900">
                        {language === 'pt' ? 'Formação' : 'Education'}
                      </p>
                    </div>
                  </div>
                  <p className="text-[0.72rem] font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-[0.68rem] font-medium text-orange-600">{edu.school}</p>
                  <p className="text-[0.68rem] text-gray-500">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <section className="mb-10">
            <div className="mb-3">
              <h2 className="text-lg font-bold text-gray-900">{data.sections.summary}</h2>
            </div>
            <div
              className="max-w-none text-sm leading-relaxed text-gray-700 [&_p]:mb-3 [&_strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: data.summary }}
            />
          </section>

          <section className="mb-10">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{data.sections.experience}</h2>
              </div>
              <div className="flex flex-col items-start gap-1 sm:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-600">{L.detailsToggle}</span>
                  <Switch
                    checked={showExperienceDetails}
                    onCheckedChange={setShowExperienceDetails}
                    aria-label={L.detailsToggle}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>
                <p className="max-w-xs text-right text-[0.65rem] text-gray-500">{L.detailsHint}</p>
              </div>
            </div>

            <div className="space-y-6">
              {data.experiences.map((exp, index) => {
                const isOpen = openExpIndex === index;
                const showBullets = showExperienceDetails && isOpen;

                return (
                  <div key={`${exp.company}-${index}`}>
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                      <button
                        type="button"
                        onClick={() => showExperienceDetails && toggleExp(index)}
                        className={`flex w-full items-start gap-3 p-4 text-left transition-colors ${
                          showExperienceDetails ? 'cursor-pointer hover:bg-gray-50/80' : 'cursor-default'
                        }`}
                        aria-expanded={showExperienceDetails ? isOpen : undefined}
                      >
                        <div className="relative mt-0.5 h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-neutral-200/40 shadow-sm ring-1 ring-gray-200/90">
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt=""
                              className="absolute inset-0 block h-full w-full object-cover object-center"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-100">
                              <Briefcase className="h-7 w-7 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-red-800/80" />
                              {exp.location}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-gray-900">{exp.role}</h3>
                          <p className="text-sm font-semibold text-orange-600">{exp.company}</p>
                        </div>
                        {showExperienceDetails ? (
                          <span className="shrink-0 text-gray-400">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </span>
                        ) : null}
                      </button>
                      {showBullets ? (
                        <ul className="border-t border-gray-100 px-4 pb-4 pt-0">
                          {exp.description.map((line, i) => (
                            <li
                              key={i}
                              className="ml-4 list-disc text-[0.8rem] leading-relaxed text-gray-700 marker:text-gray-400"
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-10">
            <div className="mb-3">
              <h2 className="text-lg font-bold text-gray-900">{data.sections.achievements}</h2>
            </div>
            <div
              className="max-w-none text-sm leading-relaxed text-gray-700 [&_li]:marker:text-gray-400 [&_strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: data.achievements }}
            />
          </section>

          <section>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900">{L.projectsTitle}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="overflow-hidden rounded-xl border border-gray-100 bg-[#fafafa] shadow-sm">
                <div className="flex h-28 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-xs font-medium text-slate-600">
                  Thumbnail
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{L.projectA.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{L.projectA.desc}</p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {L.projectLink}
                  </a>
                </div>
              </article>
              <article className="overflow-hidden rounded-xl border border-gray-100 bg-[#fafafa] shadow-sm">
                <div className="flex h-28 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-xs font-medium text-slate-600">
                  Thumbnail
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{L.projectB.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{L.projectB.desc}</p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {L.projectLink}
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className="mt-12">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900">{data.sections.certifications}</h2>
            </div>
            <div className="space-y-8">
              {data.skillHighlights.map((group, gi) => (
                <div key={gi}>
                  {group.rowLabel ? (
                    <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-wider text-gray-400">
                      {group.rowLabel}
                    </p>
                  ) : null}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.cards.map((card, ci) => (
                      <SkillHighlightCardView key={`${gi}-${ci}`} card={card} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
