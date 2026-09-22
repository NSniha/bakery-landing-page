const FeaturedCard = ({
  product,
  index,
  isVisible,
  isAdded,
  isFavorite,
  onAdd,
  onFavorite,
  onView,
}) => {
  return (
    <article
      className={`group overflow-hidden rounded-xl border border-black/6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Product image */}
      <div className="relative aspect-[1.08/1] overflow-hidden bg-[#f3f0eb]">
        <button
          type="button"
          onClick={() => onView(product)}
          aria-label={`View ${product.name}`}
          className="block h-full w-full overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
        </button>

        <span className="absolute left-4 top-4 rounded-full bg-[#a9432c] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white shadow-sm sm:text-[11px]">
          {product.badge}
        </span>

        <button
          type="button"
          onClick={() => onFavorite(product)}
          aria-label={
            isFavorite
              ? `Remove ${product.name} from favorites`
              : `Add ${product.name} to favorites`
          }
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border text-[19px] backdrop-blur-md transition-all duration-300 hover:scale-110 ${
            isFavorite
              ? "border-[#a9432c] bg-[#a9432c] text-white"
              : "border-white/70 bg-black/20 text-white hover:border-[#a9432c] hover:bg-[#a9432c]"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <button
          type="button"
          onClick={() => onView(product)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 rounded-full bg-white/95 px-5 py-2.5 text-[12px] font-medium text-[#222] opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick View
        </button>
      </div>

      {/* Product details */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#a9432c] sm:text-[11px]">
            {product.category}
          </span>

          <div className="flex items-center gap-1 text-[#777]">
            <span className="text-[#d79642] text-[18px]">★</span>
            <span className="text-[#d79642] text-[16px]">{product.rating}</span>
          </div>
        </div>

        <h3 className="mt-2 text-[20px] font-medium tracking-[-0.02em] text-[#1b1b1b] sm:text-[22px]">
          {product.shortName}
        </h3>

        <p className="mt-2 line-clamp-2 text-[13px] font-normal leading-6 text-[#777] sm:text-[14px]">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/8 pt-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.12em] text-[#999]">
              Price
            </span>

            <span className="mt-0.5 block text-[24px] font-medium text-[#171717]">
              ${product.price}
            </span>
          </div>

          <button
            type="button"
            disabled={isAdded}
            onClick={() => onAdd(product)}
            className={`group/add relative min-h-12 overflow-hidden rounded-[5px] px-5 text-[14px] font-medium transition-all duration-300 sm:px-6 ${
              isAdded
                ? "cursor-not-allowed bg-[#e7e3dd] text-[#999]"
                : "bg-[#a9432c] text-white hover:-translate-y-1 hover:bg-[#b94a30] hover:shadow-[0_10px_24px_rgba(169,67,44,0.25)]"
            }`}
          >
            {!isAdded && (
              <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-white/15 transition-all duration-700 group-hover/add:left-[130%]" />
            )}

            <span className="relative z-10">
              {isAdded ? "Added" : "Add to Cart"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedCard;