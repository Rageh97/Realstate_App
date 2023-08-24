import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [open, setOpen] = useState(false);
  const getMenuStyles = (open) => {
    if(document.documentElement.clientWidth <= 800){
      return {
        right: !open && "-100%"
      }
    }
  }
  return (
    <section className="h-wrapper container">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
       <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div style={getMenuStyles(open)} className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our values</a>
          <a href=""> Contact US</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
