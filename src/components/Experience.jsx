import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const experiences = [
  {
    role: "Data Scientist",
    company: "LUMS Energy Institute",
    period: "Nov 2024 – May 2025",
    type: "Full-time",
    points: [
      "Built interactive dashboards using Python and R for data visualization and reporting.",
      "Automated reporting workflows to improve operational efficiency.",
      "Developed and deployed RESTful APIs for external system integration.",
      "Implemented a Twilio-based notification system on production servers.",
    ],
  },
  {
    role: "Software Trainee Engineer — AI",
    company: "CureMD",
    period: "Jul 2024 – Sep 2024",
    type: "Full-time",
    points: [
      "Developed AI-based automation for extracting chemotherapy regimens from clinical guidelines.",
      "Integrated NIH database APIs for automated verification.",
      "Reduced manual review time by approximately 70%.",
      "Applied NLP and machine learning techniques for medical data extraction.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Soliton Technologies",
    period: "Oct 2024 – Nov 2024",
    type: "Internship",
    points: [
      "Contributed to a hospital readmission prediction project.",
      "Worked on data preprocessing, feature engineering, and model evaluation.",
      "Implemented OCR-based text extraction for document automation workflows.",
    ],
  },
];

function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-24 md:py-28 bg-surface-900 text-white px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${visible ? "visible" : ""}`}
      >
        <SectionHeader
          label="Professional Journey"
          title="Experience"
          description="Hands-on experience across data science, AI automation, machine learning, dashboard development, API integration, and workflow optimization."
        />

        <div className="relative">
          <div className="hidden md:block absolute left-[19px] top-3 bottom-3 w-0.5 timeline-line rounded-full" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <article
                key={exp.role + exp.company}
                className={`relative md:pl-14 reveal stagger-${index + 1} ${visible ? "visible" : ""}`}
              >
                <div className="hidden md:flex absolute left-0 top-7 w-10 h-10 rounded-full bg-surface-900 border-2 border-brand-500/50 items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-brand-500" />
                </div>

                <div className="glass-card glass-card-hover rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-brand-400 font-medium">{exp.company}</p>
                    </div>

                    <span className="text-sm text-slate-400 bg-surface-950/80 border border-slate-800 px-4 py-2 rounded-full w-fit whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-slate-300 leading-relaxed">
                        <svg
                          className="w-5 h-5 text-brand-400 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
