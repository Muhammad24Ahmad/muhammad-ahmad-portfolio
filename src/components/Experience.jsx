const experiences = [
  {
    role: "Data Scientist",
    company: "LUMS Energy Institute",
    period: "Nov 2024 – May 2025",
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
    points: [
      "Contributed to a hospital readmission prediction project.",
      "Worked on data preprocessing, feature engineering, and model evaluation.",
      "Implemented OCR-based text extraction for document automation workflows.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold mb-2">
            Professional Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience
          </h2>

          <p className="text-slate-400 max-w-3xl leading-7">
            Practical experience across data science, AI automation, machine
            learning, dashboard development, API integration, and workflow
            optimization.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/60 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-cyan-400 font-medium mt-1">
                    {exp.company}
                  </p>
                </div>

                <span className="text-sm text-slate-400 bg-slate-950 border border-slate-800 px-4 py-2 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 text-slate-300">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 leading-7">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;