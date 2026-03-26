import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Mail,
  Linkedin,
  MapPin,
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
  ArrowUpRight,
  TrendingUpIcon,
  FileDown,
  Languages,
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

type CasePreviewCard = {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  impactLabel: string;
  impactValue: string;
  to?: string;
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

function CasesCarousel({
  cards,
  viewLabel,
  comingSoonLabel,
}: {
  cards: CasePreviewCard[];
  viewLabel: string;
  comingSoonLabel: string;
}) {
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

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {cards.map((card, idx) => (
            <div key={idx} className="flex-[0_0_92%] sm:flex-[0_0_84%] lg:flex-[0_0_78%]">
              <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="p-4 md:p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className="inline-flex rounded-full bg-[#f3e8ff] px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-[#6b21a8]">
                      {card.badge}
                    </span>
                    {card.to ? (
                      <Link
                        to={card.to}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#7c3aed] ring-1 ring-gray-200 transition hover:bg-gray-50"
                        aria-label={viewLabel}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gray-500">
                        {comingSoonLabel}
                      </span>
                    )}
                  </div>

                  <h3 className="text-[1.22rem] font-extrabold leading-tight text-gray-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{card.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-[0.78rem] font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-3">
                    <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-wide text-emerald-700">
                      <TrendingUpIcon className="h-3.5 w-3.5" />
                      {card.impactLabel}
                    </p>
                    <p className="mt-1 text-[1.15rem] font-extrabold leading-tight text-emerald-800">
                      {card.impactValue}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canPrev}
        className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canNext}
        className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
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
      'Apaixonada em transformar problemas complexos em soluções com resultados reais.',
    softSkillsTitle: 'Soft Skills',
    hardSkillsTitle: 'Hard Skills',
    projectsTitle: 'Projetos recentes',
    casesTitle: 'Cases / Projetos Liderados',
    casesView: 'Ver case',
    casesComingSoon: 'Em breve',
    casesCards: [
      {
        badge: 'Case',
        title: 'CoE | Center of Excellence',
        description: 'Transformando operações de Produto & Design em um sistema escalável',
        tags: ['Escala', 'Eficiência', 'Qualidade', 'Maturity'],
        impactLabel: 'Impacto principal',
        impactValue: 'Maturidade de Produto: 2.7 → 4.11',
        to: '/projetos/coe-global',
      },
      {
        badge: 'Case',
        title: 'Evolução de Design Operations',
        description:
          'Exemplo de card para próximos cases com foco em escala de design, rituais e eficiência operacional.',
        tags: ['Design Ops', 'Escala', 'Rituais', 'Performance'],
        impactLabel: 'Impacto principal',
        impactValue: 'Redução de retrabalho: +35%',
      },
      {
        badge: 'Case',
        title: 'Framework de Qualidade em Produto',
        description:
          'Exemplo de card para próximos cases orientados por qualidade de experiência e padronização de decisões.',
        tags: ['Quality', 'Produto', 'Governança', 'Métricas'],
        impactLabel: 'Impacto principal',
        impactValue: 'Aumento de consistência: +48%',
      },
    ] as CasePreviewCard[],
    projectA: {
      title: 'Design System em escala',
      desc: 'Marcação de exemplo — descreva aqui um projeto destacado com impacto em produto e negócio.',
    },
    projectB: {
      title: 'Operações de Produto & Design',
      desc: 'Marcação de exemplo — hub de IA, rituais e governança alinhados a OKRs.',
    },
    projectLink: 'Ver projeto',
    exportPdf: 'Baixar PDF',
    exportPdfLoading: 'A gerar PDF…',
    englishVersion: 'Versão em inglês',
    portugueseVersion: 'Versão em português',
    footerClassic: 'Versão clássica',
    hardSkillsTags: hardSkillsTagsShared,
    softSkillsTags: softSkillsTagsShared,
  },
  en: {
    sidebarMotto:
      'Passionate about transforming complex problems into solutions with real results.',
    softSkillsTitle: 'Soft Skills',
    hardSkillsTitle: 'Hard Skills',
    projectsTitle: 'Latest projects',
    casesTitle: 'Cases / Led Projects',
    casesView: 'View case',
    casesComingSoon: 'Coming soon',
    casesCards: [
      {
        badge: 'Case',
        title: 'Center of Excellence (CoE) Structuring',
        description:
          'The CoE became an internal benchmark and a replicable model, influencing other structures across the company.',
        tags: ['CoE', 'Governance', 'Maturity Framework', 'Quality Experience'],
        impactLabel: 'Main impact',
        impactValue: 'Product maturity: 2.7 → 4.11',
        to: '/projetos/coe-global',
      },
      {
        badge: 'Case',
        title: 'Design Operations Evolution',
        description:
          'Example card for upcoming cases focused on design scale, rituals, and operational efficiency.',
        tags: ['Design Ops', 'Scale', 'Rituals', 'Performance'],
        impactLabel: 'Main impact',
        impactValue: 'Rework reduction: +35%',
      },
      {
        badge: 'Case',
        title: 'Product Quality Framework',
        description:
          'Example card for upcoming cases driven by experience quality and decision consistency.',
        tags: ['Quality', 'Product', 'Governance', 'Metrics'],
        impactLabel: 'Main impact',
        impactValue: 'Consistency increase: +48%',
      },
    ] as CasePreviewCard[],
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
    exportPdfLoading: 'Generating PDF…',
    englishVersion: 'English version',
    portugueseVersion: 'Portuguese version',
    footerClassic: 'Classic version',
    hardSkillsTags: hardSkillsTagsShared,
    softSkillsTags: softSkillsTagsShared,
  },
} as const;

function prefersMobilePdfDownload(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(max-width: 768px)').matches) return true;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export default function ResumeModernPage() {
  const { language, setLanguage } = useAppLanguage();
  const [openExpIndex, setOpenExpIndex] = useState<number | null>(0);
  const [isPrinting, setIsPrinting] = useState(false);
  const [pdfExporting, setPdfExporting] = useState(false);

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

  const handleExportPdf = useCallback(async () => {
    if (!prefersMobilePdfDownload()) {
      window.print();
      return;
    }

    const root = document.querySelector('.resume-modern');
    if (!root || !(root instanceof HTMLElement)) {
      window.print();
      return;
    }

    setPdfExporting(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', compress: true });
      const filename =
        language === 'pt' ? 'Juliana_Veiga_Resume_PT.pdf' : 'Juliana_Veiga_Resume_EN.pdf';

      await doc.html(root, {
        callback: (d) => {
          d.save(filename);
        },
        margin: [8, 8, 8, 8],
        autoPaging: 'text',
        html2canvas: {
          scale: 0.38,
          useCORS: true,
          logging: false,
          scrollY: -window.scrollY,
        },
        width: 194,
        windowWidth: 800,
      });
    } catch (err) {
      console.error(err);
      window.print();
    } finally {
      setPdfExporting(false);
    }
  }, [language]);

  return (
    <div className="resume-modern min-h-screen bg-[#f0f2f5] pb-12 pt-10">
      <div className="resume-modern__layout mx-auto flex max-w-6xl flex-col gap-6 px-4 lg:flex-row lg:items-start lg:gap-8">
        {/* Profile header card */}
        <aside className="w-full shrink-0 rounded-2xl bg-[#F8F9FA] p-6 shadow-sm lg:sticky lg:top-8 lg:w-[min(100%,320px)]">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 print:hidden">
            <button
              type="button"
              onClick={() => {
                void handleExportPdf();
              }}
              disabled={pdfExporting}
              className="inline-flex min-h-[32px] touch-manipulation items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[0.65rem] font-medium leading-none text-blue-600 transition hover:bg-blue-100 disabled:cursor-wait disabled:opacity-60"
            >
              <FileDown className="h-3.5 w-3.5 text-blue-500" />
              <span>{pdfExporting ? L.exportPdfLoading : L.exportPdf}</span>
            </button>
            <button
              type="button"
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              disabled={pdfExporting}
              className="inline-flex min-h-[32px] touch-manipulation items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[0.65rem] font-medium leading-none text-blue-600 transition hover:bg-blue-100 disabled:opacity-50"
            >
              <Languages className="h-3.5 w-3.5 text-blue-500" />
              <span>{language === 'pt' ? L.englishVersion : L.portugueseVersion}</span>
            </button>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-gray-200 shadow-md ring-2 ring-white">
              <img
                src={`${import.meta.env.BASE_URL}juliana-veiga-avatar.png`}
                alt={data.header.name}
                className="h-full w-full object-cover object-[center_22%]"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-[20px] font-bold leading-tight text-gray-900">
                {data.header.name}
              </h1>
              <p className="mt-2 text-[12px] font-semibold leading-[1.35] text-gray-900">
                {data.header.title}
              </p>
            </div>
          </div>

          <p className='mt-3 text-[12px] italic leading-[1.45] text-gray-700'>
            “{L.sidebarMotto}”
          </p>

          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-[0.65rem] font-semibold text-gray-700 sm:justify-start">
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-blue-500" />
              <a href={`mailto:${data.header.email}`} className="hover:underline">
                {data.header.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-3.5 w-3.5 shrink-0 text-blue-500" />
              <a
                href={data.header.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {linkedinSlug(data.header.linkedin)}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-500" />
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

          <div className="mt-8 hidden lg:block">
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
                        <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-neutral-200/40 shadow-sm ring-1 ring-gray-200/90">
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt=""
                              className="absolute inset-0 block h-full w-full object-cover object-center"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-100">
                              <Briefcase className="h-6 w-6 text-gray-400" />
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
                          <h3 className="text-[14px] font-bold text-gray-900">{exp.role}</h3>
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

          <section className="mb-10 hidden print:hidden">
            <div className="mb-3">
              <h2 className="text-lg font-bold text-gray-900">{data.sections.achievements}</h2>
            </div>
            <AchievementsCarousel achievementsHtml={data.achievements} />
          </section>

          <section className="print:hidden">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900">{L.casesTitle}</h2>
            </div>
            <CasesCarousel
              cards={L.casesCards}
              viewLabel={L.casesView}
              comingSoonLabel={L.casesComingSoon}
            />
          </section>

          <section className="mt-10 lg:hidden print:hidden">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900">{data.sections.education}</h2>
            </div>
            <div className="space-y-3">
              {data.education.map((edu, i) => (
                <article
                  key={`mobile-${edu.school}-${i}`}
                  className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
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
                      <p className="text-[0.65rem] font-semibold uppercase text-gray-500">{edu.period}</p>
                      <p className="text-[0.72rem] font-bold leading-tight text-gray-900">
                        {language === 'pt' ? 'Formação' : 'Education'}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-xs font-medium text-orange-600">{edu.school}</p>
                  <p className="text-xs text-gray-500">{edu.location}</p>
                </article>
              ))}
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

      {/* Print-only single-column recruiter version */}
      <div className="resume-modern__print-single mx-auto hidden max-w-4xl px-4 print:block">
        <header className="mb-6 border-b border-gray-200 pb-4">
          <h1 className="text-center text-2xl font-bold text-gray-900">{data.header.name}</h1>
          <p className="mt-1 text-center text-sm font-semibold text-gray-800">{data.header.title}</p>
          <p className="mt-2 text-center text-sm italic text-gray-700">“{L.sidebarMotto}”</p>
          <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-gray-700">
            <li className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-gray-500" />
              <span>{data.header.email}</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Linkedin className="h-3.5 w-3.5 text-gray-500" />
              <span>{linkedinSlug(data.header.linkedin)}</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gray-500" />
              <span>{data.header.location}</span>
            </li>
          </ul>
          <div className="mt-5">
            <p className="text-[0.65rem] font-bold uppercase tracking-wide text-gray-600">
              {L.softSkillsTitle}
            </p>
            <p className="mt-1 text-[0.75rem] text-gray-700">{L.softSkillsTags.join(' • ')}</p>
          </div>
          <div className="mt-4">
            <p className="text-[0.65rem] font-bold uppercase tracking-wide text-gray-600">
              {L.hardSkillsTitle}
            </p>
            <p className="mt-1 text-[0.75rem] text-gray-700">{L.hardSkillsTags.join(' • ')}</p>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="border-b border-gray-300 pb-1 text-base font-bold text-gray-900">
            {data.sections.summary}
          </h2>
          <div
            className="mt-2 max-w-none text-[0.85rem] leading-relaxed text-gray-800 [&_p]:mb-2 [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        </section>

        <section className="mb-6">
          <h2 className="border-b border-gray-300 pb-1 text-base font-bold text-gray-900">
            {data.sections.experience}
          </h2>
          <div className="mt-3 space-y-4">
            {data.experiences.map((exp, index) => (
              <article key={`print-exp-${exp.company}-${index}`} className="break-inside-avoid">
                <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-wide text-gray-500">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
                <h3 className="mt-1 text-[0.95rem] font-bold text-gray-900">{exp.role}</h3>
                <p className="text-[0.85rem] font-semibold text-orange-600">{exp.company}</p>
                {exp.intro ? <p className="mt-1 text-[0.82rem] text-gray-700">{exp.intro}</p> : null}
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[0.8rem] leading-relaxed text-gray-700">
                  {exp.description.map((line, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: line }} />
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="border-b border-gray-300 pb-1 text-base font-bold text-gray-900">
            {data.sections.education}
          </h2>
          <div className="mt-2 space-y-2">
            {data.education.map((edu, i) => (
              <article key={`print-edu-${edu.school}-${i}`}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-wide text-gray-500">{edu.period}</p>
                <p className="text-[0.85rem] font-semibold text-gray-900">{edu.degree}</p>
                <p className="text-[0.8rem] text-orange-600">{edu.school}</p>
                <p className="text-[0.75rem] text-gray-600">{edu.location}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="border-b border-gray-300 pb-1 text-base font-bold text-gray-900">
            {data.sections.certifications}
          </h2>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {data.skillHighlights
              .flatMap((group) => group.cards)
              .map((card, i) => {
                const src = skillHighlightLogoUrl(card.logo);
                return (
                  <article key={`print-cert-${card.source}-${card.title}-${i}`} className="flex items-start gap-2">
                    {src ? (
                      <img src={src} alt={card.source} className="mt-0.5 h-8 w-8 rounded object-contain" />
                    ) : (
                      <div className="mt-0.5 h-8 w-8 rounded bg-gray-100" />
                    )}
                    <div>
                      <p className="text-[0.72rem] font-semibold text-gray-900">{card.title}</p>
                      <p className="text-[0.68rem] text-gray-600">{card.source}</p>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      </div>

    </div>
  );
}
