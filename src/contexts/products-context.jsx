"use client"

import { createContext, useState } from 'react';
import products from "../database/db"

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [productList, setProductList] = useState(products);

  function updateProductList(updatedProducts) {
    setProductList(updatedProducts);
  }

  const productsContextValue = {
    productList,
    updateProductList,
  };

  return (
    <ProductsContext.Provider value={productsContextValue}>
      {children}
    </ProductsContext.Provider>
  );
}
export { ProductsProvider };