import ProductCard from "./ProductCard";
import ProductData from "./ProductData";

const Product = () => {
  const handleAddToCart = (item) => {
    console.log("Item added to cart:", item);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ProductData.map((item) => {
        console.log("Rendering item:", item.name); // Log each item before rendering
        return (
          <ProductCard
            key={item.name}
            item={item}
            handleClick={handleAddToCart}
          />
        );
      })}
    </div>
  );
};

export default Product;
