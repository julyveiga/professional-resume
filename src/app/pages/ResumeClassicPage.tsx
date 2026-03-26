import React, { useRef, useState } from 'react';
import Resume from '../components/Resume';
import { FileDown, ImageDown } from 'lucide-react';
import { useAppLanguage } from '../context/AppLanguageContext';

import {
  experiencesPT,
  educationPT,
  skillCategoriesPT,
  publicationsPT,
  certificationsPT,
  summaryPT,
  achievementsPT,
  footerNotePT,
  headerPT,
  sectionsPT,
} from '../data/resumePT';

import {
  experiencesEN,
  educationEN,
  skillCategoriesEN,
  publicationsEN,
  certificationsEN,
  summaryEN,
  achievementsEN,
  footerNoteEN,
  headerEN,
  sectionsEN,
} from '../data/resumeEN';

export default function ResumeClassicPage() {
  const { language, toggleLanguage } = useAppLanguage();
  const [isExportingPng, setIsExportingPng] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    const originalTitle = document.title;
    document.title =
      language === 'pt' ? 'Juliana_Veiga_Resume_PT' : 'Juliana_Veiga_Resume_EN';
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const handleExportPNG = async () => {
    const el = resumeRef.current;
    if (!el || isExportingPng) return;

    setIsExportingPng(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const filename =
        language === 'pt' ? 'Juliana_Veiga_Resume_PT.png' : 'Juliana_Veiga_Resume_EN.png';

      await new Promise<void>((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('PNG vazio'));
              return;
            }
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = filename;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
            resolve();
          },
          'image/png',
          1
        );
      });
    } catch (err) {
      console.error(err);
      window.alert(
        language === 'pt'
          ? 'Não foi possível gerar o PNG. Tente outro browser ou desative bloqueadores.'
          : 'Could not generate PNG. Try another browser or disable blockers.'
      );
    } finally {
      setIsExportingPng(false);
    }
  };

  const resumeData =
    language === 'pt'
      ? {
          experiences: experiencesPT,
          education: educationPT,
          skillCategories: skillCategoriesPT,
          publications: publicationsPT,
          certifications: certificationsPT,
          summary: summaryPT,
          achievements: achievementsPT,
          footerNote: footerNotePT,
          header: headerPT,
          sections: sectionsPT,
        }
      : {
          experiences: experiencesEN,
          education: educationEN,
          skillCategories: skillCategoriesEN,
          publications: publicationsEN,
          certifications: certificationsEN,
          summary: summaryEN,
          achievements: achievementsEN,
          footerNote: footerNoteEN,
          header: headerEN,
          sections: sectionsEN,
        };

  return (
    <div className="min-h-screen bg-gray-100 pb-8 pt-12 print:bg-white print:py-0 print:pt-0">
      <div className="fixed right-4 top-4 z-50 flex flex-col items-end gap-2 print:hidden">
        <button
          type="button"
          onClick={handleExportPDF}
          className="flex transform items-center gap-1.5 rounded-full bg-orange-600 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FileDown className="h-3.5 w-3.5" />
          {language === 'pt' ? 'Baixar PDF' : 'Download PDF'}
        </button>
        <button
          type="button"
          onClick={handleExportPNG}
          disabled={isExportingPng}
          className="flex transform items-center gap-1.5 rounded-full bg-red-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ImageDown className="h-3.5 w-3.5" />
          {isExportingPng
            ? language === 'pt'
              ? 'A gerar PNG…'
              : 'Generating PNG…'
            : language === 'pt'
              ? 'Baixar PNG'
              : 'Download PNG'}
        </button>
      </div>

      <div className="container mx-auto px-4 print:max-w-none print:px-0">
        <div className="md:origin-top print:scale-100 md:scale-125 md:transform">
          <Resume
            {...resumeData}
            language={language}
            onLanguageToggle={toggleLanguage}
            hideLanguageToggle
            ref={resumeRef}
          />
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            margin: 0.5cm;
            size: A4 portrait;
          }
          
          html, body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            margin: 0 !important;
            padding: 0 !important;
            width: 100%;
            height: 100%;
          }
          
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
          }
          
          svg {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          #resume-content {
            max-width: 100% !important;
            padding: 0.5rem !important;
            margin: 0 !important;
          }
          
          .resume-print-two-columns {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 1rem !important;
            row-gap: 0.75rem !important;
            page-break-before: avoid !important;
            break-before: avoid !important;
          }
          
          header {
            page-break-after: avoid !important;
            break-after: avoid !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-bottom: 0.5rem !important;
          }
          
          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          section + section {
            page-break-before: auto;
            break-before: auto;
          }
          
          .shadow-sm {
            box-shadow: none !important;
          }
          
          .border {
            border: none !important;
          }
          
          .border-gray-200 {
            border: none !important;
          }
          
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          
          section {
            margin-bottom: 1rem !important;
          }
          
          .gap-5 section {
            margin-bottom: 1.5rem !important;
          }
          
          header .mb-3 {
            margin-bottom: 0.5rem !important;
          }
          
          h1 {
            font-size: 1.75rem !important;
            margin-bottom: 0.25rem !important;
          }
          
          h2 {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          h3 {
            font-size: 0.9rem !important;
            margin-bottom: 0.5rem !important;
            padding-bottom: 0.25rem !important;
          }
          
          .my-3 {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .my-2 {
            margin-top: 0.4rem !important;
            margin-bottom: 0.4rem !important;
          }
          
          .my-1\\.5 {
            margin-top: 0.3rem !important;
            margin-bottom: 0.3rem !important;
          }
          
          .mb-3 {
            margin-bottom: 0.5rem !important;
          }
          
          .mb-2\\.5 {
            margin-bottom: 0.4rem !important;
          }
          
          .mb-2 {
            margin-bottom: 0.3rem !important;
          }
          
          [data-language="en"] .my-3\\.5 {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          [data-language="pt"] .my-3\\.5 {
            margin-top: 0.95rem !important;
            margin-bottom: 0.95rem !important;
          }
          
          p, li, div {
            line-height: 1.3 !important;
          }
          
          section:last-child .my-1\\.5 {
            margin-top: 0.2rem !important;
            margin-bottom: 0.2rem !important;
          }
          
          .mt-6 {
            margin-top: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}
