import cartFrontImage from "../images/bg-card-front.png";
import cartLogo from "../images/card-logo.svg";
import "./cart-front.css";

const CartFront = () => {
  return (
    <div className="cart-front-container">
      <img className="cart-logo" src={cartLogo} alt="logo" />
      <div className="cart-info-container">
        <span className="cart-number">0000 0000 0000 0000</span>
        <span className="name">Jane Appleseed</span>
        <span className="cart-date">00/00</span>
      </div>
      <img className="cart-img" src={cartFrontImage} alt="cart" />
    </div>
  );
};

export default CartFront;
