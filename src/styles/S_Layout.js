import styled from "styled-components"

const Spacer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`

const LayoutBody = styled.main`
  width: 100%;
  position: relative;
  /* margin-bottom: 9rem; */
  transition: transform 600ms;
  transform: ${({ navOpen }) => {
    return navOpen ? "translateX(var(--out)) " : ""
  }};

 

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100%; */
    height: ${({ safeOption }) => (safeOption ? "100vh" : "100%")};
    /* height: ${({ bigPage }) => (bigPage ? "100%" : "100vh")}; */

    background-color: rgba(0, 0, 0, 0.75);
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
  font-size: 3rem;

  color: white;
  color: ${({ inView, textView, footerView, safeOption }) => {
    if (safeOption) return `black`
    if (footerView) return `white`
    if (!textView) return `black`
    if (!inView) return "white"
    if (!textView) return `black`
    else return "black"
  }};
  z-index: 20000;
  display: flex;
  height: 100vh;

  transition: ${({ inView, navOpen }) => {
      if (inView) return "margin-left 600ms"
      if (navOpen) return "margin-left 600ms"
      if (!inView) return "margin-left 600ms"
      if (inView && !navOpen) return "margin-left 600ms"
      return "margin-left 600ms"
    }},
    transform 600ms, color 0.5s;
  transform: ${({ navOpen }) => (navOpen ? "translateX(var(--out))" : "")};
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .bars {
    position: relative;
    img {
      margin-left: 4rem;

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
    display: block;
    font-family: var(--robotoFont);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    width: auto;
    z-index: 2500;
    align-self: center;
    margin-left: 4rem;
    text-align: center;
    writing-mode: vertical-rl;
    text-orientation: "sideways-right";
    transform: rotate(180deg);
    font-size: 1.4rem;
    @media (max-width: 936px) {
      display: none;
    }
  }
`

const SideNav = styled.aside`
  position: fixed;
  left: 0;
  width: var(--out);
  height: 100vh;
  background-color: rgb(0, 0, 0);
  /* background: #020a17; */
  padding: 1rem;
  z-index: 1500;
  overflow: hidden;
  transition: transform 600ms;
  transform: ${({ navOpen }) => (navOpen ? "" : "translateX(var(--negative))")};
  display: flex;
  flex-direction: column;
  padding: 4.8rem 4rem;
  .nav-list {
    list-style: none;
  }

  .nav-item {
    position: relative;
    margin-bottom: 4.8rem;
    font-size: 2.8rem;
    font-family: var(--tt-mono);
    /* margin: 1rem 0; */
    /* padding: 4rem 0; */
  }

  .nav-link {
    color: white;
    text-decoration: none;
    /* letter-spacing: 2px; */
    transition: all 100ms;
  }

  .nav-link:hover {
    color: #cdcdcd;
    text-decoration: line-through;
  }
`

const BodyContainer = styled.main`
  width: 93.6rem;
  /* width: 90vw; */
  margin: 0 auto;
  @media (max-width: 93.6rem) {
    /* width: 50vw; */
    max-width: 60rem;
  }

  @media (max-width: 600px) {
    width: 35rem;
  }
`

const Footer = styled.footer`
  margin: 0 auto;
  width: 100vw;
  background-color: black;
  transition: transform 600ms;
  transform: ${({ navOpen }) => (navOpen ? "translateX(var(--out))" : "")};

  .footerWrapper {
    margin: 0 auto;
    width: 90vw;
    max-width: 93.6rem;
    /* margin-top: 8rem; */
    height: 12.8rem;
    background-color: black;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    color: white;
    @media (max-width: 936px) {
      max-width: 60rem;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      max-width: 35rem;
    }

    .icons {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(${({ logos }) => logos}, auto);
      grid-gap: 3.2rem;
      justify-content: space-between;
      @media (max-width: 600px) {
        /* grid-gap: 2.4rem; */
        grid-template-columns: repeat(4, auto);
      }

      img {
        height: 2.4rem;
      }
    }
    .copyright {
      @media (max-width: 600px) {
        text-align: center;
        width: 50%;
        margin: 0 auto;
        line-height: 2.5rem;
        font-weight: normal;
      }
    }
  }
`

const Page = styled.main`
  /* padding-top: 5.2rem; */

  width: 100%;

  header {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    pointer-events: none;
    margin-bottom: 16rem;
    /* flex-direction: column; */
    @media (max-width: 936px) {
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }
  }

  .fwWrapper {
    /* background: blue; */
    position: relative;
    display: flex;

    h1 {
      @media (max-width: 936px) {
        line-height: 120%;
      }
    }

    .sectionText {
      position: absolute;
      color: white;
      top: 5.2rem;
      @media (max-width: 936px) {
        position: static;
      }
    }
  }

  .fw {
    width: 100vw;
    pointer-events: none;

    height: 100%;
    background-color: black;
    position: absolute;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    z-index: -100;
  }

  .sectionText {
    margin-bottom: 2.4rem;
  }

  .h1 {
    margin-bottom: 4rem;
  }

  .gridded {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
    margin-bottom: 17.6rem;

    @media (max-width: 936px) {
      grid-template-columns: 1fr;
    }

    .body {
      line-height: 2.4rem;
    }
  }
`

export {
  LayoutBody,
  Header,
  Navbar,
  SideNav,
  BodyContainer,
  Footer,
  Page,
  Spacer,
}
