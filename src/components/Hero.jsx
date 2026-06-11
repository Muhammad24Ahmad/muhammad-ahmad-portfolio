import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white px-6 pt-28 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-semibold mb-4 text-sm md:text-base">
              MBA Candidate | Data Scientist | Business Analyst
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Bridging AI, Data Analytics, and Business Strategy
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-8 mb-8">
              I build data-driven and AI-powered solutions that help
              organizations automate workflows, improve decision-making, and
              convert complex data into meaningful business insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="text-center bg-cyan-500 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                View Projects
              </a>

              <a
                href={resume}
                download="Muhammad-Ahmad-Resume.pdf"
                className="text-center border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-950 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl shadow-cyan-500/10 max-w-sm w-full">
              <img
                src={profile}
                alt="Muhammad Ahmad"
                className="w-full h-[420px] object-cover object-top rounded-2xl border border-slate-800"
              />

              <div className="mt-5 text-center">
                <h3 className="text-2xl font-bold text-white">
                  Muhammad Ahmad
                </h3>

                <p className="text-cyan-400 mt-1">
                  Data Scientist | MBA Candidate
                </p>

                <p className="text-slate-400 text-sm mt-3">
                  AI, Analytics, Automation & Business Strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;