import { useContext } from "react";
import { ProductsContext } from './../contexts/products-context';

export default function useProducts() {
  const context = useContext(ProductsContext)

  return context
}