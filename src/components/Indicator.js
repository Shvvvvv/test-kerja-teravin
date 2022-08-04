import React from "react";
import "./Indicator.css";

const Indicator = (props) => {
  return (
    <div className="containerIndicator">
      <div className={`boxIndicator${props.class}`}>
        <div className="circleDataPersonal"></div>
        <div className="rectangle"></div>
        <div className="circlePendidikan"></div>
        <div className="rectangle"></div>
        <div className="circleKerja"></div>
        <div className="rectangle"></div>
        <div className="circleKeahlian"></div>
      </div>
      <div className="boxText">
        <p>Data Personal</p>
        <p>Riwayat Pendidikan</p>
        <p>Pengalaman Kerja</p>
        <p>Keahlian</p>
      </div>
    </div>
  );
};

export default Indicator;
