import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';

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

interface ResumePDFProps {
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
}

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 25,
    fontSize: 9,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottom: '1pt solid #e5e7eb',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#7f1d1d',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#ea580c',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 7.5,
    marginBottom: 3,
  },
  contactItem: {
    flexDirection: 'row',
    marginRight: 15,
    alignItems: 'center',
  },
  contactIcon: {
    color: '#ea580c',
    marginRight: 3,
    fontSize: 8,
  },
  contactLabel: {
    color: '#4b5563',
    fontFamily: 'Helvetica-Bold',
    marginRight: 3,
  },
  contactLink: {
    color: '#1f2937',
    textDecoration: 'none',
  },
  twoColumnContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    width: '55%',
  },
  rightColumn: {
    width: '45%',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#7f1d1d',
    textTransform: 'uppercase',
    borderBottom: '3pt solid #7f1d1d',
    paddingBottom: 3,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  experienceItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottom: '0.5pt dashed #d1d5db',
  },
  lastExperienceItem: {
    marginBottom: 12,
    paddingBottom: 0,
    borderBottom: 'none',
  },
  experienceRole: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#7f1d1d',
    marginBottom: 3,
    lineHeight: 1.3,
  },
  experienceCompany: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#ea580c',
    marginBottom: 4,
  },
  experienceMeta: {
    flexDirection: 'row',
    fontSize: 7,
    color: '#6b7280',
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    marginBottom: 6,
    gap: 10,
  },
  experienceMetaItem: {
    flexDirection: 'row',
  },
  descriptionList: {
    paddingLeft: 8,
  },
  descriptionItem: {
    fontSize: 7.5,
    color: '#374151',
    marginBottom: 3,
    lineHeight: 1.5,
  },
  bullet: {
    color: '#ea580c',
    marginRight: 4,
  },
  publicationItem: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottom: '0.5pt dashed #d1d5db',
  },
  lastPublicationItem: {
    marginBottom: 10,
    paddingBottom: 0,
    borderBottom: 'none',
  },
  publicationTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#7f1d1d',
    marginBottom: 3,
    lineHeight: 1.4,
  },
  publicationMeta: {
    flexDirection: 'row',
    fontSize: 6.5,
    color: '#6b7280',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 3,
    gap: 8,
  },
  publicationLink: {
    color: '#ea580c',
    textDecoration: 'none',
  },
  publicationJournal: {
    fontSize: 7,
    fontFamily: 'Helvetica-BoldOblique',
    color: '#ea580c',
    marginBottom: 2,
  },
  publicationAuthors: {
    fontSize: 7,
    fontFamily: 'Helvetica-Oblique',
    color: '#4b5563',
    marginBottom: 2,
  },
  publicationDescription: {
    fontSize: 7,
    color: '#374151',
    lineHeight: 1.5,
  },
  summaryText: {
    fontSize: 7.5,
    color: '#374151',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  skillItem: {
    marginBottom: 9,
    paddingBottom: 9,
    borderBottom: '0.5pt dashed #d1d5db',
  },
  lastSkillItem: {
    marginBottom: 9,
    paddingBottom: 0,
    borderBottom: 'none',
  },
  skillTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#991b1b',
    marginBottom: 3,
  },
  skillText: {
    fontSize: 7,
    color: '#4b5563',
    lineHeight: 1.5,
  },
  educationItem: {
    marginBottom: 9,
    paddingBottom: 9,
    borderBottom: '0.5pt dashed #d1d5db',
  },
  lastEducationItem: {
    marginBottom: 9,
    paddingBottom: 0,
    borderBottom: 'none',
  },
  educationDegree: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#7f1d1d',
    marginBottom: 3,
    lineHeight: 1.4,
  },
  educationSchool: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: '#ea580c',
    marginBottom: 3,
  },
  educationMeta: {
    fontSize: 6.5,
    color: '#6b7280',
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    lineHeight: 1.4,
  },
  certificationItem: {
    marginBottom: 7,
    paddingBottom: 7,
    borderBottom: '0.5pt dashed #d1d5db',
  },
  lastCertificationItem: {
    marginBottom: 7,
    paddingBottom: 0,
    borderBottom: 'none',
  },
  certificationTitle: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: '#7f1d1d',
    marginBottom: 2,
    lineHeight: 1.4,
  },
  certificationInstitution: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: '#ea580c',
    marginBottom: 3,
  },
  certificationMeta: {
    fontSize: 6.5,
    color: '#6b7280',
    fontFamily: 'Helvetica-Bold',
  },
  certificationCredential: {
    fontSize: 6,
    color: '#6b7280',
    marginTop: 2,
  },
  bold: {
    fontFamily: 'Helvetica-Bold',
  },
});

