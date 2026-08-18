import Herosection from "../component/home/Herosection";
import WhyChooseTechShop from "../component/home/Whychooseuse";
import ProductCard from "../component/product/ProductCard";
import { useProduct } from "../context/ProductContext";

function Homepage() {
  const { filterProduct } = useProduct();

  const flashsale = filterProduct
    ?.filter((item) => item.flashsale === true)
    .slice(0, 4);

  const bestsaller = filterProduct
    ?.filter((item) => item.bestseller === true)
    .slice(0, 4);

  return (
    <div className="m-0 p-0 bg-gray-100">
      
      {/* Hero Section */}
      <Herosection />

      <div className="mx-auto max-w-7xl mt-5 px-4">

        {/* Flash Sale */}
        <h1 className="font-extrabold text-3xl mb-4 hover:text-orange-500">
          Flash Sale Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {flashsale?.map((item) => (
            <ProductCard
              key={item._id || item.id}
              item={item}
            />
          ))}
        </div>

        {/* Best Seller */}
        <h1 className="text-3xl font-extrabold mt-8 mb-4">
          Best Sellers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestsaller?.map((item) => (
            <ProductCard
              key={item._id || item.id}
              item={item}
            />
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-10">
          <WhyChooseTechShop />
        </div>

      </div>
    </div>
  );
}

export default Homepage;