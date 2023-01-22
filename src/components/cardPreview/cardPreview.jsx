import React from "react";
import styl from "./cardPreview.module.scss";
import cardLogo from "../../assets/card-logo.svg";

function CardPreview({ cardNumber, name, month, year, cvc }) {
  return (
    <div className={styl.cardPreviewContainer}>
      <div className={styl.cardFront}>
        <div className={styl.cardDetails}>
          <img src={cardLogo} alt="card logo" />
          <p className={styl.cardNumber}>{cardNumber}</p>
          <div className={styl.cardInfo}>
            <p>{name}</p>
            <p>
              {month}/{year}
            </p>
          </div>
        </div>
      </div>
      <div className={styl.cardBack}>
        <p>{cvc}</p>
      </div>
    </div>
  );
}

export default CardPreview;
