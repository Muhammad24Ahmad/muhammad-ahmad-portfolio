const education = [
  {
    degree: "Master of Business Administration",
    institute: "COMSATS University Islamabad, Lahore",
    period: "Sep 2025 – In Progress",
    gpa: "GPA: 3.27 / 4.00",
    focus:
      "Managerial Finance, Digital Marketing, Research Methodology, Financial Accounting, Economics, Marketing, and Human Resource Management.",
  },
  {
    degree: "BS Computer Engineering",
    institute: "Information Technology University of the Punjab, Lahore",
    period: "Aug 2020 – Jun 2024",
    gpa: "GPA: 3.07 / 4.00",
    focus:
      "Programming, Machine Learning, Artificial Intelligence, Databases, Data Science, Software Development, and Computer Vision.",
  },
];

function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold mb-2">
            Academic Foundation
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education
          </h2>

          <p className="text-slate-400 max-w-3xl leading-7">
            A strong academic combination of computer engineering and MBA
            studies, supporting both technical execution and business
            decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/60 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {item.degree}
              </h3>

              <p className="text-cyan-400 font-medium">
                {item.institute}
              </p>

              <p className="text-sm text-slate-500 mt-2">
                {item.period}
              </p>

              <p className="text-slate-300 font-semibold mt-5">
                {item.gpa}
              </p>

              <div className="mt-5 bg-slate-900 border border-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-400 leading-6">
                  <span className="text-cyan-400 font-semibold">
                    Relevant Areas:{" "}
                  </span>
                  {item.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;