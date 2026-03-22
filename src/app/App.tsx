import React, { useState, useRef } from 'react';
import Resume from './components/Resume';
import { FileDown } from 'lucide-react';

// Import Portuguese data
import {
  experiencesPT,
  educationPT,
  skillCategoriesPT,
  publicationsPT,
  certificationsPT,
  summaryPT,
  headerPT,
  sectionsPT
} from './data/resumePT';

// Import English data
import {
  experiencesEN,
  educationEN,
  skillCategoriesEN,
  publicationsEN,
  certificationsEN,
  summaryEN,
  headerEN,
  sectionsEN
} from './data/resumeEN';

function App() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    // Change document title based on language for PDF filename
    const originalTitle = document.title;
    document.title = language === 'pt' 
      ? 'Nina_Menezes_Cunha_Resume_PT' 
      : 'Nina_Menezes_Cunha_Resume_EN';
    
    // Use native browser print functionality
    // Users can save as PDF from the print dialog (Ctrl+P or Cmd+P)
    window.print();
    
    // Restore original title after print dialog
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  // Select data based on current language
  const resumeData = language === 'pt' ? {
    experiences: experiencesPT,
    education: educationPT,
    skillCategories: skillCategoriesPT,
    publications: publicationsPT,
    certifications: certificationsPT,
    summary: summaryPT,
    header: headerPT,
    sections: sectionsPT
  } : {
    experiences: experiencesEN,
    education: educationEN,
    skillCategories: skillCategoriesEN,
    publications: publicationsEN,
    certifications: certificationsEN,
    summary: summaryEN,
    header: headerEN,
    sections: sectionsEN
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      {/* Download Button - Hidden when printing */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button 
          onClick={handleExportPDF}
          className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-1.5 px-3 rounded-full shadow-lg flex items-center gap-1.5 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
        >
          <FileDown className="w-3.5 h-3.5" />
          {language === 'pt' ? 'Baixar PDF' : 'Download PDF'}
        </button>
      </div>

      <div className="container mx-auto px-4 print:px-0 print:max-w-none">
        <div className="md:transform md:scale-125 md:origin-top print:scale-100">
          <Resume 
            {...resumeData}
            language={language}
            onLanguageToggle={toggleLanguage}
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
          
          /* Force all colors to print */
          svg {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          /* Remove container spacing */
          .container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          /* Compact resume content */
          #resume-content {
            max-width: 100% !important;
            padding: 0.5rem !important;
            margin: 0 !important;
          }
          
          /* Force desktop layout with two columns in print */
          .md\\:grid {
            display: grid !important;
          }
          
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          
          .md\\:gap-x-4 {
            column-gap: 1rem !important;
          }
          
          .md\\:gap-y-5 {
            row-gap: 0.75rem !important;
          }
          
          /* Hide mobile version in print */
          .md\\:hidden {
            display: none !important;
          }
          
          /* Show desktop version in print */
          .hidden.md\\:grid {
            display: grid !important;
          }
          
          /* CRITICAL: Keep header with content */
          header {
            page-break-after: avoid !important;
            break-after: avoid !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-bottom: 0.5rem !important;
          }
          
          /* Keep content together */
          .hidden.md\\:grid {
            page-break-before: avoid !important;
            break-before: avoid !important;
          }
          
          /* Prevent breaks inside sections when possible */
          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          /* Allow natural breaks between sections */
          section + section {
            page-break-before: auto;
            break-before: auto;
          }
          
          /* Remove shadows and borders from logo containers */
          .shadow-sm {
            box-shadow: none !important;
          }
          
          .border {
            border: none !important;
          }
          
          .border-gray-200 {
            border: none !important;
          }
          
          /* Remove all shadows */
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          
          /* Compact section spacing */
          section {
            margin-bottom: 1rem !important;
          }
          
          /* Increase spacing between sections in right column (both languages) */
          .gap-5 section {
            margin-bottom: 1.5rem !important;
          }
          
          /* Reduce header bottom spacing */
          header .mb-3 {
            margin-bottom: 0.5rem !important;
          }
          
          /* Reduce header and title sizes slightly */
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
          
          /* Further reduce spacing between items */
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
          
          /* Language-specific spacing for Experience section */
          /* EN: Keep original spacing (my-3.5 = ~0.875rem in print) */
          [data-language="en"] .my-3\\.5 {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          /* PT: Increase spacing more to prevent breaking (my-3.5 = ~1rem in print) */
          [data-language="pt"] .my-3\\.5 {
            margin-top: 0.95rem !important;
            margin-bottom: 0.95rem !important;
          }
          
          /* Reduce line height for compact text */
          p, li, div {
            line-height: 1.3 !important;
          }
          
          /* Reduce certification item spacing */
          section:last-child .my-1\\.5 {
            margin-top: 0.2rem !important;
            margin-bottom: 0.2rem !important;
          }
          
          /* Extra spacing before Certifications section - BOTH LANGUAGES */
          .mt-6 {
            margin-top: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;