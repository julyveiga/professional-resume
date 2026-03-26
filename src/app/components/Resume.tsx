import React from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Calendar, 
  Globe, 
  Code, 
  Database, 
  Cpu, 
  Cloud, 
  Lightbulb, 
  Languages as LanguagesIcon, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Briefcase,
  FileText,
  Link as LinkIcon
} from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  intro?: string;
  description: string[];
  logo?: string;
}

interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  logo?: string;
}

interface SkillCategory {
  title: string;
  skills: string;
}

interface Publication {
  title: string;
  date?: string;
  link?: string;
  description?: string;
  journal?: string;
  authors?: string;
}

interface Certification {
  title: string;
  institution?: string;
  date?: string;
  credentialId?: string;
  link?: string;
  logo?: string;
}

interface ResumeProps {
  experiences: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
  publications: Publication[];
  certifications: Certification[];
  summary: string;
  achievements?: string;
  footerNote?: string;
  header: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    github?: string;
    portfolio?: string;
    location?: string;
  };
  sections: {
    experience: string;
    summary: string;
    achievements: string;
    skills: string;
    education: string;
    publications: string;
    certifications: string;
  };
  language: 'pt' | 'en';
  onLanguageToggle: () => void;
  /** Quando true, o toggle de idioma no cabeçalho fica oculto (ex.: menu global). */
  hideLanguageToggle?: boolean;
}

function linkedinProfileSlug(linkedinUrl: string): string {
  try {
    const path = new URL(linkedinUrl).pathname.replace(/\/$/, '');
    const segments = path.split('/').filter(Boolean);
    return segments[segments.length - 1] ?? '';
  } catch {
    return '';
  }
}

