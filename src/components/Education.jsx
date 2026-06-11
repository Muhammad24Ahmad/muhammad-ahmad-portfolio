import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const education = [
  {
    degree: "Master of Business Administration",
    institute: "COMSATS University Islamabad, Lahore",
    period: "Sep 2025 – In Progress",
    gpa: "3.27 / 4.00",
    badge: "MBA",
    focus: [
      "Managerial Finance",
      "Financial Statement Understanding",
      "Risk and Return Analysis",
      "Management Accounting & Control",
    ],
  },
  {
    degree: "BS Computer Engineering",
    institute: "Information Technology University of the Punjab, Lahore",
    period: "Aug 2020 – Jun 2024",
    gpa: "3.07 / 4.00",
    badge: "BS",
    focus: [
      "Machine Learning & AI",
      "Data Science & Databases",
      "Software Development",
      "Computer Vision",
      "Programming",
    ],
  },
];

function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="py-24 md:py-28 bg-surface-950 text-white px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${visible ? "visible" : ""}`}
      >
        <SectionHeader
          label="Academic Foundation"
          title="Education"
          description="A dual foundation in computer engineering and MBA studies — supporting both technical execution and strategic business decision-making."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <article
              key={item.degree}
              className={`glass-card glass-card-hover rounded-2xl p-7 md:p-8 reveal stagger-${index + 1} ${visible ? "visible" : ""}`}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="tag-pill">{item.badge}</span>
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                {item.degree}
              </h3>

              <p className="text-brand-400 font-medium text-sm md:text-base">
                {item.institute}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-950/60 border border-slate-800/80">
                <svg className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-sm font-semibold text-slate-300">
                  GPA: {item.gpa}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Key Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((area) => (
                    <span key={area} className="skill-chip text-xs">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
