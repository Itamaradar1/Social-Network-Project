import React from "react";
import "./Button_white_extendable.scss";

const Button_white_extendable = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className="button-white-extendable"
    >
      {props.button_name}
    </button>
  );
}

export default Button_white_extendable;
