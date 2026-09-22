import { useEffect } from "react";

const FeaturedModal = ({
  product,
  isAdded,
  isFavorite,
  onAdd,
  onFavorite,
  onClose,
}) => {
  useEffect(() => {
    if (!product) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[5px]"
      onMouseDown={onClose}
    >
      {/* Featured product preview */}
      <div
        className="featured-modal relative w-full max-w-215 overflow-hidden rounded-xl bg-[#faf8f4] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product preview"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-[24px] font-light text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-[#a9432c]"
        >
          ×
        </button>

        <div className="grid md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-75 overflow-hidden bg-[#181818] sm:min-h-100">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#a9432c]">
                {product.category}
              </span>

              <span className="text-[12px] text-[#777]">
                <span className="text-[#d79642]">★</span>{" "}
                {product.rating}
              </span>
            </div>

            <h3 className="featured-modal-title mt-3 text-[36px] font-semibold italic leading-none text-[#171717] sm:text-[46px]">
              {product.name}
            </h3>

            <p className="mt-5 text-[14px] leading-6 text-[#666] sm:text-[15px]">
              {product.description}
            </p>

            <div className="mt-5 border-t border-black/10 pt-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#999]">
                Made With
              </span>

              <p className="mt-2 text-[13px] leading-6 text-[#666] sm:text-[14px]">
                {product.ingredients}
              </p>
            </div>

            <div className="mt-7 flex items-center justify-between gap-4">
              <span className="text-[29px] font-medium text-[#191919]">
                ${product.price}
              </span>

              <button
                type="button"
                onClick={() => onFavorite(product)}
                className={`flex h-12 w-12 items-center justify-center rounded-full border text-[20px] transition-all duration-300 hover:scale-105 ${
                  isFavorite
                    ? "border-[#a9432c] bg-[#a9432c] text-white"
                    : "border-black/15 text-[#333] hover:border-[#a9432c] hover:text-[#a9432c]"
                }`}
              >
                {isFavorite ? "♥" : "♡"}
              </button>

              <button
                type="button"
                disabled={isAdded}
                onClick={() => onAdd(product)}
                className={`min-h-12 rounded-[5px] px-6 text-[14px] font-medium transition-all duration-300 ${
                  isAdded
                    ? "cursor-not-allowed bg-[#dfdbd4] text-[#96918b]"
                    : "bg-[#a9432c] text-white hover:-translate-y-1 hover:bg-[#b94a30]"
                }`}
              >
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedModal;