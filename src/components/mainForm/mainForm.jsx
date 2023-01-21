import React from "react";
import { useForm } from "react-hook-form";
import styl from "./mainForm.module.scss";

function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const intialValues = {
    cardHolderName: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    mm: "00",
    yy: "00",
    cvc: "000",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styl.formContainer}>
      <label htmlFor="firstName">First Name</label>
      <input
        defaultValue={intialValues.firstName}
        placeholder="bill"
        {...register("firstName", {
          validate: (value) => value !== "bill",
        })}
      />
      {errors.firstName && <p>Your name is not bill</p>}

      <label htmlFor="lastName">Last Name</label>
      <input
        defaultValue={intialValues.lastName}
        placeholder="luo"
        {...register("lastName", {
          validate: (value) => value.length > 3,
        })}
      />
      {errors.lastName && <p>Your last name is less than 3 characters</p>}

      <label htmlFor="email">Email</label>
      <input
        defaultValue={intialValues.email}
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register("email")}
      />
      <label htmlFor="age">Age</label>
      <input
        defaultValue={intialValues.age}
        placeholder="0"
        type="text"
        {...register("age", {
          validate: {
            positiveNumber: (value) => parseFloat(value) > 0,
            lessThanHundred: (value) => parseFloat(value) < 200,
          },
        })}
      />
      {errors.age && errors.age.type === "positiveNumber" && (
        <p>Your age is invalid</p>
      )}
      {errors.age && errors.age.type === "lessThanHundred" && (
        <p>Your age should be greater than 200</p>
      )}

      <button type="submit">Confirm </button>
    </form>
  );
}

export default MainForm;
