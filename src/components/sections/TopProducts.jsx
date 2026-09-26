import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import products from "../../data/products";
import useInView from "../../hooks/useInView";
import ProductCard from "../products/ProductCard";
import ProductModal from "../products/ProductModal";

const TopProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedProducts, setAddedProducts] = useState([]);

  const { elementRef, isVisible } = useInView(0.12);

  const handleAddProduct = (product) => {
    if (addedProducts.includes(product.id)) {
      toast.info(`${product.shortName} is already added.`);
      return;
    }

    setAddedProducts((currentProducts) => [
      ...currentProducts,
      product.id,
    ]);

    toast.success(`${product.shortName} added successfully.`);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <section
      ref={elementRef}
      id="products"
      className="overflow-hidden bg-white py-18 sm:py-22.5 lg:py-26"
    >
      <div className="mx-auto w-full max-w-310 px-5 sm:px-8 lg:px-10 xl:px-5">
        {/* Section heading */}
        <div className="mb-12 overflow-hidden text-center sm:mb-16 lg:mb-19.5">
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[#a9432c] sm:text-[12px]">
              Freshly Baked Favorites
            </p>
          </div>

          <div
            className={`transition-all delay-100 duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }`}
          >
            <h2 className="product-section-title text-[47px] font-medium leading-none text-[#171717] sm:text-[56px] lg:text-[64px]">
              Top Products
            </h2>
          </div>

          <div
            className={`transition-all delay-200 duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }`}
          >
            <p className="mx-auto mt-4 max-w-130 text-[14px] font-normal leading-6 text-[#777777] sm:text-[15px]">
              Discover a selection of fresh breads and pastries,
              thoughtfully baked with simple ingredients and plenty of
              flavor.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isAdded={addedProducts.includes(product.id)}
              onAdd={handleAddProduct}
              onView={handleViewProduct}
            />
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isAdded={
          selectedProduct
            ? addedProducts.includes(selectedProduct.id)
            : false
        }
        onAdd={handleAddProduct}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default TopProducts;