import React from "react";
import "./TextField.css";

const TextField = (props) => {
  return (
    <div className="containerTextField">
      <div>
        <label>{props.label}</label>
      </div>
      <div>
        <input
          value={props.value}
          onChange={props.handleChange}
          type="text"
          required
        />
      </div>
    </div>
  );
};

export default TextField;
