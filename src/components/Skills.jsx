import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const skills = {
  Programming: {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: ["Python", "SQL", "R", "C++", "Java", "MATLAB"],
  },
  "Data Science & AI": {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      "Machine Learning",
      "NLP & NER",
      "LLMs",
      "Computer Vision",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  "Visualization & BI": {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    items: [
      "Power BI",
      "Tableau",
      "Excel",
      "Plotly",
      "Matplotlib",
      "Seaborn",
      "SPSS",
      "Dashboards",
    ],
  },
  "Business Skills": {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      "Business Analysis",
      "Financial Data Interpretation",
      "Budgeting & Forecasting",
      "Data-Driven Decision Making",
      "Problem Solving",
    ],
  },
};

function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-24 md:py-28 bg-surface-950 text-white px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${visible ? "visible" : ""}`}
      >
        <SectionHeader
          label="Technical + Business Toolkit"
          title="Core Skills"
          description="A balanced skill set spanning programming, analytics, artificial intelligence, business intelligence, and MBA-level business foundations."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <div
              key={category}
              className={`glass-card glass-card-hover rounded-2xl p-6 md:p-7 reveal stagger-${index + 1} ${visible ? "visible" : ""}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
