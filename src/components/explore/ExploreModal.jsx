import { useEffect } from "react";

const ExploreModal = ({
  item,
  isFavorite,
  onFavorite,
  onClose,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-120 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[5px]"
      onMouseDown={onClose}
    >
      {/* Explore item preview */}
      <div
        className="explore-modal relative w-full max-w-215 overflow-hidden rounded-xl bg-[#faf8f4] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close preview"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-[24px] font-light text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-[#a9432c]"
        >
          ×
        </button>

        <div className="grid md:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-75 overflow-hidden bg-[#171717] sm:min-h-95">
            <img
              src={item.image}
              alt={item.name}
              className="h-full min-h-75 w-full object-cover sm:min-h-95"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#a9432c]">
              Bakery Selection
            </span>

            <h3 className="explore-modal-title mt-3 text-[34px] font-semibold italic leading-none text-[#181818] sm:text-[43px]">
              {item.name}
            </h3>

            <p className="mt-5 text-[14px] font-normal leading-6 text-[#676767] sm:text-[15px]">
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[#eee8df] px-3 py-1.5 text-[11px] font-medium text-[#6d6258]"
                >
                  {category}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onFavorite(item)}
              className={`mt-7 inline-flex min-h-13.5 items-center justify-center rounded-[5px] px-6 text-[14px] font-medium transition-all duration-300 ${
                isFavorite
                  ? "bg-[#191919] text-white hover:-translate-y-1"
                  : "bg-[#a9432c] text-white hover:-translate-y-1 hover:bg-[#b94a30]"
              }`}
            >
              {isFavorite
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreModal;