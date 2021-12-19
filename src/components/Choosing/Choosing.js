import React from "react";
import "./choosing.css";

function Choosing() {
  return (
    <div
      className="choosing"
      style={{
        background: ` rgba(0, 0, 0, 0.7) url("/car.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="driver">
        <button className="choosing-btn">Driver</button>
      </div>
      <div className="passenger">
        <button className="choosing-btn">Passenger</button>
      </div>
    </div>
  );
}

export default Choosing;