// Helper function to strip HTML tags and convert to plain text with bold
const stripHtml = (html: string) => {
  return html
    .replace(/<strong[^>]*>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<em[^>]*>/g, '')
    .replace(/<\/em>/g, '')
    .replace(/<a[^>]*>/g, '')
    .replace(/<\/a>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
};

// Helper to extract links from description
const extractLinks = (description: string): { text: string; link?: string }[] => {
  const parts: { text: string; link?: string }[] = [];
  const linkRegex = /<a href=['"]([^'"]+)['"][^>]*>([^<]+)<\/a>/g;
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(description)) !== null) {
    // Add text before link
    if (match.index > lastIndex) {
      const beforeText = description.substring(lastIndex, match.index);
      parts.push({ text: stripHtml(beforeText) });
    }
    // Add link
    parts.push({ text: match[2], link: match[1] });
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < description.length) {
    parts.push({ text: stripHtml(description.substring(lastIndex)) });
  }

  return parts;
};

const ResumePDF: React.FC<ResumePDFProps> = ({
  experiences,
  education,
  skillCategories,
  publications,
  certifications,
  summary,
  header,
  sections,
  language,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{header.name}</Text>
          <Text style={styles.jobTitle}>{header.title}</Text>
          
          <View style={styles.contactRow}>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>✉</Text>
              <Text style={styles.contactLabel}>Email:</Text>
              <Link src={`mailto:${header.email}`} style={styles.contactLink}>
                <Text>{header.email}</Text>
              </Link>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>⚲</Text>
              <Text style={styles.contactLabel}>LinkedIn:</Text>
              <Link src={header.linkedin} style={styles.contactLink}>
                <Text>nina-menezes-cunha</Text>
              </Link>
            </View>
          </View>
          
          <View style={styles.contactRow}>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>⚙</Text>
              <Text style={styles.contactLabel}>GitHub:</Text>
              <Link src={header.github} style={styles.contactLink}>
                <Text>{header.github}</Text>
              </Link>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>●</Text>
              <Text style={styles.contactLabel}>{language === 'pt' ? 'Portfólio' : 'Portfolio'}:</Text>
              <Link src={header.portfolio} style={styles.contactLink}>
                <Text>{header.portfolio}</Text>
              </Link>
            </View>
          </View>
        </View>

        {/* Two Column Layout */}
        <View style={styles.twoColumnContainer}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{sections.experience}</Text>
              {experiences.map((exp, index) => (
                <View key={index} style={index === experiences.length - 1 ? styles.lastExperienceItem : styles.experienceItem}>
                  <Text style={styles.experienceRole}>{exp.role}</Text>
                  <Text style={styles.experienceCompany}>{exp.company}</Text>
                  <View style={styles.experienceMeta}>
                    <Text style={styles.experienceMetaItem}>{exp.period}</Text>
                    <Text>{exp.location}</Text>
                  </View>
                  <View style={styles.descriptionList}>
                    {exp.description.map((desc, i) => (
                      <Text key={i} style={styles.descriptionItem}>• {stripHtml(desc)}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            {/* Publications */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{sections.publications}</Text>
              {publications.map((pub, index) => (
                <View key={index} style={index === publications.length - 1 ? styles.lastPublicationItem : styles.publicationItem}>
                  <Text style={styles.publicationTitle}>{pub.title}</Text>
                  
                  <View style={styles.publicationMeta}>
                    {pub.date && <Text>{pub.date}</Text>}
                    {pub.link && (
                      <Link src={pub.link} style={styles.publicationLink}>
                        <Text>Link</Text>
                      </Link>
                    )}
                  </View>
                  
                  {pub.journal && (
                    <Text style={styles.publicationJournal}>{pub.journal}</Text>
                  )}
                  {pub.authors && (
                    <Text style={styles.publicationAuthors}>{pub.authors}</Text>
                  )}
                  {pub.description && (
                    <Text style={styles.publicationDescription}>
                      {extractLinks(pub.description).map((part, i) => (
                        part.link ? (
                          <Link key={i} src={part.link} style={{ color: '#ea580c' }}>
                            <Text>{part.text}</Text>
                          </Link>
                        ) : (
                          <Text key={i}>{part.text}</Text>
                        )
                      ))}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Summary */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{sections.summary}</Text>
              <Text style={styles.summaryText}>{stripHtml(summary)}</Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{sections.skills}</Text>
              {skillCategories.map((cat, index) => (
                <View key={index} style={index === skillCategories.length - 1 ? styles.lastSkillItem : styles.skillItem}>
                  <Text style={styles.skillTitle}>{cat.title}</Text>
                  <Text style={styles.skillText}>{cat.skills}</Text>
                </View>
              ))}
            </View>

            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{sections.education}</Text>
              {education.map((edu, index) => (
                <View key={index} style={index === education.length - 1 ? styles.lastEducationItem : styles.educationItem}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.educationSchool}>{edu.school}</Text>
                  <View style={styles.educationMeta}>
                    <Text>{edu.period} | {edu.location}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Certifications */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{sections.certifications}</Text>
              {certifications.map((cert, index) => (
                <View key={index} style={index === certifications.length - 1 ? styles.lastCertificationItem : styles.certificationItem}>
                  <Text style={styles.certificationTitle}>{cert.title}</Text>
                  <Text style={styles.certificationInstitution}>{cert.institution}</Text>
                  <View style={styles.certificationMeta}>
                    <Text>{cert.date}</Text>
                    {cert.credentialId && (
                      <Text style={styles.certificationCredential}>
                        {language === 'pt' ? 'ID do Credencial' : 'Credential ID'}: {cert.credentialId}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;