const Resume = React.forwardRef<HTMLDivElement, ResumeProps>(({
  experiences,
  education,
  skillCategories,
  publications,
  certifications,
  summary,
  achievements = '',
  footerNote = '',
  header,
  sections,
  language,
  onLanguageToggle,
  hideLanguageToggle = false
}, ref) => {
  const getSkillIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('programm') || lowerTitle.includes('programação')) {
      return <Database className="w-4 h-4" />;
    } else if (lowerTitle.includes('data') || lowerTitle.includes('dados')) {
      return <Cpu className="w-4 h-4" />;
    } else if (lowerTitle.includes('machine') || lowerTitle.includes('ml') || lowerTitle.includes('ia')) {
      return <Briefcase className="w-4 h-4" />;
    } else if (lowerTitle.includes('cloud') || lowerTitle.includes('deploy')) {
      return <Cloud className="w-4 h-4" />;
    } else if (lowerTitle.includes('soft') || lowerTitle.includes('socio') || lowerTitle.includes('emocional')) {
      return <Lightbulb className="w-4 h-4" />;
    } else if (lowerTitle.includes('language') || lowerTitle.includes('idioma')) {
      return <LanguagesIcon className="w-4 h-4" />;
    } else if (lowerTitle.includes('competência') || lowerTitle.includes('technical') || lowerTitle.includes('skills')) {
      return <Briefcase className="w-4 h-4" />;
    }
    return <Code className="w-4 h-4" />;
  };

  return (
    <div className="bg-white text-gray-800" data-language={language}>
      <div className="p-5 md:p-6 max-w-[1024px] mx-auto print:shadow-none print:max-w-none print:p-3 print:m-0" id="resume-content" ref={ref}>
        {/* Header */}
        <header className="mb-3 pb-2 relative print:mb-2 print:pb-1">
          {!hideLanguageToggle ? (
            <button
              onClick={onLanguageToggle}
              className="absolute top-0 right-0 flex items-center gap-1.5 px-3 py-1.5 bg-red-900 text-white text-xs font-bold rounded-md hover:bg-red-800 transition-colors print:hidden"
              aria-label="Toggle language"
            >
              <LanguagesIcon className="w-3.5 h-3.5" />
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          ) : null}

          <h1 className="text-3xl font-extrabold text-red-900 mb-0.5 uppercase tracking-tight">{header.name}</h1>
          <h2 className="text-base md:text-lg font-bold text-orange-600 mb-2 leading-snug">{header.title}</h2>
          
          <div className="flex flex-col gap-0.5 text-[0.65rem] text-gray-800 font-semibold">
            {header.location && (
              <div className="flex items-center gap-1">
                <div className="bg-orange-100 p-0.5 rounded-full"><MapPin className="w-2.5 h-2.5 text-orange-600" /></div>
                <span>{header.location}</span>
              </div>
            )}
            <a href={`mailto:${header.email}`} className="flex items-center gap-1 hover:text-red-700 transition-colors">
              <div className="bg-orange-100 p-0.5 rounded-full"><Mail className="w-2.5 h-2.5 text-orange-600" /></div>
              <span>{header.email}</span>
            </a>
            <a href={header.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-700 transition-colors">
              <div className="bg-orange-100 p-0.5 rounded-full"><Linkedin className="w-2.5 h-2.5 text-orange-600" /></div>
              <span>{linkedinProfileSlug(header.linkedin)}</span>
            </a>
            {header.github ? (
              <a href={header.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-700 transition-colors">
                <div className="bg-orange-100 p-0.5 rounded-full"><Github className="w-2.5 h-2.5 text-orange-600" /></div>
                <span>{header.github}</span>
              </a>
            ) : null}
            {header.portfolio ? (
              <a href={header.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-700 transition-colors">
                <div className="bg-orange-100 p-0.5 rounded-full"><Globe className="w-2.5 h-2.5 text-orange-600" /></div>
                <span>{header.portfolio}</span>
              </a>
            ) : null}
          </div>
        </header>

        {/* Conteúdo em 1 coluna no browser; oculto na impressão (usa layout de 2 colunas em baixo) */}
        <div className="flex flex-col gap-5 print:hidden">
          {/* 1. Summary */}
          <section>
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.summary}</h3>
            <div className="text-[0.65rem] text-gray-700 leading-relaxed text-justify space-y-2" dangerouslySetInnerHTML={{ __html: summary }} />
          </section>

          {/* 2. Achievements */}
          {achievements ? (
            <section>
              <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.achievements}</h3>
              <div className="text-[0.65rem] text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: achievements }} />
            </section>
          ) : null}

          {/* 3. Experience */}
          <section>
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-3 uppercase tracking-wide">{sections.experience}</h3>
            <div className="flex flex-col">
              {experiences.map((exp, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="border-t border-dashed border-gray-300 my-3.5"></div>}
                  <div className="relative pl-0">
                    <div className="mb-1 flex items-start gap-3">
                      <div className="relative mt-0.5 h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-neutral-200/40 shadow-sm ring-1 ring-gray-200/90">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt=""
                            className="absolute inset-0 block h-full w-full object-cover object-center"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gray-50">
                            <Briefcase className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-gray-500">
                          <span className="flex items-center gap-0.5">
                            <Calendar className="h-2.5 w-2.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <MapPin className="h-2.5 w-2.5 text-red-800/80" />
                            {exp.location}
                          </span>
                        </div>
                        <h4 className="mb-0.5 text-sm font-bold leading-tight text-red-900">{exp.role}</h4>
                        <div className="text-xs font-bold text-orange-600">{exp.company}</div>
                      </div>
                    </div>
                    {exp.intro ? (
                      <p className="mb-2 ml-[4.75rem] mt-3 max-w-none text-[0.65rem] leading-relaxed text-gray-700">
                        {exp.intro}
                      </p>
                    ) : null}
                    <ul className="ml-[4.75rem] list-disc space-y-0.5 text-[0.65rem] leading-relaxed text-gray-700 marker:text-red-300">
                      {exp.description.map((desc, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* 4. Education */}
          <section>
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.education}</h3>
            <div className="flex flex-col">
              {education.map((edu, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="border-t border-dashed border-gray-300 my-2"></div>}
                  <div className="flex gap-2.5">
                    <div className="mt-0.5 min-w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-white border border-gray-200">
                      {edu.logo ? (
                        <img src={edu.logo} alt={edu.school} className="w-6 h-6 object-contain" />
                      ) : (
                        <GraduationCap className="w-3.5 h-3.5 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-[0.65rem] text-red-900 leading-tight mb-0.5">{edu.degree}</h4>
                      <div className="font-bold text-orange-600 text-[0.6rem] mb-0.5">{edu.school}</div>
                      <div className="flex flex-col gap-0.5 text-[0.55rem] text-gray-500 font-bold uppercase tracking-wide">
                        <span className="flex items-center gap-0.5">
                          <Calendar className="w-2.5 h-2.5 text-gray-400" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-2.5 h-2.5 text-gray-400" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* 5. Skills */}
          <section>
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.skills}</h3>
            <div className="flex flex-col">
              {skillCategories.map((cat, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="border-t border-dashed border-gray-300 my-2"></div>}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-orange-600 bg-orange-50 p-0.5 rounded-md">{getSkillIcon(cat.title)}</span>
                      <h4 className="font-bold text-red-800 text-[0.65rem]">{cat.title}</h4>
                    </div>
                    <p className="text-[0.6rem] text-gray-600 pl-8">
                      {cat.skills}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* 6. Certifications */}
          <section className="mt-6">
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.certifications}</h3>
            <div className="flex flex-col">
              {certifications.map((cert, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="border-t border-dashed border-gray-300 my-1.5"></div>}
                  <div className="flex gap-2.5">
                    <div className="mt-0.5 min-w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-white border border-gray-200">
                      {cert.logo ? (
                        <img src={cert.logo} alt={cert.institution ?? 'Certification'} className="w-6 h-6 object-contain" />
                      ) : (
                        <Award className="w-3.5 h-3.5 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-[0.65rem] text-red-900 leading-tight mb-0.5">{cert.title}</h4>
                      {cert.institution ? (
                        <div className="font-bold text-orange-600 text-[0.6rem] mb-0.5">{cert.institution}</div>
                      ) : null}
                      {(cert.date || cert.credentialId || cert.link) ? (
                        <div className="flex flex-col gap-0.5 text-[0.55rem] text-gray-500">
                          {cert.date ? (
                            <span className="flex items-center gap-0.5 font-bold">
                              <Calendar className="w-2.5 h-2.5" />
                              {cert.date}
                            </span>
                          ) : null}
                          {cert.credentialId && (
                            <span className="text-[0.5rem]">{language === 'pt' ? 'ID do Credencial' : 'Credential ID'}: {cert.credentialId}</span>
                          )}
                          {cert.link && (
                            <span className="text-[0.5rem]">{cert.link}</span>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* 7. Publications */}
          {publications.length > 0 ? (
          <section>
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-3 uppercase tracking-wide">{sections.publications}</h3>
            <div className="flex flex-col">
              {publications.map((pub, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="border-t border-dashed border-gray-300 my-2"></div>}
                  <div className="relative">
                    <h4 className="text-[0.7rem] text-red-900 leading-tight mb-0.5">{pub.title}</h4>
                    <div className="flex items-center gap-2 text-[0.55rem] text-gray-500 font-bold mb-0.5">
                      {pub.date && (
                        <span className="flex items-center gap-0.5">
                          <Calendar className="w-2.5 h-2.5" />
                          {pub.date}
                        </span>
                      )}
                      {pub.link && (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-0.5 text-orange-600 hover:text-orange-700">
                          <LinkIcon className="w-2.5 h-2.5" />
                          Link
                        </a>
                      )}
                    </div>
                    {pub.journal && (
                      <div className="text-[0.6rem] font-bold text-orange-600 mb-0.5 italic">{pub.journal}</div>
                    )}
                    {pub.authors && (
                      <div className="text-[0.6rem] text-gray-600 mb-0.5 italic">{pub.authors}</div>
                    )}
                    {pub.description && (
                      <p className="text-[0.6rem] text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: pub.description }} />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
          ) : null}

          {footerNote ? (
            <p className="text-[0.55rem] text-gray-500 text-center italic pt-2 border-t border-dashed border-gray-200">{footerNote}</p>
          ) : null}
        </div>

        {/* 2 colunas apenas na impressão / PDF */}
        <div className="hidden print:grid print:grid-cols-2 print:gap-x-4 print:gap-y-5 resume-print-two-columns">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Experience */}
            <section>
              <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-3 uppercase tracking-wide">{sections.experience}</h3>
              <div className="flex flex-col">
                {experiences.map((exp, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="border-t border-dashed border-gray-300 my-3.5"></div>}
                    <div className="relative pl-0">
                      <div className="mb-1 flex items-start gap-3">
                        <div className="relative mt-0.5 h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-neutral-200/40 shadow-sm ring-1 ring-gray-200/90">
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt=""
                              className="absolute inset-0 block h-full w-full object-cover object-center"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-50">
                              <Briefcase className="h-6 w-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-gray-500">
                            <span className="flex items-center gap-0.5">
                              <Calendar className="w-2.5 h-2.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <MapPin className="w-2.5 h-2.5 text-red-800/80" />
                              {exp.location}
                            </span>
                          </div>
                          <h4 className="mb-0.5 text-sm font-bold leading-tight text-red-900">{exp.role}</h4>
                          <div className="text-xs font-bold text-orange-600">{exp.company}</div>
                        </div>
                      </div>
                      {exp.intro ? (
                        <p className="mb-2 ml-[4.75rem] mt-3 max-w-none text-[0.65rem] leading-relaxed text-gray-700">
                          {exp.intro}
                        </p>
                      ) : null}
                      <ul className="ml-[4.75rem] list-disc space-y-0.5 text-[0.65rem] leading-relaxed text-gray-700 marker:text-red-300">
                        {exp.description.map((desc, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>

            {/* Publications */}
            {publications.length > 0 ? (
            <section>
              <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-3 uppercase tracking-wide">{sections.publications}</h3>
              <div className="flex flex-col">
                {publications.map((pub, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="border-t border-dashed border-gray-300 my-2"></div>}
                    <div className="relative">
                      <h4 className="text-[0.7rem] text-red-900 leading-tight mb-0.5">{pub.title}</h4>
                      <div className="flex items-center gap-2 text-[0.55rem] text-gray-500 font-bold mb-0.5">
                        {pub.date && (
                          <span className="flex items-center gap-0.5">
                            <Calendar className="w-2.5 h-2.5" />
                            {pub.date}
                          </span>
                        )}
                        {pub.link && (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-0.5 text-orange-600 hover:text-orange-700">
                            <LinkIcon className="w-2.5 h-2.5" />
                            Link
                          </a>
                        )}
                      </div>
                      {pub.journal && (
                        <div className="text-[0.6rem] font-bold text-orange-600 mb-0.5 italic">{pub.journal}</div>
                      )}
                      {pub.authors && (
                        <div className="text-[0.6rem] text-gray-600 mb-0.5 italic">{pub.authors}</div>
                      )}
                      {pub.description && (
                        <p className="text-[0.6rem] text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: pub.description }} />
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>
            ) : null}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Summary */}
            <section>
              <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.summary}</h3>
              <div className="text-[0.65rem] text-gray-700 leading-relaxed text-justify space-y-2" dangerouslySetInnerHTML={{ __html: summary }} />
            </section>

            {/* Achievements */}
            {achievements ? (
              <section>
                <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.achievements}</h3>
                <div className="text-[0.65rem] text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: achievements }} />
              </section>
            ) : null}

            {/* Education */}
            <section>
              <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.education}</h3>
              <div className="flex flex-col">
                {education.map((edu, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="border-t border-dashed border-gray-300 my-2"></div>}
                    <div className="flex gap-2.5">
                      <div className="mt-0.5 min-w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-white border border-gray-200">
                        {edu.logo ? (
                          <img src={edu.logo} alt={edu.school} className="w-6 h-6 object-contain" />
                        ) : (
                          <GraduationCap className="w-3.5 h-3.5 text-gray-500" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-[0.65rem] text-red-900 leading-tight mb-0.5">{edu.degree}</h4>
                        <div className="font-bold text-orange-600 text-[0.6rem] mb-0.5">{edu.school}</div>
                        <div className="flex flex-col gap-0.5 text-[0.55rem] text-gray-500 font-bold uppercase tracking-wide">
                          <span className="flex items-center gap-0.5">
                            <Calendar className="w-2.5 h-2.5 text-gray-400" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <MapPin className="w-2.5 h-2.5 text-gray-400" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.skills}</h3>
              <div className="flex flex-col">
                {skillCategories.map((cat, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="border-t border-dashed border-gray-300 my-2"></div>}
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-orange-600 bg-orange-50 p-0.5 rounded-md">{getSkillIcon(cat.title)}</span>
                        <h4 className="font-bold text-red-800 text-[0.65rem]">{cat.title}</h4>
                      </div>
                      <p className="text-[0.6rem] text-gray-600 pl-8">
                        {cat.skills}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="mt-6">
              <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.certifications}</h3>
              <div className="flex flex-col">
                {certifications.map((cert, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="border-t border-dashed border-gray-300 my-1.5"></div>}
                    <div className="flex gap-2.5">
                      <div className="mt-0.5 min-w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-white border border-gray-200">
                        {cert.logo ? (
                          <img src={cert.logo} alt={cert.institution ?? 'Certification'} className="w-6 h-6 object-contain" />
                        ) : (
                          <Award className="w-3.5 h-3.5 text-gray-500" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-[0.65rem] text-red-900 leading-tight mb-0.5">{cert.title}</h4>
                        {cert.institution ? (
                          <div className="font-bold text-orange-600 text-[0.6rem] mb-0.5">{cert.institution}</div>
                        ) : null}
                        {(cert.date || cert.credentialId || cert.link) ? (
                          <div className="flex flex-col gap-0.5 text-[0.55rem] text-gray-500">
                            {cert.date ? (
                              <span className="flex items-center gap-0.5 font-bold">
                                <Calendar className="w-2.5 h-2.5" />
                                {cert.date}
                              </span>
                            ) : null}
                            {cert.credentialId && (
                              <span className="text-[0.5rem]">{language === 'pt' ? 'ID do Credencial' : 'Credential ID'}: {cert.credentialId}</span>
                            )}
                            {cert.link && (
                              <span className="text-[0.5rem]">{cert.link}</span>
                            )}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>

            {footerNote ? (
              <p className="text-[0.55rem] text-gray-500 text-center italic pt-2 border-t border-dashed border-gray-200 print:mt-2">{footerNote}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;