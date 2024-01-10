import cartBackImage from "../images/bg-card-back.png";
import "./cart-back.css";

const CartBack = () => {
  return (
    <div className="cart-back-container">
      <span className="cart-cvc">000</span>
      <img className="cart-img" src={cartBackImage} alt="cartBack" />
    </div>
  );
};

export default CartBack;
