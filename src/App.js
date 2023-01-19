import "./App.scss";

import CardPreview from "./components/cardPreview/cardPreview";
import MainForm from "./components/mainForm/mainForm";
//import Completed from "./components/completed/completed";

function App() {
  return (
    <main className="main">
      <CardPreview />
      <MainForm />
    </main>
  );
}

export default App;
