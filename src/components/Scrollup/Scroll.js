import React from "react";
import "./Scroll.scss";
import { BiSolidUpArrowCircle } from "react-icons/bi";

const Scroll = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="scroll">
      <BiSolidUpArrowCircle
        style={{
          width: "2rem",
          height: "2rem",
          color: "gold",
          background: "none",
        }}
        onClick={scrollUp}
      />
    </div>
  );
};

export default Scroll;
