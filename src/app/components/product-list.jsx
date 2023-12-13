"use client"

import styled from "styled-components";
import formatPrice from './../../utils/format';
import useProducts from './../../hooks/use-products';

const ProductListContainer  = styled.ul`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 16px;
  
  margin-top: 8px;

  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ProductItem = styled.li `
  background-color: #4e4d4d;
  
  padding: 16px;
  border-radius: 4px;

  span {
    color: #00d000;
    font-weight: 700;
  }
`

export default function ProductList() {
  const { productList } = useProducts()

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductListContainer >
        {productList && productList.map((product) => (
          <ProductItem key={product.id}>
           <p>{product.nome}</p>
           <span>{formatPrice(product.preco)}</span>
          </ProductItem>
        ))}
      </ProductListContainer>
    </div>
  );
}