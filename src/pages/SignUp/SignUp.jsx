import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MyLogo from "../../components/UI/MyLogo/MyLogo";
import MyForm from "../../components/UI/MyForm/MyForm";
import { loginUrl, emailExists } from "../../services/api/user";

function SignUp() {
  const { title, link, p, signup } = classes;
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudonyme, setPseudonyme] = useState("");

  const handleSubmit = async (data) => {
    emailExists(data.email).then((response) => {
      if (response) {
        setError("Cet e-mail existe déjà");
      } else {
        console.log(data);
      }
    });
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
              label: "Pseudonyme",
              type: "text",
              required: true,
              pattern: /[A-Za-z0-9]+/i,
              error:
                "S'il vous plaît, mettez un pseudonyme valide (ex: Hello2023)",
              name: "firstname",
              onChange: (e) => {
                setPseudonyme(e.target.value);
              },
              value: pseudonyme,
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
          // const response = await registration({
          //   email: data.email,
          //   password: data.password,
          //   firstname: data.firstname,
          //   lastname: data.firstname,
          //   Vintages: [],
          //   wantSeeDYK: true,
          //   DYKs: [],
          // });
          // if (response.statusText === "Created") {
          //   setPassword("");
          //   setEmail("");
          //   setPseudonyme("");
          // }

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
