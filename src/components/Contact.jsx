function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-cyan-400 font-semibold mb-2">
            Let’s Connect
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Open to Business, Data & AI Opportunities
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mb-8 leading-7">
            Interested in roles across Data Analytics, Business Analysis,
            Management Trainee Programs, AI Automation, Digital Transformation,
            Business Intelligence, and technology-driven business functions.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
            <a
              href="mailto:muhammadahmad997895@gmail.com"
              className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/60 transition"
            >
              <p className="text-sm text-slate-500 mb-1">Email</p>
              <p className="text-cyan-400 break-all">
                muhammadahmad997895@gmail.com
              </p>
            </a>

            <a
              href="tel:+923224457877"
              className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/60 transition"
            >
              <p className="text-sm text-slate-500 mb-1">Phone</p>
              <p className="text-cyan-400">+92-322-4457877</p>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammadahmad997895"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/60 transition"
            >
              <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
              <p className="text-cyan-400">muhammadahmad997895</p>
            </a>

            <a
              href="https://github.com/Muhammad24Ahmad"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/60 transition"
            >
              <p className="text-sm text-slate-500 mb-1">GitHub</p>
              <p className="text-cyan-400">Muhammad24Ahmad</p>
            </a>
          </div>

          <a
            href="mailto:muhammadahmad997895@gmail.com"
            className="inline-block bg-cyan-500 text-slate-950 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;