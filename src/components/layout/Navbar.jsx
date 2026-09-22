import { useState } from "react";
import logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "Our Menu", href: "#products" },
    { id: 3, label: "About", href: "#about" },
    { id: 4, label: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      {/* Primary navigation */}
      <div className="mx-auto flex h-27.5 w-full max-w-310 items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-5">
        <a href="#home" aria-label="Keithston home" className="relative z-50"><img src={logo} alt="Keithston Coffee Shop" className="hero-logo w-18 sm:w-19.5 lg:w-21.5" /></a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-11">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a href={link.href} className={`group relative text-[15px] font-medium tracking-[0.01em] transition-colors duration-300 lg:text-[16px] ${index === 0 ? "text-[#e9bd82]" : "text-white/90 hover:text-[#e9bd82]"}`}>
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 h-px bg-[#e9bd82] transition-all duration-300 ${index === 0 ? "w-full" : "w-0 group-hover:w-full"}`} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden">
          <span className="relative block h-4.5 w-6.25">
            <span className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-[1.5px] w-full bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-[1.5px] w-full bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div className={`fixed inset-0 z-40 flex items-center justify-center bg-[#121212]/96 backdrop-blur-md transition-all duration-500 md:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <ul className={`flex flex-col items-center gap-7 transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          {navLinks.map((link, index) => (
            <li key={link.id}><a href={link.href} onClick={() => setMenuOpen(false)} className={`text-[18px] font-normal transition-colors duration-300 ${index === 0 ? "text-[#e9bd82]" : "text-white hover:text-[#e9bd82]"}`}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;