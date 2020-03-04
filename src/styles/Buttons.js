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
  transition: all 0.5s ease;

  :hover {
    border: ${({ styleType }) =>
      !styleType === "secondary" ? border : "none"};
    background: ${({ styleType }) =>
      !styleType === "secondary" ? "white" : "black"};
    color: ${({ styleType }) =>
      !styleType === "secondary" ? "black" : "white"};
  }
`

const Tags = styled.div`
  font-family: var(--tt-reg);
  font-weight: normal;
  background-color: #dedede;
  color: #9a9a9a;
  text-align: center;
  padding: 1rem 1.2rem;
  transition: transform 0.2s;
  /* :hover {
    transform: scale(1.2);
  } */
`

export { Button, Tags }
