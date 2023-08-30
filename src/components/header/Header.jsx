import React, { useState } from "react"
import "./Header.css"
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler"

const Header = () => {
  const [navOpened, setNavOpened] = useState(false)

  const getMenuStyles = (navOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !navOpened && "-100%" }
    }
  }

  return (
    <section className="header-wrapper">
      <div className="flexCenter paddings innerWidth header-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setNavOpened(false)}>
          <div
            className="flexCenter header-menu"
            style={getMenuStyles(navOpened)}
          >
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setNavOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header
