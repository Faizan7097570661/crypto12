import React, { useEffect } from "react";
import "./About.scss";
import img from "../../Assets/intro.jpg";
import img2 from "../../Assets/definition.png";
import img1 from "../../Assets/Intro.png";
import ReactPlayer from "react-player";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import Scroll from "../Scrollup/Scroll";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <div className="image">
        <div className="mangement">
          <h1>
            <Typewriter
              options={{
                strings: ["Management studies"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="img">
          <img
            src={img}
            url={"https://cdn.ttweb.net/News/images/284955.jpg?preset=w800_q70"}
          />
          <h1 data-aos="fade-up" data-aos-duration="3000">
            Risk Management For Crypto
          </h1>
        </div>
        <div className="Intro ">
          <div
            className="secIntro IntroHead"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2>
              Crypto Trading Risk Management: How to Mitigate Risk Exposure
            </h2>
          </div>
          <div className="secInto container para">
            <p>
              Ask any seasoned trader and they’ll confirm that successful
              trading hinges on managing risk as well as picking winning trades.
              Think about it: Crypto trading is extremely volatile and
              potentially lucrative, but it also comes with considerable risks
              that can wipe out your capital in seconds. Having a proper risk
              management system can mitigate these risks.
            </p>
            <p>
              Here’s the good news: This blog post will teach you how to use
              crypto risk management to minimize risk — and increase your
              likelihood of cryptocurrency trading success. Key Takeaways:
            </p>
            <ul className="unord">
              <li data-aos="fade-right" data-aos-duration="3000">
                Crypto risk management aims to safeguard your capital from
                unfavorable market fluctuations and help you secure sustainable
                returns.
              </li>
              <li data-aos="fade-right" data-aos-duration="5000">
                Risk management involves cautious planning to identify, analyze
                and limit the potential losses by formulating contingency plans
                to cushion the unfavorable moments.
              </li>
              <li data-aos="fade-right" data-aos-duration="7000">
                Trading tools and portfolio management tools can help mitigate
                these risks exposure if it's used correctly.
              </li>
            </ul>
          </div>
          <div className="secIntro IntroHead1">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ background: "none" }}
            >
              Definition of Crypto Risk Management
            </h2>
            <img src={img2} />
          </div>
          <div className="secInto container para1">
            <p>
              Crypto risk management is the process of identifying, analyzing
              and controlling the potential losses that may arise from crypto
              trading.
            </p>
            <p>
              It involves a comprehensive approach, encompassing goal setting,
              risk appetite definition, capital allocation, portfolio
              diversification and appropriate trading strategies and tools. This
              strategy helps avoid emotional trading decisions and encourages
              rational, disciplined decision-making.{" "}
            </p>
            <p>
              Crypto risk management aims to safeguard your capital from
              unfavorable market fluctuations and help you secure sustainable
              returns.
            </p>
          </div>

          <div className="secIntro IntroHead2">
            <h2 data-aos="fade-up" data-aos-duration="2000">
              Introduction to CryptoCurrency
            </h2>
          </div>
          <div className="secInto container para2">
            <p>
              A cryptocurrency is a digital currency, which is an alternative
              form of payment created using encryption algorithms. The use of
              encryption technologies means that cryptocurrencies function both
              as a currency and as a virtual accounting system. To use
              cryptocurrencies, you need a cryptocurrency wallet.
            </p>
            <p>
              Cryptocurrency comes under many names. You have probably read
              about some of the most popular types of cryptocurrencies such as
              Bitcoin, Litecoin, and Ethereum. Cryptocurrencies are increasingly
              popular alternatives for online payments. Before converting real
              dollars, euros, pounds, or other traditional currencies into ₿
              (the symbol for Bitcoin, the most popular cryptocurrency), you
              should understand what cryptocurrencies are, what the risks are in
              using cryptocurrencies, and how to protect your investment.
            </p>
          </div>
          <div className="videoImg grid">
            <div
              className="imgofRisk"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img src={img1} alt="" />
            </div>
            <div className="video1">
              <ReactPlayer
                // data-aos="fade-left"
                // data-aos-duration="2000"
                url={"https://www.youtube.com/watch?v=nAqqKHPETdQ"}
                controls
                width={"100%"}
                height={"17rem"}
              />
            </div>
          </div>
        </div>
        <Scroll />
      </div>
    </div>
  );
};

export default About;
