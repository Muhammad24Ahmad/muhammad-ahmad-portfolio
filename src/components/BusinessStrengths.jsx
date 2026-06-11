import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const strengths = [
  {
    title: "Business Analytics Mindset",
    description:
      "Connects technical outputs with business decisions by interpreting data, identifying trends, and presenting actionable insights to stakeholders.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Finance & Management",
    description:
      "Strong foundation in financial analysis, budgeting, valuation, risk-return concepts, and business decision-making, supporting better strategic judgment and practical management insight.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Automation for Efficiency",
    description:
      "Proven track record automating manual workflows, reducing processing time by 99%+, and improving operational productivity at scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Cross-Functional Communication",
    description:
      "Translates complex technical concepts into clear business language for both technical and non-technical teams and leadership.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
];

function BusinessStrengths() {
  const { ref, visible } = useReveal();

  return (
    <section id="strengths" className="py-24 md:py-28 bg-surface-900 text-white px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${visible ? "visible" : ""}`}
      >
        <SectionHeader
          label="MBA + IT Advantage"
          title="Business Strengths"
          description="A profile that combines technical execution with business understanding — supporting data-driven decision-making, process improvement, automation, and organizational performance."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((strength, index) => (
            <article
              key={strength.title}
              className={`glass-card glass-card-hover rounded-2xl p-6 reveal stagger-${index + 1} ${visible ? "visible" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/15 to-indigo-500/15 flex items-center justify-center text-brand-400 mb-5">
                {strength.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {strength.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessStrengths;
