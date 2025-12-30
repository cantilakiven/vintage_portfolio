import resumePhoto from "@/assets/resume-photo.webp";
import { useEffect, useState } from "react";

const education = [
  {
    degree: "BS Computer Engineering",
    school: "Jose Rizal Memorial State University - Main Campus",
    year: "2020 - 2025",
  },
  {
    degree: "Senior High School - General Academic Strand (GAS)",
    school: "Zamboanga del Norte National High School",
    year: "2018 - 2020",
  },
  {
    degree: "Junior High School",
    school: "Tubak National High School - Mutia Annex",
    year: "2014 - 2018",
  },
  {
    degree: "Primary Education",
    school: "New Siquijor Elementary School",
    year: "2008 - 2014",
  },
];

const experience = [
  {
    title: "On-the-Job Training (OJT)",
    company: "JRMSU Quality Assurance Center",
    period: "2023 - 2024",
    duties: [
      "Assisted in quality assurance processes and documentation",
      "Provided technical support and troubleshooting assistance",
      "Managed administrative tasks and document organization",
    ],
  },
];

const technicalSkills = [
  "Responsive Web Design",
  "Front-End Development (HTML, CSS, JavaScript)",
  "React.js",
  "API Integration",
];

const professionalSkills = [
  "Visual Studio Code",
  "Microsoft Office Suite",
  "Google Workspace",
  "Technical Support & Troubleshooting",
  "Project Documentation",
];

export const ResumeTab = () => {
  // Added auto-scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in font-mono -mt-4 sm:mt-0">
      <h2 className="mb-6 uppercase tracking-tighter font-bold border-b border-zinc-200 dark:border-zinc-800 pb-1 inline-block">Resume</h2>
      
      {/* Header with photo */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-10 opacity-0 animate-fade-in-up stagger-1">
        <div className="flex-shrink-0">
          <div className="relative group">
            <div className="relative w-32 h-32 sm:w-40 sm:h-48 border border-zinc-300 dark:border-zinc-800 p-1 bg-white dark:bg-zinc-900 shadow-sm">
              <img
                src={resumePhoto}
                alt="Kiven Cantila"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight uppercase">Kiven Etol Cantila</h3>
          <p className="text-muted-foreground mb-4 italic text-sm">Web Developer • Computer Engineering Undergrad</p>
          <p className="text-sm text-justify sm:text-left leading-relaxed max-w-2xl opacity-80">
            Below is a summary of my educational background, work experience, and expertise. 
            You can also <a href="/resume.pdf" download className="text-foreground underline underline-offset-4 font-bold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors px-1">download my full resume (PDF)</a>.
          </p>
        </div>
      </div>

      {/* Modern Terminal Divider */}
      <div className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-800 my-10 flex justify-center">
        <span className="bg-[#f5f5f4] dark:bg-[#0a0a0a] px-4 text-xs text-zinc-400 font-bold">{"<< >>"}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Education & Experience */}
        <div className="lg:col-span-2 space-y-10">
          {/* Education */}
          <div className="opacity-0 animate-fade-in-up stagger-2">
            <h3 className="font-bold text-foreground mb-5 text-sm tracking-widest flex items-center gap-2 uppercase">
              <span className="text-zinc-500">{">>"}</span> Education
            </h3>
            <div className="border border-zinc-200 dark:border-zinc-900 p-4 bg-white/50 dark:bg-black/20 shadow-sm">
              <table className="w-full text-xs sm:text-sm">
                <tbody>
                  {education.map((edu, index) => (
                    <tr key={index} className="border-b border-zinc-100 dark:border-zinc-900/50 last:border-0">
                      <td className="w-24 sm:w-32 py-4 align-top opacity-60 font-bold">[{edu.year}]</td>
                      <td className="py-4">
                        <strong className="text-foreground block mb-1 uppercase tracking-tight">{edu.degree}</strong>
                        <span className="text-muted-foreground italic text-xs">{edu.school}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Experience */}
          <div className="opacity-0 animate-fade-in-up stagger-3">
            <h3 className="font-bold text-foreground mb-5 text-sm tracking-widest flex items-center gap-2 uppercase">
              <span className="text-zinc-500">{">>"}</span> Experience
            </h3>
            {experience.map((exp, index) => (
              <div key={index} className="border border-zinc-200 dark:border-zinc-900 p-4 bg-white/50 dark:bg-black/20 shadow-sm">
                <div className="mb-4">
                  <strong className="text-foreground text-base uppercase font-black">{exp.title}</strong>
                  <span className="text-muted-foreground block text-xs mt-1">@ {exp.company} | {exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.duties.map((duty, i) => (
                    <li key={i} className="relative pl-6 text-xs leading-relaxed opacity-80 hover:opacity-100 transition-opacity before:content-['>>'] before:absolute before:left-0 before:text-zinc-500">
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="space-y-8 opacity-0 animate-fade-in-up stagger-4">
          {/* Technical Skills */}
          <div>
            <h3 className="font-bold text-foreground mb-5 text-sm tracking-widest flex items-center gap-2 uppercase">
              <span className="text-zinc-500">{">>"}</span> Tech_Stack
            </h3>
            <div className="border border-zinc-200 dark:border-zinc-900 p-4 bg-zinc-900/5 dark:bg-zinc-100/5 shadow-sm">
              <ul className="space-y-3">
                {technicalSkills.map((skill, index) => (
                  <li key={index} className="relative pl-6 text-xs uppercase tracking-tight before:content-['>'] before:absolute before:left-0 before:text-zinc-500 font-bold">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Productivity Tools */}
          <div>
            <h3 className="font-bold text-foreground mb-5 text-sm tracking-widest flex items-center gap-2 uppercase">
              <span className="text-zinc-500">{">>"}</span> Tools
            </h3>
            <div className="border border-zinc-200 dark:border-zinc-900 p-4 shadow-sm">
              <ul className="space-y-3">
                {professionalSkills.map((skill, index) => (
                  <li key={index} className="relative pl-6 text-xs opacity-80 before:content-['-'] before:absolute before:left-0 before:text-zinc-500">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};