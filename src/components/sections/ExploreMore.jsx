import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import exploreItems from "../../data/exploreItems";
import useInView from "../../hooks/useInView";
import ExploreTabs from "../explore/ExploreTabs";
import ExploreCard from "../explore/ExploreCard";
import ExploreModal from "../explore/ExploreModal";

const ExploreMore = () => {
  const tabs = [
    "Cake",
    "Muffins",
    "Croissant",
    "Bread",
    "Tart",
    "Favorite",
  ];

  const [activeTab, setActiveTab] = useState("Cake");
  const [favorites, setFavorites] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const { elementRef, isVisible } = useInView(0.15);

  const filteredItems = useMemo(() => {
    if (activeTab === "Favorite") {
      return exploreItems.filter((item) =>
        favorites.includes(item.id),
      );
    }

    return exploreItems.filter((item) =>
      item.categories.includes(activeTab),
    );
  }, [activeTab, favorites]);

  const handleFavorite = (item) => {
    const alreadyFavorite = favorites.includes(item.id);

    setFavorites((currentFavorites) =>
      alreadyFavorite
        ? currentFavorites.filter((id) => id !== item.id)
        : [...currentFavorites, item.id],
    );

    if (alreadyFavorite) {
      toast.info(`${item.name} removed from favorites.`);
    } else {
      toast.success(`${item.name} added to favorites.`);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <section
      ref={elementRef}
      id="explore"
      className="overflow-hidden bg-white py-18 sm:py-22.5 lg:py-27"
    >
      <div className="mx-auto w-full max-w-310 px-5 sm:px-8 lg:px-10 xl:px-5">
        {/* Section introduction */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.22em] text-[#a9432c] sm:text-[12px]">
            Find Your Favorite
          </span>

          <h2 className="explore-heading text-[48px] font-semibold italic leading-none text-[#171717] sm:text-[58px] lg:text-[68px]">
            Explore More
          </h2>

          <p className="mx-auto mt-4 max-w-130 text-[14px] leading-6 text-[#777777] sm:text-[15px]">
            Browse our freshly baked collection and discover something
            delicious for every craving.
          </p>
        </div>

        <div
          className={`transition-all delay-100 duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <ExploreTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={handleTabChange}
          />
        </div>

        {/* Filtered gallery */}
        {filteredItems.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
            {filteredItems.map((item, index) => (
              <ExploreCard
                key={`${activeTab}-${item.id}`}
                item={item}
                index={index}
                isVisible={isVisible}
                isFavorite={favorites.includes(item.id)}
                onFavorite={handleFavorite}
                onPreview={setSelectedItem}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-70 flex-col items-center justify-center text-center">
            <span className="text-[37px]">♡</span>

            <h3 className="mt-3 text-[20px] font-medium text-[#252525]">
              No favorites yet
            </h3>

            <p className="mt-2 max-w-90 text-[14px] leading-6 text-[#777777]">
              Tap the heart on any treat you love and it will appear here.
            </p>

            <button
              type="button"
              onClick={() => setActiveTab("Cake")}
              className="mt-5 text-[14px] font-medium text-[#a9432c] transition-colors duration-300 hover:text-[#7e2e1c]"
            >
              Explore treats →
            </button>
          </div>
        )}
      </div>

      <ExploreModal
        item={selectedItem}
        isFavorite={
          selectedItem
            ? favorites.includes(selectedItem.id)
            : false
        }
        onFavorite={handleFavorite}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ExploreMore;