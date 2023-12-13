import { ProductsProvider } from "./products-context";

export default function AppProvider({ children }) {
  return (
    <ProductsProvider>
      {children}
    </ProductsProvider>
  )
}