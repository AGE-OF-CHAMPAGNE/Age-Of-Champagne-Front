/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import classes from "./MyForm.module.css";
import ThemeContext from "../../../contexts/theme";

function MyForm({ inputs, onSubmit, btnName, className }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const theme = useContext(ThemeContext);

  const [hidden, setHidden] = useState({
    type: "password",
    img:
      theme === "dark"
        ? "/src/assets/img/icons/eyes/light/ph_eye-closed.png"
        : "/src/assets/img/icons/eyes/dark/ph_eye-closed.png",
  });

  useEffect(() => {
    setHidden({
      type: "password",
      img:
        theme === "dark"
          ? "/src/assets/img/icons/eyes/light/ph_eye-closed.png"
          : "/src/assets/img/icons/eyes/dark/ph_eye-closed.png",
    });
  }, [theme]);

  const {
    label,
    inputClass,
    lightInput,
    lightLabel,
    img,
    button,
    form,
    wrapper,
    span,
  } = classes;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${form} ${className}`}>
      {inputs.map((input) => (
        <div key={input.label} className={wrapper}>
          <label
            htmlFor={input.label}
            className={`${label} ${theme === "dark" ? "" : lightLabel}`}
          >
            {input.label}
            <input
              className={`${inputClass} ${theme === "dark" ? "" : lightInput}`}
              type={input.type === "password" ? hidden.type : input.type}
              {...register(input.name, {
                required: input.required,
                pattern: input.pattern,
              })}
              value={input.value}
              onChange={input.onChange}
            />
            {input.type === "password" ? (
              <button
                type="button"
                onClick={() =>
                  setHidden(
                    hidden.type === "password"
                      ? {
                          type: "text",
                          img:
                            theme === "dark"
                              ? "/src/assets/img/icons/eyes/light/ic_sharp-remove-red-eye.png"
                              : "/src/assets/img/icons/eyes/dark/ic_sharp-remove-red-eye.png",
                        }
                      : {
                          type: "password",
                          img:
                            theme === "dark"
                              ? "/src/assets/img/icons/eyes/light/ph_eye-closed.png"
                              : "/src/assets/img/icons/eyes/dark/ph_eye-closed.png",
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
          <span
            className={`${span} ${
              errors[input.name] ? "opacity-100" : "opacity-0"
            }`}
          >
            {input.error}
          </span>
        </div>
      ))}

      <button className={button} type="submit">
        {btnName}
      </button>
    </form>
  );
}

MyForm.defaultProps = {
  btnName: "Enregistrer",
  className: "",
};

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
      onChange: PropTypes.func,
      minLength: PropTypes.number,
    })
  ).isRequired,
  btnName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default MyForm;
