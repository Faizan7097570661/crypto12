import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaBitcoin } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const controlNavbar = () => {
  //   if (window.scrollY >= 0) {
  //     removeNav();
  //   } else {
  //     showNav();
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", removeNav);
    window.addEventListener("mousedown", removeNav);
    // return () => {
    //   window.removeEventListener("scroll", controlNavbar);
    // };
  }, []);

  //code for toggle show NavBar
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //code to remove the Navbar
  const removeNav = () => {
    setActive("navBar");
  };

  const [transparent, setTransparent] = useState("header");

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex head">
              <FaBitcoin className="icon" />
              BVRIT
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="/step" style={{ color: "white" }}>
                Steps
              </Link>
            </li>

            <li className="navItem">
              <a
                href="https://phemex.com/academy/understanding-candlesticks-patterns"
                className="navLink"
                target="_blank"
              >
                Chart
              </a>
            </li>

            <li className="navItem">
              <a
                href="https://phemex.com/academy/how-to-read-crypto-charts"
                className="navLink"
                target="_blank"
              >
                Analysis
              </a>
            </li>

            <li className="navItem">
              <a
                href="https://cry-pto12.netlify.app/"
                target="_blank"
                className="navLink"
              >
                Coins Details
              </a>
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <RiMenu3Line className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
