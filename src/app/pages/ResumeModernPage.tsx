import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import useEmblaCarousel from 'embla-carousel-react';
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
  TrendingUp,
  LayoutGrid,
  ShieldCheck,
  Palette,
  Building2,
} from 'lucide-react';
import { useAppLanguage } from '../context/AppLanguageContext';

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

type AchievementCard = {
  title: string;
  bodyHtml: string;
  icon: React.ReactNode;
  iconWrapperClassName: string;
};

function stripHtmlToText(html: string): string {
  if (typeof window === 'undefined') return html.replace(/<[^>]+>/g, ' ');
  const el = document.createElement('div');
  el.innerHTML = html;
  return (el.textContent ?? '').replace(/\s+/g, ' ').trim();
}

function achievementCardsFromHtml(achievementsHtml: string): AchievementCard[] {
  if (typeof window === 'undefined') return [];
  const doc = new DOMParser().parseFromString(achievementsHtml, 'text/html');
  const items = Array.from(doc.querySelectorAll('li'));

  return items.map((li) => {
    const bodyHtml = li.innerHTML.trim();
    const text = stripHtmlToText(bodyHtml).toLowerCase();

    const meta: Omit<AchievementCard, 'bodyHtml'> = (() => {
      if (text.includes('coe') || text.includes('center') || text.includes('centers of excellence')) {
        return {
          title: 'Estruturação de CoE',
          icon: <Building2 className="h-5 w-5 text-white" />,
          iconWrapperClassName: 'bg-violet-500',
        };
      }
      if (text.includes('maturidade') || text.includes('maturity')) {
        return {
          title: 'Evolução de maturidade',
          icon: <TrendingUp className="h-5 w-5 text-white" />,
          iconWrapperClassName: 'bg-emerald-500',
        };
      }
      if (text.includes('design system') || text.includes('design systems')) {
        return {
          title: 'Adoção de Design System',
          icon: <LayoutGrid className="h-5 w-5 text-white" />,
          iconWrapperClassName: 'bg-indigo-500',
        };
      }
      if (text.includes('quality review') || text.includes('experience quality')) {
        return {
          title: 'Experience Quality Review',
          icon: <ShieldCheck className="h-5 w-5 text-white" />,
          iconWrapperClassName: 'bg-sky-500',
        };
      }
      return {
        title: 'Evolução de ilustração',
        icon: <Palette className="h-5 w-5 text-white" />,
        iconWrapperClassName: 'bg-pink-500',
      };
    })();

    return {
      ...meta,
      bodyHtml,
    };
  });
}

