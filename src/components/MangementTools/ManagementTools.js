import React, { useEffect } from "react";
import "./MangementTools.scss";
import "./ManagementTools.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ManagementTools = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="MangementTools">
      <div className="mangementTooled">
        <div className="Tools">
          <h2
            className="secIntro HeadTool"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Portfolio Management Tools
          </h2>
          <p className="secIntro">
            These are tools that help you manage your crypto portfolio and
            optimize your performance using various features and functions. They
            can help you to:
          </p>
          <ul className="container">
            <li>
              track and monitor your crypto holdings and transactions across
              different platforms and devices.
            </li>
            <li>
              analyze and evaluate your portfolio performance, risk and return
              using various metrics and statistics.
            </li>
            <li>
              optimize and rebalance your portfolio allocation according to your
              goals, risk profile and market conditions.
            </li>
          </ul>
        </div>
        <div className="ExampleTool container">
          <p>Some examples of portfolio management tools are as follows.</p>
          <ul className="accordian">
            <li>
              <input type="radio" name="accordian" id="first" checked />
              <label htmlFor="first">Portfolio trackers:</label>
              <div className="content">
                <p>
                  Manage your cryptocurrency holdings and transactions across
                  various platforms with portfolio trackers like CoinStats,
                  Blockfolio and Delta. Keep an eye on your balance, value and
                  history in real time or using historical data.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordian" id="second" />
              <label htmlFor="second">Portfolio analyzers:</label>
              <div className="content">
                <p>
                  {" "}
                  Portfolio analyzers help you evaluate your portfolio's
                  performance, risk and return using various metrics and
                  statistics. They can measure your portfolio's volatility,
                  Sharpe ratio, Sortino ratio, drawdowns and more. Examples of
                  portfolio analyzers include CryptoCompare, Shrimpy and
                  CoinTracking.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordian" id="third" />
              <label htmlFor="third">Portfolio optimizers:</label>
              <div className="content">
                <p>
                  Optimize your portfolio allocation with tools that factor in
                  market conditions along with your goals and risk profile.
                  Portfolio optimizers like Cryptoindex, HodlBot and TokenSets
                  help you maximize your expected return and minimize risk by
                  finding the optimal portfolio weights.
                </p>
              </div>
            </li>
          </ul>

          {/* <ul>
            <li>
              <h5>Portfolio trackers:</h5>
              <p>
                Manage your cryptocurrency holdings and transactions across
                various platforms with portfolio trackers like CoinStats,
                Blockfolio and Delta. Keep an eye on your balance, value and
                history in real time or using historical data.
              </p>
            </li>
            <li>
              <h5>Portfolio analyzers:</h5>
              <p>
                {" "}
                Portfolio analyzers help you evaluate your portfolio's
                performance, risk and return using various metrics and
                statistics. They can measure your portfolio's volatility, Sharpe
                ratio, Sortino ratio, drawdowns and more. Examples of portfolio
                analyzers include CryptoCompare, Shrimpy and CoinTracking.
              </p>
            </li>
            <li>
              <h5>Portfolio optimizers:</h5>
              <p>
                Optimize your portfolio allocation with tools that factor in
                market conditions along with your goals and risk profile.
                Portfolio optimizers like Cryptoindex, HodlBot and TokenSets
                help you maximize your expected return and minimize risk by
                finding the optimal portfolio weights.
              </p>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default ManagementTools;
