import React, { useEffect, useState } from "react";
import "./MeasureRisk.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const MeasureRisk = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [select, setSelect] = useState(false);
  return (
    <div className="MeasureRisk">
      <div className="MeasureRisks">
        <div className="Risks">
          <div className="headrisk">
            <h2
              className="secIntro headed"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              How to Measure Risk
            </h2>
            <div className="ParaRisk container">
              <p>
                When it comes to managing risk, measuring it is essential.
                Various metrics can help you quantify the risk involved in your
                trading activities.
              </p>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      style={{
                        background: "gold",
                        fontWeight: 800,
                        margin: "1rem",
                      }}
                    >
                      Volatility:
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    style={{
                      background: "hsl(0,0%,18%)",
                      boxShadow: " 0 2px 8px 2px rgba(178,178,178,0.45)",
                      margin: "1rem",
                      width: "100%",
                    }}
                  >
                    <p>
                      Volatility is a common risk measure that tracks the
                      variation in an asset or portfolio's price movements over
                      time. It provides insight into the amount of uncertainty
                      or risk present in the market. High volatility indicates
                      higher risk and higher potential reward, while low
                      volatility means lower risk and lower potential reward.
                      You can use standard deviation or historical volatility as
                      indicators of volatility.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      style={{
                        background: "gold",
                        fontWeight: 800,
                        margin: "1rem",
                      }}
                    >
                      Value at Risk (VaR):
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    style={{
                      background: "hsl(0,0%,18%)",
                      boxShadow: " 0 2px 8px 2px rgba(178,178,178,0.45)",
                      margin: "1rem",
                      width: "100%",
                    }}
                  >
                    <p>
                      {" "}
                      VaR measures the maximum amount of money you could lose
                      within a given range of probability over a given period.
                      For instance, if your VaR is $1,000 at a 95% confidence
                      level for one day, there’s a 95% probability you won’t
                      lose more than $1,000 in a single day. VaR can be
                      calculated using historical data or Monte Carlo
                      simulations.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      style={{
                        background: "gold",
                        fontWeight: 800,
                        margin: "1rem",
                      }}
                    >
                      Expected Shortfall (ES):
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    style={{
                      background: "hsl(0,0%,18%)",
                      boxShadow: " 0 2px 8px 2px rgba(178,178,178,0.45)",
                      margin: "1rem",
                      width: "100%",
                    }}
                  >
                    <p>
                      {" "}
                      ES measures the average amount of money you could lose
                      beyond VaR within a given probability over a given period.
                      For example, if your ES is $1,500 at a 95% confidence
                      level for one day, and you lose more than $1,000 in one
                      day (of which there’s a 5% chance), you can expect to lose
                      $1,500 on average. You can use historical data or Monte
                      Carlo simulations to calculate ES.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      style={{
                        background: "gold",
                        fontWeight: 800,
                        margin: "1rem",
                      }}
                    >
                      Maximum Drawdown (MDD):
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    style={{
                      background: "hsl(0,0%,18%)",
                      boxShadow: " 0 2px 8px 2px rgba(178,178,178,0.45)",
                      margin: "1rem",
                      width: "100%",
                    }}
                  >
                    <p>
                      MDD measures the largest percentage drop in the value of
                      your portfolio from its peak to its trough over a given
                      period. It provides insight into worst-case scenarios and
                      how much you could lose. For example, if your MDD is 50%,
                      it means that at some point, your portfolio lost half its
                      value from its highest point. MDD is typically calculated
                      using historical data or backtesting.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              {/*
              <ul>
                 <li>
                  <h5>Volatility:</h5>
                  <p>
                    Volatility is a common risk measure that tracks the
                    variation in an asset or portfolio's price movements over
                    time. It provides insight into the amount of uncertainty or
                    risk present in the market. High volatility indicates higher
                    risk and higher potential reward, while low volatility means
                    lower risk and lower potential reward. You can use standard
                    deviation or historical volatility as indicators of
                    volatility.
                  </p>
                </li>
                <li>
                  <h5>Value at Risk (VaR):</h5>
                  <p>
                    {" "}
                    VaR measures the maximum amount of money you could lose
                    within a given range of probability over a given period. For
                    instance, if your VaR is $1,000 at a 95% confidence level
                    for one day, there’s a 95% probability you won’t lose more
                    than $1,000 in a single day. VaR can be calculated using
                    historical data or Monte Carlo simulations.
                  </p>
                </li>
                <li>
                  <h5>Expected Shortfall (ES):</h5>
                  <p>
                    {" "}
                    ES measures the average amount of money you could lose
                    beyond VaR within a given probability over a given period.
                    For example, if your ES is $1,500 at a 95% confidence level
                    for one day, and you lose more than $1,000 in one day (of
                    which there’s a 5% chance), you can expect to lose $1,500 on
                    average. You can use historical data or Monte Carlo
                    simulations to calculate ES.
                  </p>
                </li>
                <li>
                  <h5>Maximum Drawdown (MDD):</h5>
                  <p>
                    MDD measures the largest percentage drop in the value of
                    your portfolio from its peak to its trough over a given
                    period. It provides insight into worst-case scenarios and
                    how much you could lose. For example, if your MDD is 50%, it
                    means that at some point, your portfolio lost half its value
                    from its highest point. MDD is typically calculated using
                    historical data or backtesting.
                  </p>
                </li>
              </ul>
                */}
            </div>
          </div>
          <div className="headrisk1">
            <h2
              className="secIntro headed1"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Understanding the Market Risks
            </h2>
            <p className="paragraphhead secIntro">
              {" "}
              The crypto market holds various risks that can affect your trading
              performance. Some of the main market risks are as follows.
            </p>
            <div className="ParaRisk1 container">
              <h4>Crypto Market Risks</h4>
              <h5>Legal</h5>
              <p>
                Legal risks in crypto arise from unclear or inconsistent
                regulations, enforcement or compliance. For instance, you may
                face legal issues if your jurisdiction bans or restricts crypto
                assets; if your exchange or wallet is hacked, shut down or
                seized by authorities; or if you fail to report or pay taxes on
                your crypto transactions or holdings.{" "}
              </p>
              <h5>Technology and Security Risks</h5>
              <p>
                Technology and security risks are a legitimate concern with
                crypto assets. Technical failures, glitches, bugs, hacks or
                attacks may compromise your crypto assets or platforms'
                functionality, integrity or availability. Congestion, delays,
                forks or upgrades in the network or protocol that supports your
                crypto assets are all possible technology and security issues.{" "}
              </p>
              <p>
                Other risks include downtime, errors, breaches or thefts in the
                exchange or wallet you use to trade or store your crypto assets;
                and damage, loss, theft, infection or corruption in the device
                or software that you use to access your crypto assets.
              </p>
              <h4>Examples of The Trading Risks</h4>
              <h5>Exchange Risk</h5>
              <p>
                Exchange risk means encountering unfavorable price movements
                because of differences in supply and demand across various
                exchanges. This situation can occur when the exchange on which
                you trade your crypto assets has lower or higher prices,
                liquidity or fees than another exchange that’s involved when
                you’re transferring, withdrawing or depositing your assets.{" "}
              </p>
              <h5>Liquidity Risk</h5>
              <p>
                Liquidity risk arises when trading crypto assets becomes
                difficult due to a lack of buyers or sellers in the market,
                resulting in unfavorable prices. Thin, volatile or illiquid
                markets, low volume or depth on exchanges, and off-peak trading
                times are examples of conditions that can lead to liquidity
                risk.{" "}
              </p>
              <h5>Leverage Risk</h5>
              <p>
                Leverage risk, which occurs when using borrowed funds or margin
                trading, can lead to amplified losses. For instance, this risk
                can arise when the value of your crypto assets moves against
                your position and causes a margin call or liquidation, or when
                unexpected increases in interest rates or borrowing fees occur.
                In addition, if the exchange you’ve borrowed funds from changes
                its margin requirements or terms without warning, you may face
                leverage risk.{" "}
              </p>
              <h5>Risk of Ruin</h5>
              <p>
                The term "risk of ruin" describes the possibility of losing all
                your trading capital due to consecutive losses. These losses can
                occur if you overtrade, trade with positions that are too large
                relative to your capital, use high leverage or a low stop-loss
                level, or experience a black swan event or market crash.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasureRisk;
