import React from "react";
import { useForm } from "react-hook-form";
import styl from "./mainForm.module.scss";

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

function MainForm({ handleClick, dataChange }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleClick)} className={styl.formContainer}>
      <label htmlFor="cardHolderName">Cardholder Name</label>
      <input
        placeholder="e.g. Jane Appleseed"
        {...register("cardHolderName", { required: true })}
        className={`${errors.cardHolderName ? styl.error : ""}`}
        onChange={(e) => {
          dataChange(e.target.value, "cardHolderName");
        }}
      />
      {errors.cardHolderName && <p>Can't be blank</p>}

      <label htmlFor="cardNumber">Card Number</label>

      <input
        className={`${errors.cardNumber ? styl.error : ""}`}
        type="tel"
        inputMode="numeric"
        ref={register}
        placeholder="e.g. 0000 0000 0000 0000"
        {...register("cardNumber", {
          required: true,
          validate: {
            length: (value) => value.length === 19,
          },
          pattern: /^[\d\s]+$/,
          //pattern: /^[0-9]+$/,
        })}
        onChange={(e) => {
          const { value } = e.target;
          e.target.value = normalizeCardNumber(value);
          dataChange(e.target.value, "cardNumber");
        }}
      />
      {errors.cardNumber && errors.cardNumber.type === "required" && (
        <p>Can't be blank</p>
      )}
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
              type="tel"
              {...register("expMonth", {
                required: true,
                validate: {
                  length: (value) => value.length === 2,
                  limit: (value) => value <= 12,
                },
                pattern: /^[0-9]+$/,
              })}
              className={`${errors.expMonth ? styl.error : ""}`}
              onChange={(e) => {
                dataChange(e.target.value, "expMonth");
              }}
            />
            <input
              placeholder="YY"
              type="tel"
              {...register("expYear", {
                required: true,
                validate: {
                  length: (value) => value.length === 2,
                },
                pattern: /^[0-9]+$/,
              })}
              className={`${errors.expYear ? styl.error : ""}`}
              onChange={(e) => {
                dataChange(e.target.value, "expYear");
              }}
            />
          </div>
          {(errors.expMonth && errors.expMonth.type === "required" && (
            <p>Can't be blank</p>
          )) ||
            (errors.expYear && errors.expYear.type === "required" && (
              <p>Can't be blank</p>
            ))}
          {errors.expMonth && errors.expMonth.type === "limit" && (
            <p>Value must be less that 12</p>
          )}
        </div>

        <div>
          <label htmlFor="cvc">cvc</label>
          <input
            className={`${errors.cvc ? styl.error : ""}`}
            placeholder="e.g. 123"
            type="tel"
            {...register("cvc", {
              required: true,
              validate: {
                length: (value) => value.length === 3,
              },
              pattern: /^[0-9]+$/,
            })}
            onChange={(e) => {
              dataChange(e.target.value, "cvc");
            }}
          />
          {errors.cvc && errors.cvc.type === "required" && (
            <p>Can't be blank</p>
          )}
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
