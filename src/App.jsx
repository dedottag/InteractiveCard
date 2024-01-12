import background from "./images/bg-main-desktop.png";
import backgroundMobile from "./images/bg-main-mobile.png";
import CartFront from "./CartFront/CartFront";
import CartBack from "./CartBack/CartBack";
import CartForm from "./CartForm/Cartform";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [dateMM, setDateMM] = useState("00");
  const [dateYY, setDateYY] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [gratitude, setGratitude] = useState(false);

  return (
    <div className="App">
      <img className="desktop-background-image" src={background} alt="img" />
      <img
        className="mobile-background-image"
        src={backgroundMobile}
        alt="img"
      />
      <div className="carts-container">
        <CartFront
          number={number}
          name={name}
          dateMM={dateMM}
          dateYY={dateYY}
        />
        <CartBack cvc={cvc} />
      </div>
      <CartForm
        setNumber={setNumber}
        number={number}
        setName={setName}
        setDateMM={setDateMM}
        setCvc={setCvc}
        dateMM={dateMM}
        setDateYY={setDateYY}
        gratitude={gratitude}
        setGratitude={setGratitude}
      />
    </div>
  );
}

export default App;
