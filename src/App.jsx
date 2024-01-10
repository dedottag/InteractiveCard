import background from "./images/bg-main-desktop.png";
import CartFront from "./CartFront/CartFront";
import CartBack from "./CartBack/CartBack";
import CartForm from "./CartForm/Cartform";

function App() {
  return (
    <div className="App">
      <img className="desktop-background-image" src={background} alt="img" />
      <div className="carts-container">
        <CartFront />
        <CartBack />
      </div>
      <CartForm />
    </div>
  );
}

export default App;
