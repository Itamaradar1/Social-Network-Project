import React from "react";
import "./Button_violet.scss";

const Button_violet = (props) => {
  return (
    <button
      className="Button_violet"
      onClick={props.handleClick}
    >
      {props.button_name}
    </button>
  );
}

export default Button_violet;
