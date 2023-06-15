/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
import React, { useState, useContext, useEffect } from "react";
import classes from "./Settings.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MySwitcher from "../../components/UI/MySwitcher/MySwitcher";
import ThemeContext from "../../contexts/theme";
import MyForm from "../../components/UI/MyForm/MyForm";
import {
  emailExists,
  loginUrl,
  logoutUrl,
  setEmailToAuthorizedUser,
  setFirstnameToAuthorizedUser,
  setLastnameToAuthorizedUser,
  setPasswordToAuthorizedUser,
} from "../../services/api/user";
import UserContext from "../../contexts/user";
import MyButtonLink from "../../components/UI/MyButtonLink/MyButtonLink";
import DukContext from "../../contexts/duk/index";

function Settings() {
  const { title, wrapper, disconnectBtn, container, form, nouser } = classes;
  const { theme, changeTheme } = useContext(ThemeContext);
  const { duk, setDuk } = useContext(DukContext);
  const [error] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const user = useContext(UserContext);

  const handleEmailSubmit = async (data) => {
    if (!(await emailExists(data.email)) && data.email !== user.email) {
      setEmailToAuthorizedUser(user, data.email).then((response) => {
        if (response.ok) {
          alert("Votre ужйшд a bien été modifié");
        } else {
          alert("Quelque chose s'est mal passé");
        }
      });
    } else {
      alert(`${data.email} es déja utilisé`);
    }
  };
  const handleLastnameSubmit = (data) => {
    if (data.lastname !== user.lastname) {
      setLastnameToAuthorizedUser(user, data.lastname).then((response) => {
        if (response.ok) {
          alert("Votre nom a bien été modifié");
        } else {
          alert("Quelque chose s'est mal passé");
        }
      });
    } else {
      alert("Saisissez le nom");
    }
  };
  const handleFirstnameSubmit = (data) => {
    if (data.firstname !== user.firstname) {
      setFirstnameToAuthorizedUser(user, data.firstname).then((response) => {
        if (response.ok) {
          alert("Votre prénom a bien été modifié");
        } else {
          alert("Quelque chose s'est mal passé");
        }
      });
    } else {
      alert("Saisissez le prénom");
    }
  };

  const handlePasswordSubmit = (data) => {
    setPasswordToAuthorizedUser(user, data.password).then((response) => {
      if (response.ok) {
        alert("Votre mot de pass a bien été modifié");
      } else {
        alert("Quelque chose s'est mal passé");
      }
    });
  };

  useEffect(() => {
    if (user) {
      const {
        email: userEmail,
        firstname: userFirstname,
        lastname: userLastname,
      } = user;
      setEmail(userEmail);
      setFirstname(userFirstname);
      setLastname(userLastname);
    }
  }, [user]);

  return (
    <div className={`${user ? container : nouser} pt-3 container`}>
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Configuration</MyPageTitle>
      </section>
      <section className="d-flex flex-column align-items-center">
        {user ? (
          <div>
            <MySwitcher active={theme === "white"} handleOnChange={changeTheme}>
              Theme claire
            </MySwitcher>
            <MySwitcher active={duk} handleOnChange={() => setDuk(!duk)}>
              Je veux voir &quot;Le Saviez Vous&quot;
            </MySwitcher>

            {/* <MySwitcher active={theme === "white"}>
              Recevoir des alertes par email
            </MySwitcher> */}
          </div>
        ) : (
          ""
        )}
        {user ? (
          ""
        ) : (
          <>
            <h2>Vous n&apos;êtes pas connecté</h2>
            <MyButtonLink to={loginUrl()} className="text-black">
              Se Connecter
            </MyButtonLink>
          </>
        )}
      </section>
      {user ? (
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
                label: "Prénom",
                type: "text",
                required: true,
                pattern: /[A-Za-z0-9]+/i,
                error: error.firstname,
                name: "firstname",
                onChange: (e) => {
                  setFirstname(e.target.value);
                },
                value: firstname,
              },
            ]}
            onSubmit={(data) => handleFirstnameSubmit(data)}
          />
          <MyForm
            btnName="modifier"
            className={form}
            inputs={[
              {
                label: "Nom",
                type: "text",
                required: true,
                pattern: /[A-Za-z0-9]+/i,
                error: error.lastname,
                name: "lastname",
                onChange: (e) => {
                  setLastname(e.target.value);
                },
                value: lastname,
              },
            ]}
            onSubmit={(data) => handleLastnameSubmit(data)}
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
      ) : (
        ""
      )}
    </div>
  );
}

export default Settings;
