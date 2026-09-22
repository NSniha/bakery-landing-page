import cardBg from "../../assets/images/products/product-card-bg.png";

const ProductCard = ({ product, isAdded, onAdd, onView }) => {
  return (
    <article className="group relative flex min-h-[400px] overflow-hidden rounded-[5px] bg-[#171717] text-white shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:min-h-[390px] lg:min-h-[400px]">
      <img src={cardBg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/40" />

      <div className="relative z-10 flex w-full flex-col p-5 sm:p-6 lg:p-7">
        {/* Product preview */}
        <div className="flex h-[215px] items-center justify-center sm:h-[205px] lg:h-[220px]">
          <img src={product.image} alt={product.name} className="max-h-[205px] w-auto max-w-[92%] object-contain drop-shadow-[0_14px_15px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-1" />
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-[22px] font-medium tracking-[-0.02em] text-white">${product.price}</span>

            <button type="button" aria-label={`View information about ${product.name}`} onClick={() => onView(product)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-[19px] font-normal text-white transition-all duration-300 hover:scale-110 hover:border-[#e8b978] hover:bg-[#e8b978] hover:text-[#161616]">i</button>
          </div>

          <div className="mt-7 flex items-end justify-between gap-4">
            <div>
              <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">{product.category}</span>
              <h3 className="max-w-[170px] text-[20px] font-normal leading-[1.12] tracking-[-0.015em] text-white sm:text-[19px] lg:text-[20px]">{product.shortName}</h3>
            </div>

            <button type="button" disabled={isAdded} onClick={() => onAdd(product)} className={`relative min-h-[49px] min-w-[72px] overflow-hidden rounded-[4px] px-4 text-[16px] font-medium transition-all duration-300 ${isAdded ? "cursor-not-allowed bg-white/15 text-white/55" : "group/add bg-[#a9432c] text-white hover:-translate-y-1 hover:bg-[#ba4a30] hover:shadow-[0_10px_20px_rgba(169,67,44,0.3)]"}`}>
              {!isAdded && <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-white/15 transition-all duration-700 group-hover/add:left-[130%]" />}
              <span className="relative">{isAdded ? "Added" : "Add"}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;