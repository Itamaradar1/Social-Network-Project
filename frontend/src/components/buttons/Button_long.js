import React from "react";
import "./Button_long.scss";

const Button_long = (props) => {
  return <button
    className="Button_long"
    onClick={props.handleClick}
  >
    {props.button_name}
  </button>;
}

export default Button_long;
