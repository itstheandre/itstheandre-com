import styled from "styled-components"

const LayoutBody = styled.main`
  width: 100%;
  position: relative;
  transition: transform 600ms;
  transform: ${({ navOpen }) => {
    return navOpen ? "translateX(25vw) " : ""
  }};

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    display: ${({ navOpen }) => (navOpen ? "block" : "none")};
  }
`

const Header = styled.header`
  height: 100vh;
  width: 100%;
  background-color: ${({ color }) => color};
`

const Navbar = styled.nav`
  position: fixed;
  top: 4rem;
  margin-left: ${({ inView, navOpen }) => {
    if (inView && !navOpen) return "4rem"
    else if (navOpen) return "0"
    else return "0"
  }};
  font-size: 3rem;
  color: ${({ inView }) => (inView ? "black" : "white")};
  z-index: 20000;
  display: flex;
  height: ${({ inView }) => (inView ? "100vh" : "")};
  width: ${({ inView }) => (inView ? "" : "100vw")};
  transition: ${({ navOpen, inView }) => {
      if (inView && !navOpen) return "margin-left 600ms , "
      if (!inView) return ""
      if (navOpen) return "margin-left 600ms, "
      else return "margin-left 600ms, "
    }}
    transform 600ms;
  transform: ${({ navOpen }) => (navOpen ? "translateX(25vw)" : "")};
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ inView }) => (inView ? "column" : "row")};

  .bars {
    position: relative;
    img {
      margin-left: ${({ inView, navOpen }) => {
        if (!navOpen && !inView) return "4rem"
        else return "0"
      }};
      transition: ${({ navOpen, inView }) => {
        if (inView && !navOpen) return ""
        if (navOpen) return "margin-left 500ms"
        else return "margin-left 0.3s"
      }};
      cursor: pointer;
      margin-bottom: 0;
      z-index: 30000;
    }
  }

  .h3 {
    position: ${({ inView }) => (inView ? "block" : "absolute")};
    font-family: var(--robotoFont);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    width: ${({ inView }) => (inView ? "auto" : "936px")};
    margin: ${({ inView }) => (inView ? "" : "0 auto")};
    left: ${({ inView }) => (inView ? "" : "0")};
    right: ${({ inView }) => (inView ? "" : "0")};
    z-index: 2500;
    text-align: ${({ inView }) => (inView ? "center" : "")};
    align-self: center;
    writing-mode: ${({ inView }) => (inView ? "vertical-rl" : "")};
    text-orientation: ${({ inView }) => (inView ? "sideways-right" : "")};
    transform: ${({ inView }) => (inView ? "rotate(180deg)" : "")};
    font-size: 1.4rem;
  }
`

const SideNav = styled.aside`
  position: fixed;
  left: 0;
  width: 25vw;
  height: 100vh;
  background: #020a17;
  padding: 1rem;
  z-index: 1500;
  overflow: hidden;
  transition: transform 600ms;
  transform: ${({ navOpen }) => (navOpen ? "" : "translateX(-25vw)")};

  .nav-list {
    list-style: none;
  }

  .nav-item {
    position: relative;
    margin: 1rem 0;
    padding: 0.5rem 0;
  }

  .nav-link {
    color: white;
    font-size: 1.4rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    transition: color 100ms;
  }

  .nav-link:hover {
    color: #cdcdcd;
  }
`

const BodyContainer = styled.main`
  width: 93.6rem;
  margin: 0 auto;
`

export { LayoutBody, Header, Navbar, SideNav, BodyContainer }
