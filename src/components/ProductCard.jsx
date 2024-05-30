const ProductCard = (props) => {
  console.log("ProductCard props:", props); // Logs the entire props object

  const { item, handleClick } = props;
  if (!item) {
    console.error("ProductCard received an invalid 'item' prop");
    return null;
  }

  const { name, gender, price, image } = item;
  console.log("ProductCard received item:", item);
  console.log("ProductCard item name:", name);

  return (
    <div className="border rounded-lg shadow-md w-64 mx-auto mb-8 mt-10 grid-cols-2 hover:scale-110">
      <div className="relative h-48">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover object-top rounded-t-lg "
          src={image}
          alt="Image"
        />
      </div>
      <div className="p-4">
        <p className="text-xl font-semibold mb-2">{name}</p>
        <p className="text-gray-600 mb-2">{gender}</p>
        <p className="text-gray-800 font-bold">${price}</p>
        <button
          className="mt-4 px-4 py-2 bg-[#5C7C9F] text-white rounded hover:bg-[#0A0908] focus:outline-none focus:bg-[#5c7c9f] transition duration-300 ease-in-out"
          onClick={() => handleClick(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
