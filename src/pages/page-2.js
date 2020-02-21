import React, { useState, useEffect } from "react"
import { menuBarsWhite, menuBarsBlack } from "../lib/imageUpload"
import GlobalStyle from "../styles/GlobalStyles"
import { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

const GlobalStyle2 = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

body {
  overflow-x: hidden;
}

main {
  width: 100%;
  ${"" /* height: 100vh; */}
  position: relative;
  background-color: #fa6c98;
  transition: transform 600ms;
  transform: ${({ test }) => {
    return test ? "translateX(25vw) " : ""
  }}
}

.menu-toggle {
  position: fixed;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  color: white;
  z-index: 20000;
  display: flex;
height: ${({ scroll }) => (scroll ? "100vh" : "")};
 width: ${({ scroll }) => (scroll ? "" : "100vw")};
  transition: transform 600ms;
  transform: ${({ test }) => (test ? "translateX(25vw)" : "")};
  background: blue;
  display: flex;
  flex-direction: ${({ scroll }) => (scroll ? "column" : "row")}; 
  justify-content: space-between;


    .bars {
      background: blue;
      img {
        cursor: pointer;
        margin-bottom: 0;
      }
    }

    .h3 {

align-self: center;
    writing-mode: ${({ scroll }) => (scroll ? "vertical-rl" : "")};
   text-orientation: ${({ scroll }) => (scroll ? "sideways-right" : "")};
   transform: ${({ scroll }) => (scroll ? "rotate(180deg)" : "")};
    font-size: 70%;
    }

}


.sidebar {
  position: fixed;
  left: 0;
  width: 25vw;
  height: 100vh;
  background: #020a17;
  padding: 1rem;
  z-index: 1500;
  overflow: hidden;
  transition: transform 600ms;
  transform: ${({ test }) => (test ? "" : "translateX(-25vw)")};
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: ${({ test }) => (test ? "block" : "none")};
}




.nav-list {
  list-style: none;
}

.nav-item {
  position: relative;
  margin: 1rem 0;
  padding: 0.5rem 0;
}

.nav-item::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  background: linear-gradient(to right, #fa6c98, purple);
}

.dropdown .nav-item::before {
  display: none;
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

/* Dropdown */

.dropdown-content {
  min-width: 25rem;
  margin-left: 2rem;
  display: none;
}

.show-dropdown {
  display: block;
}

/* END DROPDOWN */

.main-header-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.main-header-content div {
  width: 70vw;
  height: 1rem;
  background-color: white;
  border-radius: 20rem;
  margin: 0.5rem;
}

.main-header-content div:last-child {
  width: 10%;
  height: 3.5rem;
  margin-top: 3rem;
  cursor: pointer;
}

`

const Page3 = () => {
  const [test, setTest] = useState(false)
  const [scrollVal, setScrollVal] = useState(false)
  const imageBars = test ? menuBarsWhite : menuBarsBlack

  useEffect(() => {
    const toBeSelected = s => document.querySelector(s)
    // console.log("test")

    window.addEventListener("scroll", handleScroll)

    toBeSelected(".dropdown-toggle").addEventListener("click", e => {
      e.preventDefault()
      toBeSelected("#my-dropdown").classList.toggle("show-dropdown")
    })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleScroll() {
    // console.log(scrollVal)
    let yVal = window.scrollY
    if (yVal < 500) {
      setScrollVal(false)
    } else {
      setScrollVal(true)
    }
  }

  // console.log(scrollVal, test)
  console.log({ scrollVal })
  return (
    <>
      <GlobalStyle />
      <GlobalStyle2 test={test} scroll={scrollVal} />
      {/* <LayoutTest /> */}
      <div>
        <nav className="sidebar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="nav-link dropdown-toggle">Services</button>
                <ul className="nav-list dropdown-content" id="my-dropdown">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Web Design
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Web Development
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Graphic Design
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Special Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Support
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          {/* <div className="X">X</div> */}
          <div className="bars">
            <img
              src={imageBars}
              alt="menu bars"
              onClick={() => setTest(!test)}
            />
          </div>
          <div className="h3">Hey, it's the André here</div>
          <div className="empty"></div>
        </div>
        <header>
          <div className="overlay"></div>

          <div className="main-header-content">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>
        <div style={{ backgroundColor: "blue", height: "40vh" }}></div>
        <div style={{ backgroundColor: "red", height: "40vh" }}></div>
        <div style={{ backgroundColor: "green", height: "40vh" }}></div>
        <div style={{ backgroundColor: "yellow", height: "40vh" }}></div>
      </div>
    </>
  )
}

export default Page3