function AchievementsCarousel({ achievementsHtml }: { achievementsHtml: string }) {
  const cards = useMemo(() => achievementCardsFromHtml(achievementsHtml), [achievementsHtml]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false, skipSnaps: false });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    update();
    emblaApi.on('select', update);
    emblaApi.on('reInit', update);
    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
    };
  }, [emblaApi, update]);

  if (cards.length === 0) return null;

  return (
    <div className="relative achievements-carousel">
      <div className="overflow-hidden achievements-carousel__viewport" ref={emblaRef}>
        <div className="flex gap-4 achievements-carousel__container">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_46%] achievements-carousel__slide"
            >
              <article className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${card.iconWrapperClassName}`}
                    aria-hidden
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{card.title}</h3>
                </div>
                <p
                  className="text-sm leading-relaxed text-gray-600 [&_strong]:font-bold [&_strong]:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: card.bodyHtml }}
                />
              </article>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canPrev}
        className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40 print:hidden"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canNext}
        className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40 print:hidden"
        aria-label="Próximo"
      >
        ›
      </button>
    </div>
  );
}

const hardSkillsTagsShared = [
  'Product Ops',
  'Design Ops',
  'AI-Driven Operations',
  'Research Ops',
  'Product Strategy',
  'Governance',
  'Organizational Scaling',
  'Portfolio Management',
  'Design Systems',
] as const;

const softSkillsTagsShared = [
  'Strategic Thinking',
  'Analytical Thinking',
  'Problem Solving',
  'Results Orientation',
  'Resilience',
  'Inspirational Leadership',
  'Stakeholder Management',
  'Cross-functional Leadership',
] as const;

const labels = {
  pt: {
    sidebarMotto:
      'Apaixonada por resolver problemas complexos em soluções com resultados reais.',
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
    exportPdf: 'Exportar PDF',
    englishVersion: 'Versão em inglês',
    portugueseVersion: 'Versão em português',
    footerClassic: 'Versão clássica',
    hardSkillsTags: hardSkillsTagsShared,
    softSkillsTags: softSkillsTagsShared,
  },
  en: {
    sidebarMotto:
      'Passionate about turning complex problems into solutions with real results.',
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
    exportPdf: 'Export PDF',
    englishVersion: 'English version',
    portugueseVersion: 'Portuguese version',
    footerClassic: 'Classic version',
    hardSkillsTags: hardSkillsTagsShared,
    softSkillsTags: softSkillsTagsShared,
  },
} as const;

export default function ResumeModernPage() {
  const { language, setLanguage } = useAppLanguage();
  const [openExpIndex, setOpenExpIndex] = useState<number | null>(0);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia?.('print');
    const onMqlChange = (e: MediaQueryListEvent) => setIsPrinting(e.matches);
    const onBeforePrint = () => setIsPrinting(true);
    const onAfterPrint = () => setIsPrinting(false);

    window.addEventListener('beforeprint', onBeforePrint);
    window.addEventListener('afterprint', onAfterPrint);

    if (mql) {
      setIsPrinting(mql.matches);
      mql.addEventListener('change', onMqlChange);
    }

    return () => {
      window.removeEventListener('beforeprint', onBeforePrint);
      window.removeEventListener('afterprint', onAfterPrint);
      mql?.removeEventListener('change', onMqlChange);
    };
  }, []);

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
    <div className="resume-modern min-h-screen bg-[#f0f2f5] pb-12 pt-10">
      <div className="resume-modern__layout mx-auto flex max-w-6xl flex-col gap-6 px-4 lg:flex-row lg:items-start lg:gap-8">
        {/* Sidebar */}
        <aside className="w-full shrink-0 rounded-2xl bg-[#F8F9FA] p-6 shadow-sm lg:sticky lg:top-8 lg:w-[min(100%,320px)]">
          <div className="mb-4 flex overflow-hidden rounded-xl border border-gray-200 bg-gray-100/80 p-1 shadow-sm print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex-1 rounded-lg px-2 py-2 text-center text-xs font-semibold text-gray-900 transition-colors hover:bg-white sm:text-sm"
            >
              {L.exportPdf}
            </button>
            <button
              type="button"
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex-1 rounded-lg px-2 py-2 text-center text-xs font-semibold text-gray-900 transition-colors hover:bg-white sm:text-sm"
            >
              {language === 'pt' ? L.englishVersion : L.portugueseVersion}
            </button>
          </div>
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
            <div className="mb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{data.sections.experience}</h2>
              </div>
            </div>

            <div className="space-y-6">
              {data.experiences.map((exp, index) => {
                const isOpen = isPrinting ? true : openExpIndex === index;
                const showBullets = isOpen;

                return (
                  <div key={`${exp.company}-${index}`}>
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                      <button
                        type="button"
                        onClick={() => (!isPrinting ? toggleExp(index) : undefined)}
                        className="flex w-full cursor-pointer items-start gap-3 p-4 text-left transition-colors hover:bg-gray-50/80 print:cursor-default print:hover:bg-transparent"
                        aria-expanded={isOpen}
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
                        <span className="shrink-0 text-gray-400 print:hidden">
                          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </span>
                      </button>
                      <div
                        className={[
                          'border-t border-gray-100',
                          showBullets ? '' : 'hidden',
                          'print:!block',
                        ].join(' ')}
                      >
                        {exp.intro ? (
                          <p className="experience-intro px-4 pb-2 pt-4 text-[0.8rem] leading-relaxed text-gray-700">
                            {exp.intro}
                          </p>
                        ) : null}
                        <ul
                          className={[
                            'experience-details px-4 pb-4',
                            exp.intro ? 'pt-0' : 'pt-4',
                            'list-disc text-[0.8rem] leading-relaxed text-gray-700 marker:text-gray-400',
                          ].join(' ')}
                        >
                          {exp.description.map((line, i) => (
                            <li
                              key={i}
                              className="ml-4 list-disc text-[0.8rem] leading-relaxed text-gray-700 marker:text-gray-400"
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-10 print:hidden">
            <div className="mb-3">
              <h2 className="text-lg font-bold text-gray-900">{data.sections.achievements}</h2>
            </div>
            <AchievementsCarousel achievementsHtml={data.achievements} />
          </section>

          <section className="print:hidden">
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

          <section className="mt-12 print:hidden">
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

      {/* Print-only page 3 (full width) */}
      <div className="resume-modern__print-page3 mx-auto hidden max-w-6xl px-4 print:block">
        <section className="mb-10">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-gray-900">{data.sections.achievements}</h2>
          </div>
          <AchievementsCarousel achievementsHtml={data.achievements} />
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-900">{data.sections.certifications}</h2>
          </div>
          {(() => {
            const allCards = data.skillHighlights.flatMap((g) => g.cards);
            const idxEI = allCards.findIndex((c) =>
              /inteligência emocional|emotional intelligence/i.test(`${c.title} ${c.source}`)
            );
            const idxBusiness = allCards.findIndex((c) =>
              /business design/i.test(`${c.title} ${c.source}`)
            );

            if (idxEI >= 0 && idxBusiness >= 0 && idxBusiness !== idxEI + 1) {
              const business = allCards[idxBusiness];
              allCards.splice(idxBusiness, 1);
              allCards.splice(idxEI + 1, 0, business);
            }

            return (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 print:grid-cols-2">
                {allCards.map((card, i) => (
                  <SkillHighlightCardView key={`${card.source}-${card.title}-${i}`} card={card} />
                ))}
              </div>
            );
          })()}
        </section>
      </div>

      <footer className="mx-auto max-w-6xl px-4 pb-8 pt-6 text-center print:hidden">
        <Link
          to="/classica"
          className="text-sm font-medium text-gray-600 underline decoration-gray-300 underline-offset-2 transition-colors hover:text-gray-900"
        >
          {L.footerClassic}
        </Link>
      </footer>
    </div>
  );
}
