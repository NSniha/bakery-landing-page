import { useEffect } from "react";

const ProductModal = ({ product, isAdded, onAdd, onClose }) => {
  useEffect(() => {
    if (!product) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
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
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-[5px]" onMouseDown={onClose}>
      {/* Product information modal */}
      <div className="product-modal relative w-full max-w-190 overflow-hidden rounded-[14px] bg-[#f8f5ef] shadow-[0_30px_100px_rgba(0,0,0,0.4)]" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" aria-label="Close product details" onClick={onClose} className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[25px] font-light leading-none text-[#171717] transition-all duration-300 hover:rotate-90 hover:bg-[#a9432c] hover:text-white">×</button>

        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="flex min-h-70 items-center justify-center bg-[#171717] p-8 sm:min-h-85">
            <img src={product.image} alt={product.name} className="max-h-68.75 max-w-full object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.35)]" />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
            <span className="mb-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#a9432c]">{product.category}</span>
            <h3 className="product-modal-title text-[34px] font-medium leading-none text-[#191919] sm:text-[42px]">{product.name}</h3>
            <p className="mt-5 text-[14px] font-normal leading-6 text-[#616161] sm:text-[15px]">{product.description}</p>

            <div className="mt-5 border-t border-black/10 pt-5">
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#898989]">Made with</p>
              <p className="mt-2 text-[14px] leading-6 text-[#494949]">{product.ingredients}</p>
            </div>

            <div className="mt-7 flex items-center justify-between gap-5">
              <span className="text-[27px] font-medium text-[#191919]">${product.price}</span>
              <button type="button" disabled={isAdded} onClick={() => onAdd(product)} className={`min-h-13 rounded-[5px] px-7 text-[15px] font-medium transition-all duration-300 ${isAdded ? "cursor-not-allowed bg-[#ded9d0] text-[#8e8a83]" : "bg-[#a9432c] text-white hover:-translate-y-1 hover:bg-[#ba4a30] hover:shadow-[0_10px_24px_rgba(169,67,44,0.25)]"}`}>{isAdded ? "Added to Basket" : "Add to Basket"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;