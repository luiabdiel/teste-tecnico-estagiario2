"use client"

import styled from "styled-components";
import ProductList from './../../components/product-list';

const ProductContainer = styled.div`
  height: 100%;

  >div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 60px;
  }
`

export default function Questao4() {
  return (
    <ProductContainer>
      <h1>Questão 4</h1>
      <p>
        Crie um componente chamado `ProductList` que recebe uma matriz de
        objetos de produto e renderiza uma lista de produtos. Cada produto deve
        exibir seu nome e preço.
      </p>
      <ProductList />
    </ProductContainer>
  );
}
