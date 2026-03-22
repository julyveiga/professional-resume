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
  institution: string;
  date: string;
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
  header: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  sections: {
    experience: string;
    summary: string;
    skills: string;
    education: string;
    publications: string;
    certifications: string;
  };
  language: 'pt' | 'en';
  onLanguageToggle: () => void;
}

const Resume = React.forwardRef<HTMLDivElement, ResumeProps>(({
  experiences,
  education,
  skillCategories,
  publications,
  certifications,
  summary,
  header,
  sections,
  language,
  onLanguageToggle
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
    }
    return <Code className="w-4 h-4" />;
  };

  return (
    <div className="bg-white text-gray-800" data-language={language}>
      <div className="p-5 md:p-6 max-w-[1024px] mx-auto print:shadow-none print:max-w-none print:p-3 print:m-0" id="resume-content" ref={ref}>
        {/* Header */}
        <header className="mb-3 pb-2 relative print:mb-2 print:pb-1">
          {/* Language Toggle Button */}
          <button
            onClick={onLanguageToggle}
            className="absolute top-0 right-0 flex items-center gap-1.5 px-3 py-1.5 bg-red-900 text-white text-xs font-bold rounded-md hover:bg-red-800 transition-colors print:hidden"
            aria-label="Toggle language"
          >
            <LanguagesIcon className="w-3.5 h-3.5" />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <h1 className="text-3xl font-extrabold text-red-900 mb-0.5 uppercase tracking-tight">{header.name}</h1>
          <h2 className="text-lg font-bold text-orange-600 mb-2">{header.title}</h2>
          
          <div className="flex flex-col gap-0.5 text-[0.65rem] text-gray-800 font-semibold">
            <a href={`mailto:${header.email}`} className="flex items-center gap-1 hover:text-red-700 transition-colors">
              <div className="bg-orange-100 p-0.5 rounded-full"><Mail className="w-2.5 h-2.5 text-orange-600" /></div>
              <span>{header.email}</span>
            </a>
            <a href={header.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-700 transition-colors">
              <div className="bg-orange-100 p-0.5 rounded-full"><Linkedin className="w-2.5 h-2.5 text-orange-600" /></div>
              <span>nina-menezes-cunha</span>
            </a>
            <a href={header.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-700 transition-colors">
              <div className="bg-orange-100 p-0.5 rounded-full"><Github className="w-2.5 h-2.5 text-orange-600" /></div>
              <span>{header.github}</span>
            </a>
            <a href={header.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-700 transition-colors">
              <div className="bg-orange-100 p-0.5 rounded-full"><Globe className="w-2.5 h-2.5 text-orange-600" /></div>
              <span>{header.portfolio}</span>
            </a>
          </div>
        </header>

        {/* MOBILE VERSION - Hidden on desktop */}
        <div className="flex flex-col gap-5 md:hidden print:hidden">
          {/* 1. Summary */}
          <section>
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.summary}</h3>
            <p className="text-[0.65rem] text-gray-700 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: summary }} />
          </section>

          {/* 2. Experience */}
          <section>
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-3 uppercase tracking-wide">{sections.experience}</h3>
            <div className="flex flex-col">
              {experiences.map((exp, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="border-t border-dashed border-gray-300 my-3.5"></div>}
                  <div className="relative pl-0">
                    <div className="flex items-start gap-2.5 mb-1">
                      <div className="mt-0.5 min-w-8 h-8 rounded-lg flex items-center justify-center shadow-sm bg-white border border-gray-200">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-6 h-6 object-contain" />
                        ) : (
                          <Briefcase className="w-3.5 h-3.5 text-gray-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-red-900 leading-tight mb-0.5">{exp.role}</h4>
                        <div className="font-bold text-orange-600 text-xs mb-0.5">{exp.company}</div>
                        <div className="flex items-center gap-2 text-[0.6rem] text-gray-500 font-bold uppercase tracking-wide mb-1.5">
                          <span className="flex items-center gap-0.5">
                            <Calendar className="w-2.5 h-2.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <MapPin className="w-2.5 h-2.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc ml-10 text-[0.65rem] text-gray-700 leading-relaxed space-y-0.5 marker:text-red-300">
                      {exp.description.map((desc, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* 3. Education */}
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

          {/* 4. Skills */}
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

          {/* 5. Certifications */}
          <section className="mt-6">
            <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.certifications}</h3>
            <div className="flex flex-col">
              {certifications.map((cert, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="border-t border-dashed border-gray-300 my-1.5"></div>}
                  <div className="flex gap-2.5">
                    <div className="mt-0.5 min-w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-white border border-gray-200">
                      {cert.logo ? (
                        <img src={cert.logo} alt={cert.institution} className="w-6 h-6 object-contain" />
                      ) : (
                        <Award className="w-3.5 h-3.5 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-[0.65rem] text-red-900 leading-tight mb-0.5">{cert.title}</h4>
                      <div className="font-bold text-orange-600 text-[0.6rem] mb-0.5">{cert.institution}</div>
                      <div className="flex flex-col gap-0.5 text-[0.55rem] text-gray-500">
                        <span className="flex items-center gap-0.5 font-bold">
                          <Calendar className="w-2.5 h-2.5" />
                          {cert.date}
                        </span>
                        {cert.credentialId && (
                          <span className="text-[0.5rem]">{language === 'pt' ? 'ID do Credencial' : 'Credential ID'}: {cert.credentialId}</span>
                        )}
                        {cert.link && (
                          <span className="text-[0.5rem]">{cert.link}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* 6. Publications */}
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
        </div>

        {/* DESKTOP VERSION - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-5 print:grid print:grid-cols-2 print:gap-x-4 print:gap-y-5">
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
                      <div className="flex items-start gap-2.5 mb-1">
                        <div className="mt-0.5 min-w-8 h-8 rounded-lg flex items-center justify-center shadow-sm bg-white border border-gray-200">
                          {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} className="w-6 h-6 object-contain" />
                          ) : (
                            <Briefcase className="w-3.5 h-3.5 text-gray-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm text-red-900 leading-tight mb-0.5">{exp.role}</h4>
                          <div className="font-bold text-orange-600 text-xs mb-0.5">{exp.company}</div>
                          <div className="flex items-center gap-2 text-[0.6rem] text-gray-500 font-bold uppercase tracking-wide mb-1.5">
                            <span className="flex items-center gap-0.5">
                              <Calendar className="w-2.5 h-2.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <MapPin className="w-2.5 h-2.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ul className="list-disc ml-10 text-[0.65rem] text-gray-700 leading-relaxed space-y-0.5 marker:text-red-300">
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
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Summary */}
            <section>
              <h3 className="text-base font-extrabold text-red-900 border-b-4 border-red-900 mb-2.5 uppercase tracking-wide">{sections.summary}</h3>
              <p className="text-[0.65rem] text-gray-700 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: summary }} />
            </section>

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
                          <img src={cert.logo} alt={cert.institution} className="w-6 h-6 object-contain" />
                        ) : (
                          <Award className="w-3.5 h-3.5 text-gray-500" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-[0.65rem] text-red-900 leading-tight mb-0.5">{cert.title}</h4>
                        <div className="font-bold text-orange-600 text-[0.6rem] mb-0.5">{cert.institution}</div>
                        <div className="flex flex-col gap-0.5 text-[0.55rem] text-gray-500">
                          <span className="flex items-center gap-0.5 font-bold">
                            <Calendar className="w-2.5 h-2.5" />
                            {cert.date}
                          </span>
                          {cert.credentialId && (
                            <span className="text-[0.5rem]">{language === 'pt' ? 'ID do Credencial' : 'Credential ID'}: {cert.credentialId}</span>
                          )}
                          {cert.link && (
                            <span className="text-[0.5rem]">{cert.link}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;