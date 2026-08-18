import React, { use, useState } from 'react'
import { ProductData } from '../data/ProductData'
import ProductCard from '../component/product/ProductCard';

function Shoppage() {

  const [product, setproduct] = useState(ProductData);
  const [selectbrand, setselectbrand] = useState("");
  const [selectcategory, setselectcategory] = useState("");

  const filterproduct = product.filter((item)=>{
    const Brand = selectbrand === "" || item.brand === selectbrand;
    const Category = selectcategory === "" || item.category === selectcategory;

    return Brand && Category;
  });

  return (
    <div className='w-7xl m-auto'>

      <div className='flex gap-5'>
        <select 
      value={selectbrand}
      onChange={(e)=>setselectbrand(e.target.value)}
      >
        <option value="">ALL</option>
        <option value="ASUS">ASUS</option>
        <option value="Apple">Apple</option>
      </select>
      
      <select value={selectcategory}
      onChange={(e)=>setselectcategory(e.target.value)}>
        <option value="">ALL Category</option>
        <option value="Laptop">Laptop</option>
        <option value="Smartwatch">Smartwatch</option>
        <option value="Keyboard">Keyboard</option>
        <option value="Speaker">Speaker</option>
        <option value="Mouse">Mouse</option>
      </select>
      </div>
      
      <div className='mt-10 grid md:grid-cols-3 gap-5 lg:grid-cols-4 grid-cols-1'>
        {
          filterproduct.map((data)=>(
            <ProductCard key={data.id} item={data}/>
          ))
        }
      </div>
    </div>
  )
}

export default Shoppage
