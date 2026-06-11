const strengths = [
  {
    title: "Business Analytics Mindset",
    description:
      "Able to connect technical outputs with business decisions by interpreting data, identifying trends, and presenting actionable insights.",
  },
  {
    title: "Finance & Management Understanding",
    description:
      "MBA coursework in managerial finance, accounting, economics, marketing, and research methodology supports stronger business judgment.",
  },
  {
    title: "Automation for Efficiency",
    description:
      "Practical experience in automating manual workflows, reducing processing time, and improving operational productivity.",
  },
  {
    title: "Cross-Functional Communication",
    description:
      "Comfortable working with technical and non-technical teams, translating complex ideas into clear business language.",
  },
];

function BusinessStrengths() {
  return (
    <section className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold mb-2">
            MBA + IT Advantage
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Business Strengths
          </h2>

          <p className="text-slate-400 max-w-3xl leading-7">
            My profile combines technical execution with business understanding,
            allowing me to support data-driven decision-making, process
            improvement, automation, and organizational performance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/60 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5">
                <span className="text-cyan-400 font-bold text-lg">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                {strength.title}
              </h3>

              <p className="text-slate-400 text-sm leading-6">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessStrengths;