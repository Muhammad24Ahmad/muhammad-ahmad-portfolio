import resume from "../assets/resume.pdf";
import SectionHeader from "./SectionHeader";
import { useReveal } from "../hooks/useReveal";

const contactMethods = [
  {
    label: "Email",
    value: "muhammadahmad997895@gmail.com",
    href: "mailto:muhammadahmad997895@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+92-322-4457877",
    href: "tel:+923224457877",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "muhammad-ahmad997895",
    href: "https://www.linkedin.com/in/muhammad-ahmad997895",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Muhammad24Ahmad",
    href: "https://github.com/Muhammad24Ahmad",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const openRoles = [
  "Data Analyst",
  "Business Analyst",
  "Data Scientist",
  "Management Trainee",
  "AI Automation Analyst",
  "BI Analyst",
  "Digital Transformation",
];

function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="py-24 md:py-28 bg-surface-900 text-white px-6 mesh-bg">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto reveal ${visible ? "visible" : ""}`}
      >
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-14">
          <SectionHeader
            label="Let's Connect"
            title="Open to Business, Data & AI Opportunities"
            description="Interested in roles across data analytics, business analysis, management trainee programs, AI automation, digital transformation, and technology-driven business functions."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10 -mt-6">
            {openRoles.map((role) => (
              <span key={role} className="skill-chip text-xs">
                {role}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-start gap-4 glass-card rounded-xl p-5 hover:border-brand-500/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors shrink-0">
                  {method.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {method.label}
                  </p>
                  <p className="text-brand-400 font-medium break-all group-hover:text-brand-300 transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:muhammadahmad997895@gmail.com" className="btn-primary">
              Send Email
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href={resume}
              download="Muhammad-Ahmad-Resume.pdf"
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
