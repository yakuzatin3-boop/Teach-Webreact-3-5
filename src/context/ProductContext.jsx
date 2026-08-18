import { createContext, useContext, useMemo, useState, useTransition } from "react";
import { Children } from "react";
import { ProductData } from "../data/ProductData";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(ProductData);
  const [selectBrand, setSelectbrand] = useState("All");
  const [selectCategory, setSelectCategory] = useState("All");

  const filterProduct = useMemo(() => {
    return product.filter((item) => {
      const brandMath = selectBrand === "All" || item.brand === selectBrand;

      const categoryMath =
        selectCategory === "All" || item.category === selectCategory;

      return brandMath && categoryMath;
    });
  }, [product, selectBrand, selectCategory]);
  
  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        filterProduct,
        selectBrand,
        selectCategory,
        setSelectCategory,
        setSelectbrand,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
