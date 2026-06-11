function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="text-cyan-400 font-semibold mb-2">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              IT Background with an MBA Perspective
            </h2>
          </div>

          <div className="md:col-span-2">
            <p className="text-slate-300 leading-8 mb-6">
              I am an MBA candidate with a Computer Engineering background and
              practical experience in data science, machine learning, AI
              automation, dashboards, RESTful APIs, NLP, and computer vision.
            </p>

            <p className="text-slate-400 leading-8">
              My strength lies in connecting technology with business strategy
              by transforming data into actionable insights, automating manual
              workflows, and developing intelligent solutions that improve
              operational efficiency and decision-making.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                <h3 className="text-2xl font-bold text-cyan-400">99%+</h3>
                <p className="text-sm text-slate-400 mt-2">
                  Processing time reduction in AI automation
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                <h3 className="text-2xl font-bold text-cyan-400">70%</h3>
                <p className="text-sm text-slate-400 mt-2">
                  Manual review time reduction
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                <h3 className="text-2xl font-bold text-cyan-400">MBA</h3>
                <p className="text-sm text-slate-400 mt-2">
                  Business-focused analytical mindset
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;