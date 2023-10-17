import React, { useEffect } from "react";
import "./Footer.scss";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import img from "../../Assets/BVRIT.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Footer flex">
      <div className="mangementFooter">
        <img src={img} alt="" />
        <h2>Management studies</h2>
        <div className="contacts flex" style={{ paddingTop: "1rem" }}>
          <div className="Home">
            <p data-aos="fade-right" data-aos-duration="2000">
              Home
            </p>
            <p data-aos="fade-right" data-aos-duration="2500">
              Services
            </p>
            <p data-aos="fade-right" data-aos-duration="3000">
              Details
            </p>
            <p data-aos="fade-right" data-aos-duration="3500">
              Contacts
            </p>
          </div>
          <div className="contact">
            <p data-aos="fade-up" data-aos-duration="2000">
              Downloads
            </p>
            <p data-aos="fade-up" data-aos-duration="2500">
              Disclosure
            </p>
            <p data-aos="fade-up" data-aos-duration="3000">
              NPTEL
            </p>
            <p data-aos="fade-up" data-aos-duration="3500">
              Analysis
            </p>
          </div>
          <div
            className="address"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p>contact Us:</p>
            <a
              href="mailto:22211e0001@bvrit.ac.in"
              style={{
                background: "none",
                paddingTop: "0.7rem",
                paddingBottom: "0.3rem",
              }}
            >
              <p style={{ background: "none" }}>22211e0001@bvrit.ac.in</p>
            </a>
            <a
              href="mailto:22211e0022@bvrit.ac.in"
              style={{ background: "none" }}
            >
              <p style={{ background: "none" }}>22211e0022@bvrit.ac.in</p>
            </a>
          </div>
        </div>
        <div className="icons">
          <AiOutlineInstagram
            style={{ background: "none", fontSize: "3rem", padding: "0.5rem" }}
          />
          <BsFacebook
            style={{ background: "none", fontSize: "3rem", padding: "0.5rem" }}
          />
          <AiFillTwitterCircle
            style={{ background: "none", fontSize: "3rem", padding: "0.5rem" }}
          />
          <BiLogoLinkedinSquare
            style={{ background: "none", fontSize: "3rem", padding: "0.5rem" }}
          />
        </div>

        <div className="div">
          <p>© 2024 Management studies,BVRIT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
