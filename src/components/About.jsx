import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    value: "99%+",
    label: "Processing time reduction via AI automation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "70%",
    label: "Manual review time reduction in healthcare AI",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    value: "MBA",
    label: "Business-focused analytical mindset in progress",
  },
];

const valueProps = [
  "Data Science & Machine Learning",
  "AI Automation & NLP",
  "Dashboards & Business Intelligence",
  "RESTful APIs & System Integration",
];

function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 md:py-28 bg-surface-900 text-white px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${visible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <SectionHeader
              label="About Me"
              title="IT Expertise Meets MBA Strategy"
              description="A unique blend of engineering rigor and business acumen."
            />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              I am an MBA candidate with a Computer Engineering background and
              hands-on experience in data science, machine learning, AI
              automation, dashboards, RESTful APIs, NLP, and computer vision.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My strength lies in connecting technology with business strategy —
              transforming raw data into actionable insights, automating manual
              workflows, and building intelligent solutions that improve
              operational efficiency and executive decision-making.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {valueProps.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider my-14" />

        <div className="grid sm:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`glass-card glass-card-hover rounded-2xl p-6 reveal stagger-${i + 1} ${visible ? "visible" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-3xl font-extrabold gradient-text mb-2">
                {item.value}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
