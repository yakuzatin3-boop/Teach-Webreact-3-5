import Herosection from "../component/home/Herosection";
import WhyChooseTechShop from "../component/home/Whychooseuse";
import ProductCard from "../component/product/ProductCard";
import { useProduct } from "../context/ProductContext";
import { ProductData } from "../data/ProductData";

function Homepage() {
  const { filterProduct } = useProduct();

  const flashsale = ProductData.filter((item)=>item.flashsale === true).slice(0, 4);
  const bestsaller = ProductData.filter((item)=>item.bestseller === true).slice(0,4);
  return (
    <div className="m-0 p-0 bg-gray-100">
      {/* herosection */}
      <Herosection/>
      <div className="m-auto w-7xl mt-5">
        {/* feature */}        <h1 className="font-extrabold text-3xl mb-4 hover:text-orange-500">Flashsale_Product</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {flashsale.map((Item) => (
        <ProductCard key={Item.id} item={Item}/>
        ))}
      </div>
      <h1 className="text-3xl font-extrabold  mt-4 mb-4">Bestsaller</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bestsaller.map((Item) => (
        <ProductCard key={Item.id} item={Item}/>
        ))}
      </div>
      <div>
        <WhyChooseTechShop/>
      </div>
      </div>
    </div>
  );
}

export default Homepage;