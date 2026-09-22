import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import products from "../../data/products";
import ProductCard from "../products/ProductCard";
import ProductModal from "../products/ProductModal";

const TopProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedProducts, setAddedProducts] = useState([]);

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
      id="products"
      className="bg-white py-18 sm:py-22.5 lg:py-26"
    >
      <div className="mx-auto w-full max-w-310 px-5 sm:px-8 lg:px-10 xl:px-5">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-19.5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[#a9432c] sm:text-[12px]">
            Freshly Baked Favorites
          </p>

          <h2 className="product-section-title text-[47px] font-medium leading-none text-[#171717] sm:text-[56px] lg:text-[64px]">
            Top Products
          </h2>

          <p className="mx-auto mt-4 max-w-130 text-[14px] font-normal leading-6 text-[#777777] sm:text-[15px]">
            Discover a selection of fresh breads and pastries, thoughtfully
            baked with simple ingredients and plenty of flavor.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
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