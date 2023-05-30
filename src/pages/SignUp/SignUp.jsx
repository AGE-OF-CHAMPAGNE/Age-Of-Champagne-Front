import React from "react";
import classes from "./SignUp.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MyLogo from "../../components/UI/MyLogo/MyLogo";
import MyForm from "../../components/UI/MyForm/MyForm";

function SignUp() {
  const { title } = classes;
  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Inscription</MyPageTitle>
      </section>
      <section className="d-flex flex-column align-items-center">
        <MyLogo />
      </section>
      <section>
        <MyForm
          inputs={[
            {
              label: "Email",
              type: "email",
              required: true,
              pattern: /^\S+@\S+$/i,
              error:
                "S'il vous plaît, mettez une adresse email valide (ex: example@gmail.com)",
            },
            {
              label: "Pseudonyme",
              type: "text",
              required: true,
              pattern: /[A-Za-z0-9]+/i,
              error:
                "S'il vous plaît, mettez un pseudonyme valide (ex: Hello2023)",
            },
            {
              label: "Mot de passe",
              type: "password",
              required: true,
              pattern: /[A-Za-z0-9]+/i,
              error: "S'il vous plaît, mettez un mot de passe fort",
              minLength: 6,
            },
          ]}
          onSubmit={(data) => console.log(data)}
        />
      </section>
    </div>
  );
}

export default SignUp;
