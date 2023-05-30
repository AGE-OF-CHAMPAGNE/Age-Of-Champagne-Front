/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import classes from "./MyForm.module.css";

function MyForm({ inputs, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hidden, setHidden] = useState({
    type: "password",
    img: "/src/assets/img/icons/ph_eye-closed.png",
  });

  const { label, inputClass, img, button, form, wrapper, span } = classes;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={form}>
      {inputs.map((input) => (
        <div key={input.label} className={wrapper}>
          <label htmlFor={input.label} className={label}>
            {input.label}
            <input
              className={inputClass}
              type={input.type === "password" ? hidden.type : input.type}
              {...register(input.label, {
                required: input.required,
                pattern: input.pattern,
              })}
            />
            {input.type === "password" ? (
              <button
                type="button"
                onClick={() =>
                  setHidden(
                    hidden.type === "password"
                      ? {
                          type: "text",
                          img: "/src/assets/img/icons/ic_sharp-remove-red-eye.png",
                        }
                      : {
                          type: "password",
                          img: "/src/assets/img/icons/ph_eye-closed.png",
                        }
                  )
                }
              >
                <img className={img} src={hidden.img} alt="œil" />
              </button>
            ) : (
              ""
            )}
          </label>
          {errors[input.label] && <span className={span}>{input.error}</span>}
        </div>
      ))}

      <button className={button} type="submit">
        Enregistrer
      </button>
    </form>
  );
}

MyForm.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.oneOf([
        "text",
        "password",
        "email",
        "number",
        "tel",
        "date",
        "time",
        "checkbox",
        "radio",
        "file",
        "textarea",
        "select",
      ]),
      required: PropTypes.bool,
      pattern: PropTypes.instanceOf(RegExp),
      error: PropTypes.string,
      value: PropTypes.string,
      minLength: PropTypes.number,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm;