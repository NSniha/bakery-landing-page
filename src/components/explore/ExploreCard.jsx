const ExploreCard = ({
  item,
  isFavorite,
  isVisible,
  index,
  onFavorite,
  onPreview,
}) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-[5px] bg-[#f4f1eb] transition-all duration-700 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <button
        type="button"
        onClick={() => onPreview(item)}
        aria-label={`View ${item.name}`}
        className="block aspect-[1.03/1] w-full overflow-hidden"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
      </button>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 right-0 flex translate-y-4 items-end justify-between gap-4 p-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
        <div className="pointer-events-none">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#e9bd82]">
            Freshly Baked
          </p>

          <h3 className="mt-1 text-[16px] font-medium leading-5 text-white sm:text-[17px]">
            {item.name}
          </h3>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onFavorite(item);
          }}
          aria-label={
            isFavorite
              ? `Remove ${item.name} from favorites`
              : `Add ${item.name} to favorites`
          }
          className={`pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            isFavorite
              ? "border-[#a9432c] bg-[#a9432c] text-white"
              : "border-white/70 bg-black/15 text-white hover:border-[#a9432c] hover:bg-[#a9432c]"
          }`}
        >
          <span className="text-[19px] leading-none">
            {isFavorite ? "♥" : "♡"}
          </span>
        </button>
      </div>
    </article>
  );
};

export default ExploreCard;