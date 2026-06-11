const projects = [
  {
    title: "Healthcare AI Automation",
    category: "AI + Healthcare Automation",
    description:
      "Built an end-to-end NLP automation system for clinical guideline processing using Python, PDF parsing, Named Entity Recognition, LLMs, APIs, and web scraping.",
    impact:
      "Reduced processing time by over 99%, transforming a multi-day manual task into a near real-time workflow.",
    tools: ["Python", "NLP", "NER", "LLMs", "APIs", "Web Scraping"],
    github: "https://github.com/Muhammad24Ahmad",
    demo: "#",
  },
  {
    title: "AI-Powered Self-Checkout System",
    category: "Computer Vision + Retail Automation",
    description:
      "Designed a computer vision-based checkout system to identify products without manual barcode scanning and improve checkout efficiency.",
    impact:
      "Demonstrated real-world application of deep learning in retail automation and smart commerce.",
    tools: ["Python", "YOLO", "OpenCV", "Computer Vision"],
    github: "https://github.com/Muhammad24Ahmad",
    demo: "#",
  },
  {
    title: "Car Price Prediction System",
    category: "Predictive Analytics",
    description:
      "Developed predictive models using Linear Regression, Random Forest, Gradient Boosting, and XGBoost for real-time car price estimation.",
    impact:
      "Created a GUI-based decision-support system for accurate price prediction.",
    tools: ["Python", "XGBoost", "Random Forest", "Tkinter"],
    github: "https://github.com/Muhammad24Ahmad",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold mb-2">Portfolio Work</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-3xl leading-7">
            A selection of technical and business-oriented projects demonstrating
            AI automation, predictive analytics, business intelligence, and
            real-world problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-950 rounded-2xl border border-slate-800 p-6 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <div className="mb-4">
                <span className="inline-block text-xs font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-300 leading-7 mb-5">
                {project.description}
              </p>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-5">
                <p className="text-sm text-slate-400">
                  <span className="text-cyan-400 font-semibold">Impact: </span>
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-500 hover:text-slate-950 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex-1 text-center bg-cyan-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;