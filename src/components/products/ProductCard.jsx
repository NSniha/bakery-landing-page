import cardBg from "../../assets/images/products/product-card-bg.png";
import useInView from "../../hooks/useInView";

const ProductCard = ({
  product,
  index = 0,
  isAdded,
  onAdd,
  onView,
}) => {
  const { elementRef, isVisible } = useInView(0.12);

  const revealDelay = `${(index % 3) * 90}ms`;

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: revealDelay }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-10 scale-[0.97] opacity-0"
      }`}
    >
      <article className="group relative flex min-h-100 overflow-hidden rounded-[5px] bg-[#171717] text-white shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:min-h-[390px] lg:min-h-[400px]">
        {/* Product card background */}
        <img
          src={cardBg}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-1000 ease-out ${
            isVisible ? "scale-100" : "scale-[1.05]"
          } group-hover:scale-105`}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/40" />

        <div className="relative z-10 flex w-full flex-col p-5 sm:p-6 lg:p-7">
          {/* Product preview */}
          <div className="flex h-53.75 items-center justify-center sm:h-51.25 lg:h-55">
            <img
              src={product.image}
              alt={product.name}
              className={`max-h-51.25 w-auto max-w-[92%] object-contain drop-shadow-[0_14px_15px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-5 scale-[0.92] opacity-0"
              } group-hover:scale-[1.06] group-hover:-rotate-1`}
            />
          </div>

          <div className="mt-auto">
            {/* Price and info */}
            <div
              className={`flex items-center justify-between transition-all delay-100 duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <span className="text-[22px] font-medium tracking-[-0.02em] text-white">
                ${product.price}
              </span>

              <button
                type="button"
                aria-label={`View information about ${product.name}`}
                onClick={() => onView(product)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-[19px] font-normal text-white transition-all duration-300 hover:scale-110 hover:border-[#e8b978] hover:bg-[#e8b978] hover:text-[#161616] active:scale-95"
              >
                i
              </button>
            </div>

            {/* Product information and action */}
            <div
              className={`mt-7 flex items-end justify-between gap-4 transition-all delay-200 duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div>
                <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">
                  {product.category}
                </span>

                <h3 className="max-w-42.5 text-[20px] font-normal leading-[1.12] tracking-[-0.015em] text-white sm:text-[19px] lg:text-[20px]">
                  {product.shortName}
                </h3>
              </div>

              <button
                type="button"
                disabled={isAdded}
                onClick={() => onAdd(product)}
                className={`relative min-h-[49px] min-w-[72px] overflow-hidden rounded-[4px] px-4 text-[16px] font-medium transition-all duration-300 ${
                  isAdded
                    ? "cursor-not-allowed bg-white/15 text-white/55"
                    : "group/add bg-[#a9432c] text-white hover:-translate-y-1 hover:bg-[#ba4a30] hover:shadow-[0_10px_20px_rgba(169,67,44,0.3)] active:scale-95"
                }`}
              >
                {!isAdded && (
                  <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-white/15 transition-all duration-700 group-hover/add:left-[130%]" />
                )}

                <span className="relative z-10">
                  {isAdded ? "Added" : "Add"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;