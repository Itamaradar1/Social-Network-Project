import React from "react";
import "./Mask.scss";
import Button_short from "../buttons/Button_short.js";
import Button_long from "../buttons/Button_long";
import userPhoto from "../../assets/images/users/jennifer.png";
function Mask() {
  return (
    <div className="Mask_warper">
      <div className="Mask_container">
        <div className="left_Mask_main">
          <div className="Mask_profile_pic">
            <img src={userPhoto}></img>
          </div>
          <div className="Mask_name">
            <h3>Jennifer Smith</h3>
            <p>Zürich, Switzerland</p>
          </div>
          <div className="button_div">
            <Button_long button_name="EDIT PROFILE" />
          </div>
        </div>

        <div className="right_Mask_main">
          <div className="right_Mask_up">
            <div className="right_Mask_p">
              <p className="Mask_about_p">About</p>
              <p>
                Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has
                tantas laudem iracundia et, ad per utamur ceteros apeirian
              </p>
            </div>
            <div className="right_Mask_things">
              <p>Things I Like</p>
              <div className="buttons_thins_container">
                <Button_short button_name="Cooking" />
                <Button_short button_name="Travel" />
                <Button_short button_name="Reading" />
              </div>
              <div className="buttons_things_down">
                <Button_short button_name="swimming" />
                <Button_short button_name="Running" />
              </div>
            </div>
          </div>

          <div className="right_Mask_email">
            <div className="Mask_email">
              <p>Email</p>
              <p className="Mask_number">jennifersmith@gmail.com</p>
            </div>
            <div className="Mask_phone">
              <p>Phone</p>
              <p className="Mask_number">123-456-7890</p>
            </div>
          </div>

          <div className="right_Mask_down">
            <ul>
              <li className="li_text_container">
                <p className="p_upper_text">34</p>
                <p className="p_lower_text">Posts</p>
              </li>
              <li className="li_text_container">
                <p className="p_upper_text">256</p>
                <p className="p_lower_text">Likes</p>
              </li>
              <li className="li_text_container">
                <p className="p_upper_text">98</p>
                <p className="p_lower_text">Friends</p>
              </li>
              <li className="li_text_container">
                <p className="p_upper_text">129</p>
                <p className="p_lower_text">Followers</p>
              </li>
              <li className="li_text_container">
                <p className="p_upper_text">154</p>
                <p className="p_lower_text">follwing</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mask;
