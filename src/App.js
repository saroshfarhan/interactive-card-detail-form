import { useState } from "react";
import "./App.scss";

import CardPreview from "./components/cardPreview/cardPreview";
import MainForm from "./components/mainForm/mainForm";
import Completed from "./components/completed/completed";

function App() {
  const [completed, setCompleted] = useState(false);
  const [cardData, setCardData] = useState({
    cardHolderName: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    mm: "00",
    yy: "00",
    cvc: "000",
  });

  const onSubmit = (data) => {
    setCardData({
      cardHolderName: data.cardHolderName,
      cardNumber: data.cardNumber,
      mm: data.expMonth,
      yy: data.expYear,
      cvc: data.cvc,
    });
    setCompleted((prevState) => !prevState);
  };

  const dataChange = (changeData, field) => {
    switch (field) {
      case "cardHolderName":
        setCardData({
          ...cardData,
          cardHolderName: changeData,
        });
        break;
      case "cardNumber":
        setCardData({
          ...cardData,
          cardNumber: changeData,
        });
        break;
      case "expMonth":
        setCardData({
          ...cardData,
          mm: changeData,
        });
        break;
      case "expYear":
        setCardData({
          ...cardData,
          yy: changeData,
        });
        break;
      case "cvc":
        setCardData({
          ...cardData,
          cvc: changeData,
        });
        break;
      default:
        setCardData({
          cardHolderName: "Jane Farhan",
          cardNumber: "0000 0000 0000 0000",
          mm: "00",
          yy: "00",
          cvc: "000",
        });
    }
  };

  return (
    <main className="main">
      <CardPreview
        cardNumber={cardData.cardNumber}
        name={cardData.cardHolderName}
        year={cardData.yy}
        month={cardData.mm}
        cvc={cardData.cvc}
      />
      {!completed ? (
        <MainForm handleClick={onSubmit} dataChange={dataChange} />
      ) : (
        <Completed />
      )}
    </main>
  );
}

export default App;
