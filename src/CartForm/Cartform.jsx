import "./cart-form.css";
import { useForm } from "react-hook-form";

const CartForm = () => {
  const form = useForm();
  const { handleSubmit, register, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="cart-from-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("cartNumber", {
            pattern: {
              value: /[0-9\s]{13,19}/,
              message: "Valid email required",
            },
          })}
          maxLength={16}
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          placeholder="xxxx xxxx xxxx xxxx"
        />
        <span className="message">{errors.cartNumber?.message}</span>
      </form>
    </div>
  );
};

export default CartForm;
