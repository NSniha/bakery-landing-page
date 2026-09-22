import heroBg from "../../assets/images/hero/hero-bg.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[720px] overflow-hidden bg-cover bg-[65%_center] bg-no-repeat sm:min-h-[760px] md:bg-center lg:min-h-[800px]" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1240px] items-center px-5 pt-[80px] sm:min-h-[760px] sm:px-8 md:pt-[90px] lg:min-h-[800px] lg:px-10 xl:px-5">
        {/* Hero content */}
        <div className="hero-content max-w-[590px]">
          <p className="mb-3 text-[16px] font-medium tracking-[0.08em] text-[#e9bd82] sm:text-[18px] lg:text-[20px]">Fresh from our oven</p>

          <h1 className="hero-heading max-w-[580px] text-[52px] font-medium italic leading-[0.98] text-white sm:text-[64px] md:text-[72px] lg:text-[78px]">Freshly Baked,<br />Made to Delight</h1>

          <p className="mt-6 max-w-[470px] text-[14px] font-normal leading-7 text-white/75 sm:text-[15px] lg:text-[16px]">Thoughtfully baked breads and sweet treats made with simple ingredients, warm flavors, and a little extra care in every bite.</p>

          <div className="mt-9 flex flex-wrap items-center gap-4 sm:mt-11 sm:gap-6">
            <a href="#products" className="group relative inline-flex min-h-[54px] items-center justify-center overflow-hidden rounded-[5px] bg-[#a9432c] px-7 text-[15px] font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b94a30] hover:shadow-[0_16px_35px_rgba(0,0,0,0.28)] sm:min-h-[58px] sm:px-9 sm:text-[16px]">
              <span className="absolute -left-full top-0 h-full w-[55%] -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10">Explore Treats</span>
            </a>

            <a href="#about" className="group inline-flex min-h-[54px] items-center gap-2 px-1 text-[15px] font-medium text-[#e9bd82] transition-all duration-300 hover:text-white sm:min-h-[58px] sm:text-[16px]">
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