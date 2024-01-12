import "./gratitude.css";
import checkLogo from "../images/icon-complete.svg";

const Gratitude = ({ setGratitude }) => {
  return (
    <div className="gratitude-container">
      <img src={checkLogo} alt="check" />
      <h1 className="gratitude-tittle">Thank you!</h1>
      <span className="cart-details">We've added your card details</span>
      <button className="continue-button" onClick={() => setGratitude(false)}>
        Continue
      </button>
    </div>
  );
};

export default Gratitude;
