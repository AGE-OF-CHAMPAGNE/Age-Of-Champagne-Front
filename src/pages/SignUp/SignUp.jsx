/* eslint-disable no-alert */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MyLogo from "../../components/UI/MyLogo/MyLogo";
import MyForm from "../../components/UI/MyForm/MyForm";
import { loginUrl, emailExists, registration } from "../../services/api/user";

function SignUp() {
  const { title, link, p, signup } = classes;
  const [error] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = async (data) => {
    if (!(await emailExists(data.email))) {
      const response = await registration({
        email: data.email,
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname,
        Vintages: [],
        wantSeeDYK: true,
        DYKs: [],
      });
      if (response.statusText === "Created") {
        setPassword("");
        setEmail("");
        setFirstname("");
        setLastname("");
        alert("Inscription terminée avec succès");
      }
    }
  };

  return (
    <div className={`container pt-3 d-grid ${signup}`}>
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Inscription</MyPageTitle>
      </section>
      <section className="d-flex flex-column align-items-center">
        <MyLogo />
      </section>
      <section className="d-flex flex-column align-items-center">
        {error && <div className="alert alert-danger">{error}</div>}
        <MyForm
          inputs={[
            {
              label: "Email",
              type: "email",
              required: true,
              pattern: /^\S+@\S+$/i,
              error:
                "S'il vous plaît, mettez une adresse email valide (ex: example@gmail.com)",
              name: "email",
              onChange: (e) => {
                setEmail(e.target.value);
              },
              value: email,
            },
            {
              label: "Prénom",
              type: "text",
              required: true,
              pattern: /[A-Za-z0-9]+/i,
              error:
                "S'il vous plaît, mettez un pseudonyme valide (ex: Hello2023)",
              name: "firstname",
              onChange: (e) => {
                setFirstname(e.target.value);
              },
              value: firstname,
            },
            {
              label: "Nom",
              type: "text",
              required: true,
              pattern: /[A-Za-z0-9]+/i,
              error:
                "S'il vous plaît, mettez un pseudonyme valide (ex: Hello2023)",
              name: "lastname",
              onChange: (e) => {
                setLastname(e.target.value);
              },
              value: lastname,
            },
            {
              label: "Mot de passe",
              type: "password",
              required: true,
              pattern: /[A-Za-z0-9]+/i,
              error: "S'il vous plaît, mettez un mot de passe fort",
              minLength: 6,
              name: "password",
              onChange: (e) => {
                setPassword(e.target.value);
              },
              value: password,
            },
          ]}
          onSubmit={(data) => handleSubmit(data)}
        />
      </section>
      <section className="d-flex flex-column align-items-center">
        <Link className={`${link} ${p}`} to={loginUrl()}>
          Se connecter
        </Link>
      </section>
    </div>
  );
}

export default SignUp;
