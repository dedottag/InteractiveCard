import "./cart-form.css";
import Gratitude from "../Gratitude/Gratitude";

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
  gratitude,
  setGratitude,
}) => {
  function handleChange(event) {
    const newValue = insertSpaces(event.target.value.replace(/\s/g, ""));
    setNumber(newValue);
  }

  function handleNumber(event) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
  return (
    <div className="cart-from-container">
      {!gratitude ? (
        <form className="form">
          <span className="description">Cardholder Name</span>
          <input
            className="cardholder-info"
            type="text"
            placeholder="e.g. Ibrahim Yusupov"
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(event) => {
              if (!/[A-Z, a-z]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            maxLength={25}
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
            onKeyDown={(event) => {
              handleNumber(event);
            }}
          />
          <div className="card-date-container">
            <span className="date-description">Exp. Date (MM/YY)</span>
            <input
              className="card-date-mm-yy"
              type="text"
              placeholder="MM"
              maxLength={2}
              onChange={(e) => setDateMM(e.target.value)}
              onKeyPress={(event) => {
                handleNumber(event);
              }}
            />
            <input
              className="card-date-mm-yy"
              type="text"
              placeholder="YY"
              maxLength={2}
              onChange={(e) => setDateYY(e.target.value)}
              onKeyPress={(event) => {
                handleNumber(event);
              }}
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
              onKeyPress={(event) => {
                handleNumber(event);
              }}
            />
          </div>
          <button
            className="confirm-button"
            type="submit"
            onClick={() => setGratitude(true)}
          >
            Confirm
          </button>
        </form>
      ) : (
        <Gratitude setGratitude={setGratitude} />
      )}
    </div>
  );
};

export default CartForm;
