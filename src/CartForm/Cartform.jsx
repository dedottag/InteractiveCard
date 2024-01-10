import "./cart-form.css";
import { useState } from "react";

function insertSpaces(str) {
  return str.replace(/\d{4}(?=.)/g, "$& ");
}

const CartForm = ({
  number,
  setNumber,
  setName,
  setDateMM,
  setDateYY,
  setCvc,
}) => {
  function handleChange(event) {
    const newValue = insertSpaces(event.target.value.replace(/\s/g, ""));
    setNumber(newValue);
  }

  return (
    <div className="cart-from-container">
      <form className="form">
        <span className="description">Cardholder Name</span>
        <input
          className="cardholder-info"
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="description">Card Number</span>
        <input
          className="cardholder-info"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={number}
          onChange={handleChange}
          maxLength={19}
          minLength={19}
        />
        <div className="card-date-container">
          <span className="date-description">Exp. Date (MM/YY)</span>
          <input
            className="card-date-mm-yy"
            type="text"
            placeholder="MM"
            maxLength={2}
            onChange={(e) => setDateMM(e.target.value)}
          />
          <input
            className="card-date-mm-yy"
            type="text"
            placeholder="YY"
            maxLength={2}
            onChange={(e) => setDateYY(e.target.value)}
          />
        </div>
        <div className="cvc-container">
          <span className="description" style={{ fontSize: "14px" }}>
            CVC
          </span>
          <input
            className="card-cvc"
            type="text"
            placeholder="e.g. 123"
            maxLength={3}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        <button className="confirm-button" type="button">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CartForm;
