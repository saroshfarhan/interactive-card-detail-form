import React from "react";
import styl from "./completed.module.scss";
import completed from "../../assets/icon-complete.svg";

function Completed({ onContinue }) {
  return (
    <div className={styl.completedContainer}>
      <div className={styl.imgContainer}>
        <img src={completed} alt="completed icon" />
      </div>
      <div>
        <h1>Thank you!</h1>
        <p>We've added your card details</p>
      </div>
      <button type="submit" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}

export default Completed;
