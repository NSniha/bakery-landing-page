import heroBg from "../../assets/images/hero/hero-bg.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-180 overflow-hidden bg-cover bg-[50%_center] bg-no-repeat sm:min-h-190 md:bg-center lg:min-h-200" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 mx-auto flex min-h-180 w-full max-w-310 items-center px-5 pt-20 sm:min-h-190 sm:px-8 md:pt-22.5 lg:min-h-200 lg:px-10 xl:px-5">
        {/* Hero content */}
        <div className="hero-content max-w-147.5">
          <p className="mb-3 text-[14px] font-medium tracking-[0.06em] text-[#e9bd82] sm:text-[16px] lg:text-[16px]">Fresh from our oven</p>

          <h1 className="hero-heading max-w-145 text-[52px] font-extrabold italic leading-[0.98] text-white sm:text-[64px] md:text-[80px] lg:text-[86px]">Freshly Baked,<br />Made to Delight</h1>

          <p className="mt-6 max-w-117.5 text-[15px] font-normal lg:leading-7 leading-6 text-white/80 sm:text-[15px] lg:text-base">Thoughtfully baked breads and sweet treats made with simple ingredients, warm flavors, and a little extra care in every bite.</p>

          <div className="mt-9 flex flex-wrap items-center gap-4 sm:mt-11 sm:gap-6">
            <a href="#products" className="group relative inline-flex min-h-13.5 items-center justify-center overflow-hidden rounded-[5px] bg-[#a9432c] px-7 text-[15px] font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b94a30] hover:shadow-[0_16px_35px_rgba(0,0,0,0.28)] sm:min-h-14.5 sm:px-9 sm:text-[16px]">
              <span className="absolute -left-full top-0 h-full w-[55%] -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10">Explore Treats</span>
            </a>

            <a href="#about" className="group inline-flex min-h-13.5 items-center gap-2 px-1 text-[15px] font-medium text-[#e9bd82] transition-all duration-300 hover:text-white sm:min-h-14.5 sm:text-[16px]">
              Our Story
              <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
};

export default Hero;