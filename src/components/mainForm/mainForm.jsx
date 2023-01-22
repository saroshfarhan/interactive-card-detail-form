import React from "react";
import { useForm } from "react-hook-form";
import styl from "./mainForm.module.scss";

function MainForm({ handleClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const intialValues = {
  //   cardHolderName: "Jane Appleseed",
  //   cardNumber: "0000 0000 0000 0000",
  //   mm: "00",
  //   yy: "00",
  //   cvc: "000",
  // };

  return (
    <form onSubmit={handleSubmit(handleClick)} className={styl.formContainer}>
      <label htmlFor="cardHolderName">Cardholder Name</label>
      <input
        placeholder="e.g. Jane Appleseed"
        {...register("cardHolderName", { required: true })}
        className={`${errors.cardHolderName ? styl.error : ""}`}
      />
      {errors.cardHolderName && <p>Can't be blank</p>}

      <label htmlFor="cardNumber">Card Number</label>
      <input
        className={`${errors.cardNumber ? styl.error : ""}`}
        placeholder="e.g. 0000 0000 0000 0000"
        {...register("cardNumber", {
          required: true,
          validate: {
            length: (value) => value.length === 16,
          },
          pattern: /^[0-9]+$/,
        })}
      />
      {errors.cardNumber && <p>Can't be blank</p>}
      {errors.cardNumber && errors.cardNumber.type === "length" && (
        <p>Card number must be 16 digit</p>
      )}
      {errors.cardNumber && errors.cardNumber.type === "pattern" && (
        <p>Wrong format, numbers only</p>
      )}

      <div className={styl.cvcDateInfo}>
        <div>
          <label htmlFor="expMonth">Exp. Date (MM/YY)</label>
          <div className={styl.expDate}>
            <input
              placeholder="MM"
              {...register("expMonth", {
                required: true,
                validate: {
                  length: (value) => value.length === 2,
                },
                pattern: /^[0-9]+$/,
              })}
              className={`${errors.expMonth ? styl.error : ""}`}
            />
            <input
              placeholder="YY"
              {...register("expYear", {
                required: true,
                validate: {
                  length: (value) => value.length === 2,
                },
                pattern: /^[0-9]+$/,
              })}
              className={`${errors.expYear ? styl.error : ""}`}
            />
          </div>
          {(errors.expMonth && <p>Can't be blank</p>) ||
            (errors.expYear && <p>Can't be blank</p>)}
        </div>

        <div>
          <label htmlFor="cvc">cvc</label>
          <input
            className={`${errors.cardHolderName ? styl.error : ""}`}
            placeholder="e.g. 123"
            {...register("cvc", {
              required: true,
              validate: {
                length: (value) => value.length === 3,
              },
              pattern: /^[0-9]+$/,
            })}
          />
          {errors.cvc && <p>Can't be blank</p>}
          {errors.cvc && errors.cvc.type === "length" && (
            <p>CVC must be 3 digits</p>
          )}
          {errors.cvc && errors.cvc.type === "pattern" && (
            <p>CVC must be a number</p>
          )}
        </div>
      </div>

      <button type="submit">Confirm </button>
    </form>
  );
}

export default MainForm;
