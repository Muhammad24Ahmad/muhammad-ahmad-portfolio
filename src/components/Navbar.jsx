import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/95 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white">
          Muhammad Ahmad
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-cyan-400">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white border border-slate-700 rounded-lg px-3 py-2"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-4">
          <div className="flex flex-col gap-4 text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;