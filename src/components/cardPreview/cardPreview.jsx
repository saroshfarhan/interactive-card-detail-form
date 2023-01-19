import React from "react";
import styl from "./cardPreview.module.scss";

function CardPreview() {
  return (
    <div className="card-preview-container">
      <div className={styl.cardFront}>
        <img src="" alt="card logo" />
      </div>
      <div className={styl.cardBack}></div>
    </div>
  );
}

export default CardPreview;
