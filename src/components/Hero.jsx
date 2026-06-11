import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpg";

const targetRoles = [
  "Data Analyst",
  "Business Analyst",
  "Data Scientist",
  "BI Analyst",
  "AI Automation",
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-ahmad997895",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Muhammad24Ahmad",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:muhammadahmad997895@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white px-6 pt-28 pb-20 mesh-bg overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="animate-fade-up flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500" />
              </span>
              <p className="text-brand-400 font-semibold text-sm md:text-base tracking-wide">
                Open to Opportunities · Lahore, Pakistan
              </p>
            </div>

            <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Muhammad Ahmad</span>
            </h1>

            <p className="animate-fade-up text-xl md:text-2xl font-semibold text-slate-200 mb-4 leading-snug">
              Bridging AI, Data Analytics & Business Strategy
            </p>

            <p className="animate-fade-up text-base md:text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              MBA candidate with a Computer Engineering foundation. I build
              data-driven and AI-powered solutions that automate workflows,
              improve decision-making, and turn complex data into actionable
              business insights.
            </p>

            <div className="animate-fade-up flex flex-wrap gap-2 mb-8">
              {targetRoles.map((role) => (
                <span key={role} className="tag-pill">
                  {role}
                </span>
              ))}
            </div>

            <div className="animate-fade-up flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={resume}
                download="Muhammad-Ahmad-Resume.pdf"
                className="btn-secondary"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            <div className="animate-fade-up flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/40 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 via-transparent to-indigo-500/20 rounded-[2rem] blur-2xl animate-pulse-glow" />

              <div className="relative glass-card rounded-[1.75rem] p-5 shadow-2xl shadow-brand-500/10 max-w-sm w-full">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={profile}
                    alt="Muhammad Ahmad — Data Scientist and MBA Candidate"
                    className="w-full h-[400px] lg:h-[440px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent" />
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    Muhammad Ahmad
                  </h3>
                  <p className="text-brand-400 font-medium mt-1">
                    Data Scientist · MBA Candidate
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    AI · Analytics · Automation · Strategy
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { value: "99%+", label: "Time Saved" },
                    { value: "3+", label: "Years IT" },
                    { value: "MBA", label: "In Progress" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center py-3 rounded-xl bg-surface-950/60 border border-slate-800/60"
                    >
                      <p className="text-lg font-bold text-brand-400">{stat.value}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 hover:text-brand-400 transition-colors animate-float"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
