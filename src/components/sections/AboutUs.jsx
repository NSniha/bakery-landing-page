import aboutBg from "../../assets/images/about/about-bg.png";
import useInView from "../../hooks/useInView";

const AboutUs = () => {
  const { elementRef, isVisible } = useInView(0.2);

  return (
    <section ref={elementRef} id="about" className="relative min-h-105 overflow-hidden bg-[#222] sm:min-h-110 lg:min-h-115">
      {/* About background */}
      <img src={aboutBg} alt="" aria-hidden="true" className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1500 ease-out ${isVisible ? "scale-100" : "scale-108"}`} />

      <div className="absolute inset-0 bg-black/32 sm:bg-black/22 lg:bg-black/12" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/35 to-black/10 sm:via-black/25" />

      <div className="relative z-10 mx-auto flex min-h-105 w-full max-w-310 items-center justify-center px-5 py-14 sm:min-h-110 sm:px-8 sm:py-16 lg:min-h-115 lg:px-10 xl:px-5">
        {/* About content */}
        <div className="mx-auto max-w-145 text-center">
          <p className={`mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#e9bd82] transition-all duration-700 sm:text-[12px] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>Crafted Fresh Every Day</p>

          <h2 className={`about-heading text-[45px] font-semibold italic leading-none text-white transition-all delay-100 duration-700 sm:text-[56px] lg:text-[64px] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>About Us</h2>

          <p className={`mx-auto mt-5 max-w-120 text-[14px] font-normal leading-6 text-white/75 transition-all delay-200 duration-700 sm:text-[15px] lg:text-base lg:leading-7 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>We believe the best moments begin with something freshly baked. From artisan breads to delicate pastries, every recipe is made with quality ingredients, patience, and genuine care.</p>

          <div className={`mt-7 transition-all delay-300 duration-700 sm:mt-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <a href="#featured" className="group relative inline-flex min-h-13.5 items-center justify-center overflow-hidden rounded-[5px] bg-[#a9432c] px-7 text-[15px] font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b94a30] hover:shadow-[0_16px_35px_rgba(0,0,0,0.3)] sm:min-h-14.5 sm:px-9 sm:text-[16px]">
              <span className="absolute -left-full top-0 h-full w-[55%] -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10 flex items-center gap-2">Discover Our Story <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/12 to-transparent" />
    </section>
  );
};

export default AboutUs;