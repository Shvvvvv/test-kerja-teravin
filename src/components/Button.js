import "./Button.css";
import React from "react";

const Button = (props) => {
  return (
    <button className={props.class} onClick={props.klik}>
      {props.icon}
      {props.teks}
    </button>
  );
};

export default Button;
