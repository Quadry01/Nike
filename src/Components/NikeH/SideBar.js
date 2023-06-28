import React, { useState } from "react";
import "./Sidebar.css";
import hamburger from "../../images/logo/hamburger.svg";
import nike from "../../images/logo/nike-logo.svg";
import cart from "../../images/logo/cart.svg";
import search from "../../images/logo/search.svg";
import smalljor from "../../images/logo/jordan.svg";
import shop from "../../images/logo/shop.svg";
import question from "../../images/logo/question.svg";
import order from "../../images/logo/cartwheel.svg";
import close from "../../images/logo/close.svg";
import ardown from "../../images/logo/arrowdown.jpg";

const SideBar = () => {
  // to change burger class
  const [menu_class, SetMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [barIcon, setBarIcon] = useState(hamburger);
  const [blur, setBlur] = useState("");
  // toggle burger menu
  const updateMenu = () => {
    if (!isMenuClicked) {
      SetMenuClass("menu visible");
      setBarIcon(close);
    } else {
      SetMenuClass("menu hidden");
      setBarIcon(hamburger);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div id="sideBar">
      <nav>
        <img className="nikeSmall-logo" src={nike} alt="nike-logo"></img>
        <img className="cartSmall-logo" src={cart} alt="nike-logo"></img>
        <img className="searchSmall-logo" src={search} alt="nike-logo"></img>

        <img
          onClick={updateMenu}
          className={`burger-menu `}
          src={barIcon}
          alt="burger-logo"
        ></img>
      </nav>
      <div className={menu_class}>
        <img
          onClick={updateMenu}
          className={`burger-menu2 `}
          src={barIcon}
          alt="burger-logo"
        ></img>

        <div className="sidebar-header">
          <h2>New & Featured</h2>
          <img className="ic-sidebar" src={ardown} alt="ic"></img>
          <h2>Men</h2>
          <img className="ic-sidebar" src={ardown} alt="ic"></img>

          <h2>Women</h2>
          <img className="ic-sidebar" src={ardown} alt="ic"></img>

          <h2>Kids</h2>
          <img className="ic-sidebar" src={ardown} alt="ic"></img>

          <h2>Sale</h2>
          <img className="ic-sidebar" src={ardown} alt="ic"></img>
        </div>
        <div className="jord-div">
          <img className="small-jord" src={smalljor} alt="jordan"></img>
          <span className="jordan">Jordan</span>
        </div>
        <div className="btnp-div">
          <p>
            Become a Nike Member for the best products, inspirations and stories
            in sport. <span>Learn more</span> <br />
            <button className="join-us">Join Us</button>
            <button className="sign-in">Sign In</button>
          </p>
        </div>
        <div className="side-icon-div">
          <img className="side-icon" src={cart} alt="icon"></img>
          <span className="si-span">Bag</span>
          <img className="side-icon" src={order} alt="icon"></img>{" "}
          <span className="si-span">Orders</span>
          <img className="side-icon" src={shop} alt="icon"></img>{" "}
          <span className="si-span">Find a Store</span>
          <img className="side-icon" src={question} alt="icon"></img>{" "}
          <span className="si-span">Help</span>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
