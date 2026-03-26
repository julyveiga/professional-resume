import type { ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';
import { coeCaseData, type CaseHighlight } from '../data/cases/coeCase';

type SectionCardProps = {
  index: string;
  title: string;
  children: ReactNode;
};

function SectionCard({ index, title, children }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f3e8ff] text-[0.7rem] font-bold text-[#6b21a8]">
          {index}
        </span>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function RecentProjectCoEPage() {
  const miniCardIconBg: Record<CaseHighlight['tone'], string> = {
    purple: 'bg-purple-100',
    blue: 'bg-blue-100',
    green: 'bg-emerald-100',
  };

  const miniCardIconText: Record<CaseHighlight['tone'], string> = {
    purple: 'text-purple-700',
    blue: 'text-blue-700',
    green: 'text-emerald-700',
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <header className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#6b21a8]">
            {coeCaseData.header.eyebrow}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold leading-tight text-gray-900">
            {coeCaseData.header.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {coeCaseData.header.subtitle}
          </p>
        </header>

        <main className="mt-5 space-y-5">
          <SectionCard index={coeCaseData.overview.sectionNumber} title={coeCaseData.overview.sectionTitle}>
            <p className="rounded-xl border border-gray-100 bg-[#fafafa] p-4 text-sm leading-relaxed text-gray-700">
              {coeCaseData.overview.description}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              {coeCaseData.overview.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-gray-100 bg-white p-3 text-center">
                  <p className="text-3xl font-extrabold text-gray-900">{metric.value}</p>
                  <p className="mt-1 text-[0.7rem] tracking-wide text-gray-500 lowercase">{metric.label}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard index={coeCaseData.strategies.sectionNumber} title={coeCaseData.strategies.sectionTitle}>
            <p className="rounded-xl border border-gray-100 bg-[#fafafa] p-4 text-sm leading-relaxed text-gray-700">
              {coeCaseData.strategies.description}
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-100 bg-white p-3 sm:p-4">
              <img
                src={`${import.meta.env.BASE_URL}cases/coe/kpis-coe.png`}
                alt="Estratégia CoE com pilares, foco, direcionadores e KPIs"
                className="mx-auto w-full max-w-4xl rounded-lg bg-white object-contain"
                loading="lazy"
              />
            </div>
          </SectionCard>

          <SectionCard index={coeCaseData.context.sectionNumber} title={coeCaseData.context.sectionTitle}>
            <p className="rounded-xl border border-gray-100 bg-[#fafafa] p-4 text-sm leading-relaxed text-gray-700">
              {coeCaseData.context.text}
            </p>
          </SectionCard>

          <SectionCard index={coeCaseData.problem.sectionNumber} title={coeCaseData.problem.sectionTitle}>
            <div className="rounded-xl border border-red-100 bg-red-50 p-4">
              <ul className="space-y-2 text-sm text-gray-700">
                {coeCaseData.problem.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Circle className="mt-1 h-3.5 w-3.5 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionCard>

          <SectionCard index={coeCaseData.strategyPillars.sectionNumber} title={coeCaseData.strategyPillars.sectionTitle}>
            <p className="rounded-xl border border-gray-100 bg-[#fafafa] p-4 text-sm leading-relaxed text-gray-700">
              {coeCaseData.strategyPillars.description}
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-100 bg-white p-3 sm:p-4">
              <img
                src={`${import.meta.env.BASE_URL}cases/coe/coe-ecossistema.png`}
                alt="Ecossistema de estratégia CoE"
                className="mx-auto w-full max-w-4xl rounded-lg bg-white object-contain"
                loading="lazy"
              />
            </div>
          </SectionCard>

          <SectionCard index={coeCaseData.solution.sectionNumber} title={coeCaseData.solution.sectionTitle}>
            <div className="grid gap-3 sm:grid-cols-2">
              {coeCaseData.solution.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-[#cdeed6] bg-[#e8fff0] p-3 text-sm text-[#174a2a]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c9f43]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {coeCaseData.solution.miniCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-gray-100 bg-white p-3">
                  <div className={`mb-2 inline-flex rounded-lg p-2 ${miniCardIconBg[card.tone]}`}>
                    {card.title === 'People' ? (
                      <Users className={`h-4 w-4 ${miniCardIconText[card.tone]}`} />
                    ) : card.title === 'Process' ? (
                      <Lightbulb className={`h-4 w-4 ${miniCardIconText[card.tone]}`} />
                    ) : (
                      <TrendingUp className={`h-4 w-4 ${miniCardIconText[card.tone]}`} />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-gray-900">{card.title}</p>
                  <p className="mt-1 text-xs text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard index={coeCaseData.practices.sectionNumber} title={coeCaseData.practices.sectionTitle}>
            <div className="grid gap-3 sm:grid-cols-2">
              {coeCaseData.practices.items.map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-100 bg-white p-4">
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard index={coeCaseData.execution.sectionNumber} title={coeCaseData.execution.sectionTitle}>
            <div className="space-y-2 rounded-xl border border-amber-100 bg-amber-50 p-4">
              {coeCaseData.execution.items.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard index={coeCaseData.impact.sectionNumber} title={coeCaseData.impact.sectionTitle}>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
              <div className="mb-3 grid gap-3 sm:grid-cols-3">
                {coeCaseData.impact.cards.map((card) => (
                  <div key={card.label} className="rounded-xl border border-gray-100 bg-white p-3">
                    <p className="text-xs font-medium text-gray-500">{card.label}</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{card.value}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {coeCaseData.impact.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-indigo-100 bg-white p-4">
                    <p className="text-xs text-gray-500">{metric.label}</p>
                    <p className="mt-1 text-3xl font-extrabold text-indigo-700">{metric.value}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {coeCaseData.impact.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </SectionCard>

          <SectionCard
            index={coeCaseData.organizationalImpact.sectionNumber}
            title={coeCaseData.organizationalImpact.sectionTitle}
          >
            <div className="rounded-xl border border-violet-100 bg-violet-50 p-4">
              <p className="text-sm leading-relaxed text-gray-700">
                {coeCaseData.organizationalImpact.description}
              </p>
              <div className="mt-4 rounded-lg bg-[#7c3aed] px-4 py-2 text-center text-xs font-semibold text-white">
                {coeCaseData.organizationalImpact.badgeText}
              </div>
            </div>
          </SectionCard>
        </main>

        <footer className="mt-6 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4 text-[#6b21a8]" />
            {coeCaseData.footerButtonText}
            <ArrowRight className="h-4 w-4 text-[#6b21a8]/70" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
