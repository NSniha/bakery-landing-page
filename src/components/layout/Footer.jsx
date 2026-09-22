import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/icons/logo.svg";
import footerBg from "../../assets/images/footer/footer-bg.png";
import footerNews from "../../data/footerNews";
import useInView from "../../hooks/useInView";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { elementRef, isVisible } = useInView(0.1);

  const navLinks = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "Products", href: "#products" },
    { id: 3, label: "Explore", href: "#explore" },
    { id: 4, label: "About Us", href: "#about" },
    { id: 5, label: "Featured", href: "#featured" },
  ];

  const socialLinks = [
    { id: 1, label: "Facebook", href: "#", icon: FaFacebookF },
    { id: 2, label: "Pinterest", href: "#", icon: FaPinterestP },
    { id: 3, label: "WhatsApp", href: "#", icon: FaWhatsapp },
    { id: 4, label: "Instagram", href: "#", icon: FaInstagram },
  ];

  return (
    <footer ref={elementRef} id="contact" className="relative overflow-hidden bg-[#111] text-white">
      {/* Footer background */}
      <img src={footerBg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto w-full max-w-310 px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:pt-16 lg:pb-10 xl:px-5">
        {/* Footer top */}
        <div className={`flex flex-col gap-8 border-b border-[#e9bd82]/20 pb-8 transition-all duration-700 sm:flex-row sm:items-center sm:justify-between sm:pb-9 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <a href="#home" aria-label="Keithston home" className="inline-flex w-fit transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Keithston Coffee Shop" className="w-24 object-contain sm:w-27" />
          </a>

          <div className="flex flex-col gap-4 sm:items-end">
            <p className="text-[15px] font-medium text-[#e9bd82] sm:text-[16px]">Follow us</p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ id, label, href, icon: Icon }) => (
                <a key={id} href={href} aria-label={label} className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#e9bd82] text-[#191919] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white sm:h-11 sm:w-11">
                  <Icon className="text-[17px] transition-transform duration-300 group-hover:rotate-6 sm:text-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1fr_0.8fr_1.2fr] lg:gap-16 lg:py-12">
          <div className={`transition-all delay-100 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <h3 className="text-[24px] font-medium text-[#e9bd82] sm:text-[26px]">About Us</h3>

            <div className="mt-5 space-y-2.5 text-[14px] leading-6 text-white/75 sm:text-[15px]">
              <p>Fresh breads, pastries, and treats baked with care every day.</p>

              <a href="tel:+8801234567890" className="block w-fit transition-colors duration-300 hover:text-[#e9bd82]">+880 1234-567890</a>

              <a href="mailto:hello@keithston.com" className="block w-fit transition-colors duration-300 hover:text-[#e9bd82]">hello@keithston.com</a>

              <p>Freshly baked, thoughtfully served.</p>
            </div>
          </div>

          <div className={`transition-all delay-200 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <h3 className="text-[24px] font-medium text-[#e9bd82] sm:text-[26px]">Explore</h3>

            <nav className="mt-5">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} className="group inline-flex items-center gap-2 text-[14px] font-normal text-white/80 transition-colors duration-300 hover:text-[#e9bd82] sm:text-[15px]">
                      <span className="h-px w-0 bg-[#e9bd82] transition-all duration-300 group-hover:w-4" />
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={`transition-all delay-300 duration-700 sm:col-span-2 lg:col-span-1 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <h3 className="text-[24px] font-medium text-[#e9bd82] sm:text-[26px]">Recent News</h3>

            <div className="mt-5 space-y-5">
              {footerNews.map((news) => (
                <article key={news.id} className="group flex max-w-110 items-center gap-4">
                  <div className="h-18 w-24 shrink-0 overflow-hidden rounded-sm sm:h-19 sm:w-26">
                    <img src={news.image} alt={news.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div>
                    <p className="text-[11px] text-[#e9bd82] sm:text-[12px]">{news.date}</p>
                    <h4 className="mt-1 text-[14px] font-medium leading-5 text-white/85 transition-colors duration-300 group-hover:text-white sm:text-[15px]">{news.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t border-white/8 pt-10 text-center transition-all delay-400 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
          <p className="text-[12px] font-normal text-white/45 sm:text-[13px]">
            © {currentYear} Keithston Bake House. Crafted with care for every sweet moment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;