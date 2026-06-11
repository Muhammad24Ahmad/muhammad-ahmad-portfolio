const skills = {
  Programming: ["Python", "SQL", "R", "C++", "Java", "MATLAB"],
  "Data Science & AI": [
    "Machine Learning",
    "NLP",
    "NER",
    "LLMs",
    "Computer Vision",
    "YOLO",
    "OpenCV",
    "Feature Engineering",
    "Model Evaluation",
  ],
  "Visualization & BI": [
    "Power BI",
    "Tableau",
    "Excel",
    "Plotly",
    "Matplotlib",
    "Dashboards",
    "KPI Reporting",
  ],
  "Business Skills": [
    "Managerial Finance",
    "Digital Marketing",
    "Financial Accounting",
    "Economics",
    "Business Analytics",
    "Research Methodology",
    "Problem Solving",
  ],
};

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold mb-2">
            Technical + Business Toolkit
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Skills
          </h2>

          <p className="text-slate-400 max-w-3xl leading-7">
            A balanced skill set covering programming, analytics, artificial
            intelligence, business intelligence, and MBA-level business
            foundations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/60 transition duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-5">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-slate-950 transition"
                  >
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