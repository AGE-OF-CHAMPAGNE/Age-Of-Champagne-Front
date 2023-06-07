import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./Settings.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MySwitcher from "../../components/UI/MySwitcher/MySwitcher";
import ThemeContext from "../../contexts/theme";
import MyForm from "../../components/UI/MyForm/MyForm";
import { emailExists, logoutUrl } from "../../services/api/user";
import UserContext from "../../contexts/user";
import MyButtonLink from "../../components/UI/MyButtonLink/MyButtonLink";

function Settings({ changeTheme }) {
  const { title, wrapper, disconnectBtn, container, form } = classes;
  const theme = useContext(ThemeContext);
  const [error, setError] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const user = useContext(UserContext);

  const handleEmailSubmit = (data) => {
    console.log(data);
  };

  const handlePseudonymeSubmit = (data) => {
    console.log(data);
  };

  const handlePasswordSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (user) {
      const { email: userEmail, firstname: userFirstname } = user;
      setEmail(userEmail);
      setName(userFirstname);
    }
  }, [user]);

  return (
    <div className={`${container} pt-3 container`}>
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Configuration</MyPageTitle>
      </section>
      <section className="d-flex flex-column align-items-center">
        <div>
          <MySwitcher active={theme === "white"} handleOnChange={changeTheme}>
            Theme claire
          </MySwitcher>
          <MySwitcher active={theme === "white"}>
            Je veux voir &quot;Le Saviez Vous&quot;
          </MySwitcher>
          <MySwitcher active={theme === "white"}>
            Recevoir des alertes par email
          </MySwitcher>
        </div>
      </section>
      <section className={wrapper}>
        <MyPageTitle>Changer mes données</MyPageTitle>
        <MyForm
          btnName="modifier"
          className={form}
          inputs={[
            {
              label: "Email",
              type: "email",
              required: true,
              pattern: /^\S+@\S+$/i,
              error: error.email,
              name: "email",
              onChange: (e) => {
                setEmail(e.target.value);
              },
              value: email,
            },
          ]}
          onSubmit={(data) => handleEmailSubmit(data)}
        />
        <MyForm
          btnName="modifier"
          className={form}
          inputs={[
            {
              label: "Pseudonyme",
              type: "text",
              required: true,
              pattern: /[A-Za-z0-9]+/i,
              error: error.name,
              name: "firstname",
              onChange: (e) => {
                setName(e.target.value);
              },
              value: name,
            },
          ]}
          onSubmit={(data) => handlePseudonymeSubmit(data)}
        />
        <MyForm
          btnName="modifier"
          className={form}
          inputs={[
            {
              label: "Mot de passe",
              type: "password",
              required: true,
              pattern: /[A-Za-z0-9]+/i,
              error: error.password,
              minLength: 6,
              name: "password",
              onChange: (e) => {
                setPassword(e.target.value);
              },
              value: password,
            },
          ]}
          onSubmit={(data) => handlePasswordSubmit(data)}
        />
        <MyButtonLink className={disconnectBtn} to={logoutUrl()}>
          Se Deconnecter
        </MyButtonLink>
      </section>
    </div>
  );
}

Settings.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default Settings;
