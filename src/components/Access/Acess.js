import React, { useEffect } from "react";
import img from "../../Assets/management.png";
import "./Acess.scss";

import Aos from "aos";
import "aos/dist/aos.css";
import Scroll from "../Scrollup/Scroll";

const Acess = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="access">
      <div className="Acess1">
        <div className="AcessIntro secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000">
            How to Assess and Formulate a Crypto Trading Plan
          </h2>
        </div>
        <div className="AccessPara secInto container">
          <p>
            To achieve success in trading, you need to have a clear
            understanding of your goals and strategies. A crypto trading plan is
            a comprehensive document that outlines your risk profile, trading
            style, tools, indicators, entry and exit rules, and performance
            evaluation methods. It helps you stay focused, avoid impulsive
            actions, adapt to market changes and learn from mistakes. In order
            to create a robust trading plan, you must be well-versed in risk
            management and measurement techniques.
          </p>
        </div>
        <div className="AcessIntro1 secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2500">
            Familiarizing Yourself With the Risk Management Process
          </h2>
        </div>
        <div className="AccessPara1 secInto container">
          <img src={img} alt="" />
          <p className="mangpara">
            To effectively manage risk in trading, here are four key steps to
            follow:
          </p>
          <ol>
            <li data-aos="fade-up" data-aos-duration="3000">
              Identify the sources of risk, which can include internal and/or
              external factors.
            </li>
            <li data-aos="fade-up" data-aos-duration="3500">
              Analyze the probability and impact of each risk using quantitative
              or qualitative methods.
            </li>
            <li data-aos="fade-up" data-aos-duration="4000">
              Control risks that exceed your tolerance level through techniques
              such as diversification or hedging.
            </li>
            <li data-aos="fade-up" data-aos-duration="4500">
              Monitor the effectiveness of your risk control measures, and make
              necessary adjustments using tools such as charts or portfolio
              trackers.
            </li>
          </ol>
          <Scroll />
        </div>
      </div>
    </div>
  );
};

export default Acess;
