import React from "react";
import styl from "./cardPreview.module.scss";
import cardLogo from "../../assets/card-logo.svg";

function CardPreview() {
  return (
    <div className={styl.cardPreviewContainer}>
      <div className={styl.cardFront}>
        <div className={styl.cardDetails}>
          <img src={cardLogo} alt="card logo" />
          <p className={styl.name}>0000 0000 0000 0000</p>
          <div className={styl.cardInfo}>
            <p>Jane Appleseed</p>
            <p>00/00</p>
          </div>
        </div>
      </div>
      <div className={styl.cardBack}>
        <p>000</p>
      </div>
    </div>
  );
}

export default CardPreview;
