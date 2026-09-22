import offerBg from "../../assets/images/offer/offer-bg.png";
import useInView from "../../hooks/useInView";

const OfferBanner = () => {
  const { elementRef, isVisible } = useInView();

  return (
    <section ref={elementRef} className="relative min-h-105 overflow-hidden sm:min-h-110 lg:min-h-115">
      {/* Promotional background */}
      <img
        src={offerBg}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1500 ease-out ${isVisible ? "scale-100" : "scale-110"}`}
      />

      <div className="absolute inset-0 bg-white/8" />

      <div className="relative z-10 mx-auto flex min-h-105 w-full max-w-310 items-center justify-center px-5 py-14 sm:min-h-110 sm:px-8 sm:py-16 lg:min-h-115 lg:px-10 xl:px-5">
        {/* Offer content */}
        <div className="mx-auto max-w-145 text-center">
          <p className={`mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#a9432c] transition-all duration-700 sm:text-[12px] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
            A Sweeter First Bite
          </p>

          <h2 className={`offer-heading text-[44px] font-semibold italic leading-[0.95] text-[#a9432c] transition-all delay-100 duration-700 sm:text-[55px] md:text-[62px] lg:text-[68px] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            Enjoy 20% Off
            <br />
            Your First Order
          </h2>

          <p className={`mx-auto mt-5 max-w-115 text-[14px] font-normal leading-6 text-[#5f5f5f] transition-all delay-200 duration-700 sm:text-[15px] lg:text-base lg:leading-7 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            Make your first visit a little sweeter. Discover freshly baked breads, pastries, and treats made with care every day.
          </p>

          <div className={`mt-7 transition-all delay-300 duration-700 sm:mt-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <a
              href="#products"
              className="group relative inline-flex min-h-13.5 items-center justify-center overflow-hidden rounded-[5px] bg-[#a9432c] px-7 text-[15px] font-medium text-white shadow-[0_10px_25px_rgba(169,67,44,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b94a30] hover:shadow-[0_16px_35px_rgba(169,67,44,0.28)] sm:min-h-14.5 sm:px-9 sm:text-[16px]"
            >
              <span className="absolute -left-full top-0 h-full w-[55%] -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />
              <span className="relative z-10 flex items-center gap-2">
                Claim Your Offer
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;