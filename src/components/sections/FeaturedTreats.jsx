import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import featuredTreats from "../../data/featuredTreats";
import useInView from "../../hooks/useInView";
import FeaturedCard from "../featured/FeaturedCard";
import FeaturedModal from "../featured/FeaturedModal";

const FeaturedTreats = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedProducts, setAddedProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const { elementRef, isVisible } = useInView(0.15);

  const handleAddProduct = (product) => {
    if (addedProducts.includes(product.id)) {
      toast.info(`${product.shortName} is already in your cart.`);
      return;
    }

    setAddedProducts((currentProducts) => [
      ...currentProducts,
      product.id,
    ]);

    toast.success(`${product.shortName} added to your cart.`);
  };

  const handleFavorite = (product) => {
    const alreadyFavorite = favorites.includes(product.id);

    setFavorites((currentFavorites) =>
      alreadyFavorite
        ? currentFavorites.filter((id) => id !== product.id)
        : [...currentFavorites, product.id],
    );

    if (alreadyFavorite) {
      toast.info(`${product.shortName} removed from favorites.`);
      return;
    }

    toast.success(`${product.shortName} added to favorites.`);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <section
      ref={elementRef}
      id="featured"
      className="overflow-hidden bg-white py-18 sm:py-22.5 lg:py-27"
    >
      <div className="mx-auto w-full max-w-310 px-5 sm:px-8 lg:px-10 xl:px-5">
        {/* Section heading */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.22em] text-[#a9432c] sm:text-[12px]">
            Handpicked Favorites
          </span>

          <h2 className="featured-heading text-[46px] font-semibold italic leading-none text-[#171717] sm:text-[58px] lg:text-[68px]">
            Featured Treats
          </h2>

          <p className="mx-auto mt-4 max-w-130 text-[13px] font-normal leading-6 text-[#777] sm:text-[15px]">
            Discover a few of our most-loved treats, freshly prepared and
            ready to make every bite a little sweeter.
          </p>
        </div>

        {/* Featured products */}
        <div className="mt-11 grid grid-cols-1 gap-5 min-[560px]:grid-cols-2 sm:mt-14 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {featuredTreats.map((product, index) => (
            <FeaturedCard
              key={product.id}
              product={product}
              index={index}
              isVisible={isVisible}
              isAdded={addedProducts.includes(product.id)}
              isFavorite={favorites.includes(product.id)}
              onAdd={handleAddProduct}
              onFavorite={handleFavorite}
              onView={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      <FeaturedModal
        product={selectedProduct}
        isAdded={
          selectedProduct
            ? addedProducts.includes(selectedProduct.id)
            : false
        }
        isFavorite={
          selectedProduct
            ? favorites.includes(selectedProduct.id)
            : false
        }
        onAdd={handleAddProduct}
        onFavorite={handleFavorite}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default FeaturedTreats;