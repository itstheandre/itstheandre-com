import styled from "styled-components"

const border = "2px solid #000000"

const Button = styled.button`
  cursor: pointer;
  font-size: 1.6rem;
  border: ${({ styleType }) => (styleType === "secondary" ? border : "none")};
  height: 4rem;
  background: ${({ styleType }) =>
    styleType === "secondary" ? "white" : "black"};
  padding: 0 1.8rem;
  color: ${({ styleType }) => (styleType === "secondary" ? "black" : "white")};
`

export { Button }
