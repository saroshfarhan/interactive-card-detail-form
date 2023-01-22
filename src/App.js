import "./App.scss";

import CardPreview from "./components/cardPreview/cardPreview";
import MainForm from "./components/mainForm/mainForm";
//import Completed from "./components/completed/completed";

function App() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <main className="main">
      <CardPreview
        cardNumber={"0000 0000 0000 0000"}
        name={"Jane Appleseed"}
        year={"00"}
        month={"00"}
        cvc={"000"}
      />
      <MainForm handleClick={onSubmit} />
    </main>
  );
}

export default App;
