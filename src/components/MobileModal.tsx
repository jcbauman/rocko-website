import React from "react";
import "../css/mobileModal.css";
import { super8Logo } from "../images";

export const MobileModal = () => {
  return (
    <div className="mobileModal">
      <img className="circularPhoto" src={super8Logo} alt={"home"} />
      <h1>Hello</h1>
      <h3>
        For the best experience on this site, please check it out on your
        computer
      </h3>
    </div>
  );
};
