import React, { useEffect } from "react";
import "./Steps.scss";
import img from "../../Assets/CandleSticks.png";
import img1 from "../../Assets/line.png";
import img2 from "../../Assets/setup.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Scroll from "../Scrollup/Scroll";

const Steps = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Steps">
      <div className="StepsMain">
        <div className="step">
          <div className="HeadStep secIntro">
            <p>
              The following four-step checklist is an example of how traders can
              determine whether the setups they’ve identified offer good profit
              potential for the risk they’re willing to take.
            </p>
          </div>
          <div className="HeadStep1">
            <h2
              className="secIntro"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Step 1: Identify Trade Setup
            </h2>
            <div className="paraStep1 container ">
              <p>
                Traders should understand the conditions needed for a favorable
                outcome before entering a trade based on their trading
                preferences.
              </p>
              <p>
                Some traders may prefer to use candlestick patterns, chart
                patterns, trendlines, or technical indicators. Some traders may
                choose to study a technical analysis of trends in the market to
                determine their trade setup.
              </p>
              <p>
                For instance, a trader who relies on candlestick patterns to
                anticipate price direction and momentum might wait for an
                inverted hammer candlestick to form a downtrend on the daily
                chart to predict a bullish reversal.{" "}
              </p>
              <img
                data-aos="fade-right"
                data-aos-duration="3000"
                src={img}
                alt=""
              />
              <p>
                By analyzing patterns, traders can identify a trade setup that
                aligns with their strategy before opening any long or short
                positions.
              </p>
            </div>
          </div>
          <div className="HeadStep2">
            <h2
              className="secIntro"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Step 2: Assess Trade Triggers
            </h2>
            <div className="paraStep2 container">
              <p>
                After identifying a proper trade setup, traders need a trigger
                indicating the right time to open a long or short position on a
                given cryptocurrency.
              </p>
              <p>
                Some traders may prefer to use candlestick patterns, chart
                patterns, trendlines, or technical indicators. Some traders may
                choose to study a technical analysis of trends in the market to
                determine their trade setup.
              </p>
              <p>
                For instance, a trader who relies on candlestick patterns to
                anticipate price direction and momentum might wait for an
                inverted hammer candlestick to form a downtrend on the daily
                chart to predict a bullish reversal.
              </p>
              <img
                src={img1}
                data-aos="fade-right"
                data-aos-duration="3000"
                alt=""
              />
              <p>
                By analyzing patterns, traders can identify a trade setup that
                aligns with their strategy before opening any long or short
                positions.
              </p>
            </div>
          </div>
          <div className="HeadStep3">
            <h2
              className="secIntro"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Step 3: Determine Position Size
            </h2>
            <div className="paraStep3 container ">
              <p>
                Regardless of your portfolio’s size, you still need to exercise
                proper risk management to avoid considerable losses.
              </p>
              <p>
                Most traders clearly understand their account size, which helps
                them determine how much capital can be allocated to a particular
                trade. Likewise, traders should decide what percentage of
                available capital they’re willing to risk on a single trade.
              </p>
              <p>
                A well-known trading strategy, the 2% rule, suggests that
                traders should not risk over 2% of their accounts when trading.
                Still, it is advisable to adopt a 1% rule instead, as it is
                generally safer due to the high volatility of the cryptocurrency
                market. This rule dictates that traders shouldn’t risk more than
                1% of their available capital when trading. If the thesis is
                wrong and their stop-loss is hit, they’ll only lose 1% of their
                trading account.
              </p>
              <p>
                For instance, a trader with 5,000 USDT as trading capital and
                risks only 1% can’t lose more than 50 USDT on a single trade.
                But let’s say the invalidation point for the identified trade
                setup is 5% from the initial entry. To calculate the position
                size, one must multiply the account size by the account risk and
                divide the result by the invalidation point.{" "}
              </p>
              <div className="formula">
                <p
                  className="formula"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  position size = account size x account risk / invalidation
                  point
                </p>
                <p
                  className="formula"
                  data-aos="fade-up"
                  data-aos-duration="3500"
                >
                  position size = 5,000 x 0.01 / 0.05
                </p>
                <p
                  className="formula"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  1,000 = 5,000 x 0.01 / 0.05
                </p>
              </div>
              <p>
                The position size for this particular trade will be 1,000 USDT.
                But if the invalidation point were 10% from the initial entry,
                the position size would be 500 USDT.{" "}
              </p>
              <p>
                Be aware that losses are expected and are highly likely when it
                comes to trading. Even professional traders aren’t always right
                – but having a proper risk management strategy may increase the
                chances that winning trades are more significant than losing
                trades.{" "}
              </p>
            </div>
          </div>
          <div className="HeadStep4">
            <h2
              className="secIntro"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Step 4: Set Up TP/SL
            </h2>
            <div className="paraStep4 container">
              <p>
                Every trade requires an exit point, so setting up take-profit
                and stop-loss orders is one of the most important ways to
                mitigate risks and keep emotions in check.
              </p>
              <p>
                Take-profit orders are usually placed in conjunction with
                stop-loss orders, so traders don’t have to worry about executing
                a trade or second-guessing their decisions. Binance Futures lets
                users place take-profit and stop-loss orders simultaneously to
                help traders insulate their decision-making from emotional
                influences.
              </p>
              <p>
                For instance, if a cryptocurrency moves toward a trader’s
                target, the take-profit order will be executed to close the
                position for the anticipated gains. On the other hand, if a
                cryptocurrency moves against the thesis, the stop-loss order
                will be executed to close the position for the anticipated
                losses.
              </p>
              <img
                src={img2}
                data-aos="fade-right"
                data-aos-duration="3000"
                alt=""
              />
              <p>
                With a well-defined risk-to-reward ratio, traders are able to
                know what to expect from each trade setup they have identified,
                even before entering any positions.
              </p>
            </div>
            <Scroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
