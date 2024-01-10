import cartFrontImage from "../images/bg-card-front.png";
import cartLogo from "../images/card-logo.svg";
import "./cart-front.css";

const CartFront = ({ number, name, dateMM, dateYY }) => {
  return (
    <div className="cart-front-container">
      <img className="cart-logo" src={cartLogo} alt="logo" />
      <div className="cart-info-container">
        <span className="cart-number">
          {number ? number : "0000 0000 0000 0000"}
        </span>
        <div className="card-info-footer">
          <span className="name">{name ? name : "Jane Appleseed"}</span>
          <span className="cart-date">
            {dateMM}/{dateYY}
          </span>
        </div>
      </div>
      <img className="cart-img" src={cartFrontImage} alt="cart" />
    </div>
  );
};

export default CartFront;
