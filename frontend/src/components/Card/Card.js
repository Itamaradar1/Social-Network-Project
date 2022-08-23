import React from "react";
// import { useEffect } from "react";
import Button_long from "../buttons/Button_long";
import "./Card.scss";
import Button_short from "../buttons/Button_short";
import alberPhoto from "../../assets/images/users/alber.png";
import { useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../../store/fetching";

function Card() {
  const dispatch = useDispatch();
  const selecotr = (reduxState) => reduxState;
  const reduxState = useSelector(selecotr);

  // FetchUsers();

  // console.log(reduxState);
  return (
    <div className="Card-element-wrapper">
      <img src={alberPhoto}></img>
      <div className="text_element_hi">
        <h3>Alber Lawrence</h3>
        <p>Zürich, Switzerland</p>
      </div>

      <div className="Card-element-mid">
        <Button_long button_name="FOLLOW" />
        <Button_long button_name="ADD FRIEND" />
      </div>
      <div className="text_element_low">
        <p>
          Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas
          laudem iracundia et, ad per utamur ceteros apeirian
        </p>
      </div>

      <div className="Card-element-low">
        <div className="Card-element-low-hi">
          <Button_short button_name="Cooking" />
          <Button_short button_name="Travel" />
          <Button_short button_name="Reading" />
        </div>
        <div className="Card-element-low-low">
          <Button_short button_name="Swimming" />
          <Button_short button_name="Swimming" />
        </div>
      </div>
    </div>
  );
}

export default Card;
