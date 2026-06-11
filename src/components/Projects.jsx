import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    title: "Healthcare AI Automation",
    category: "AI + Healthcare",
    featured: false,
    description:
      "End-to-end NLP automation system for clinical guideline processing using Python, PDF parsing, NER, LLMs, APIs, and web scraping.",
    impact:
      "Reduced processing time by over 99% — transforming a multi-day manual task into a near real-time workflow.",
    tools: ["Python", "NLP", "NER", "LLMs", "APIs", "Web Scraping"],
    github: "https://github.com/Muhammad24Ahmad",
  },
  {
    title: "AI-Powered Self-Checkout System",
    category: "Computer Vision",
    featured: false,
    description:
      "Computer vision-based checkout system to identify products without manual barcode scanning and improve retail efficiency.",
    impact:
      "Demonstrated real-world deep learning application in retail automation and smart commerce.",
    tools: ["Python", "YOLO", "OpenCV", "Computer Vision"],
    github: "https://github.com/Muhammad24Ahmad",
  },
  {
    title: "Car Price Prediction System",
    category: "Predictive Analytics",
    featured: false,
    description:
      "Predictive models using Linear Regression, Random Forest, Gradient Boosting, and XGBoost for real-time car price estimation.",
    impact:
      "Built a GUI-based decision-support system for accurate, data-driven price prediction.",
    tools: ["Python", "XGBoost", "Random Forest", "Tkinter"],
    github: "https://github.com/Muhammad24Ahmad",
  },
];

function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-24 md:py-28 bg-surface-950 text-white px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${visible ? "visible" : ""}`}
      >
        <SectionHeader
          label="Portfolio Work"
          title="Featured Projects"
          description="Technical and business-oriented projects demonstrating AI automation, predictive analytics, business intelligence, and real-world problem solving."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group glass-card glass-card-hover rounded-2xl p-6 flex flex-col reveal stagger-${index + 1} ${visible ? "visible" : ""} ${
                project.featured ? "md:col-span-2 lg:col-span-1 ring-1 ring-brand-500/20" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="tag-pill">{project.category}</span>
                {project.featured && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-brand-500/15 text-brand-400">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="rounded-xl bg-brand-500/5 border border-brand-500/15 p-4 mb-5">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <span className="text-brand-400 font-semibold">Impact: </span>
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <span key={tool} className="skill-chip text-xs">
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-sm w-full !py-2.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
