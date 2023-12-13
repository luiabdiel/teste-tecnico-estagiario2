"use client"

import styled from "styled-components";

const ButtonRed = styled.button`
  background-color: red;
  
  border: none;
  border-radius: 4px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  
  &:hover {
    background-color: #b90000;
  }
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 60px;
`

export default function BtnRed() {
  function handleClick() {
    alert("O botão foi clicado!")
  }

  return (
    <BtnContainer>
      <ButtonRed onClick={handleClick}>Clique-me!</ButtonRed>
    </BtnContainer>
  )
}