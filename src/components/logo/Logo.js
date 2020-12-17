import React from "react";
import Tilt from "react-tilt";
import face from "./face.png";
import "./logo.css";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 130, width: 150 }}
      >
        <div className="Tilt-inner">
          <img
            style={{ paddingTop: "11px", height: "94px" }}
            alt="logo"
            src={face}
          />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
