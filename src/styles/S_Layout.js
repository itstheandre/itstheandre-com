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
  /* background-color: black; */
  background-color: ${({ color }) => color};
`

const Navbar = styled.nav`
  position: fixed;
  top: 5.5rem;
  /* left: 11rem; */
  margin-left: ${({ verticalNav }) => (verticalNav ? "11rem" : "")};
  font-size: 3rem;
  color: white;
  z-index: 20000;
  display: flex;
  height: ${({ verticalNav }) => (verticalNav ? "100vh" : "")};
  width: ${({ verticalNav }) => (verticalNav ? "" : "100vw")};
  transition: transform 600ms;
  transform: ${({ navOpen }) => (navOpen ? "translateX(25vw)" : "")};
  background: blue;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ verticalNav }) => (verticalNav ? "column" : "row")};

  .bars {
    background: blue;
    position: relative;
    img {
      margin-left: ${({ verticalNav }) => (verticalNav ? "" : "11rem")};
      cursor: pointer;
      margin-bottom: 0;
    }
  }

  .h3 {
    position: ${({ verticalNav }) => (verticalNav ? "block" : "absolute")};
    width: 100%;
    text-align: center;
    align-self: center;
    writing-mode: ${({ verticalNav }) => (verticalNav ? "vertical-rl" : "")};
    text-orientation: ${({ verticalNav }) =>
      verticalNav ? "sideways-right" : ""};
    transform: ${({ verticalNav }) => (verticalNav ? "rotate(180deg)" : "")};
    font-size: 70%;
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
