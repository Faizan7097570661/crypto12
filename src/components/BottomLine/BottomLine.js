import React, { useEffect } from "react";
import "./BottomLine.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const BottomLine = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="BottomLine">
      <div className="Bottom">
        <div className="Line">
          <h2
            className="headBottom secIntro"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            The Bottom Line
          </h2>
          <p className="container">
            Crypto trading is a rewarding but risky activity that requires
            proper risk management. By following the tips and techniques
            discussed above, you can reduce your risk and increase your chances
            of success in the crypto market.
          </p>
          <p className="container">
            Remember that risk management isn’t a one-time event, but rather an
            ongoing process that requires constant monitoring and adjustment.
            Therefore, keep learning and improving, and adapting to the changing
            market conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomLine;
