import React, { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MyNavbar from "../UI/MyNavbar/MyNavbar";
import MyPopUp from "../UI/MyPopUp/MyPopUp";
import {
  getNotReviewed,
  getDukById,
  setReviewed,
} from "../../services/api/didyouknows";
import DukContext from "../../contexts/duk";
import UserContext from "../../contexts/user/index";
import MyButtonLink from "../UI/MyButtonLink/MyButtonLink";
import { logoutUrl, loginUrl } from "../../services/api/user";
import classes from "./Layout.module.css";

function Layout() {
  const [dukId, setDukId] = useState(null);
  const [duk, setDuk] = useState(null);
  const [active, setActive] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const { duk: dukState } = useContext(DukContext);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    getNotReviewed().then((response) => {
      if (response && response.length > 0) {
        setDukId(+response[0]);
      }
    });
  }, [refresh]);

  useEffect(() => {
    if (dukId && dukState) {
      getDukById(dukId).then((response) => {
        setDuk(response);
        setActive(true);
      });
    } else {
      setActive(false);
      setTimeout(() => {
        setRefresh((prev) => prev + 1);
      }, 300000);
    }
  }, [dukId, dukState]);

  const onClickOk = () => {
    setReviewed(dukId);
    setDukId(null);
  };

  const onClickReset = () => {
    navigate("/settings");
  };

  return (
    <>
      <div
        className="container"
        style={{
          position: "fixed",
          top: "15px",
          right: "50%",
          transform: "translateX(50%)",
          zIndex: 999,
        }}
      >
        <main className="d-flex justify-content-end align-items-center gap-5">
          {user ? (
            <>
              <p>
                Bonjour {user.firstname} {user.lastname}
              </p>
              <MyButtonLink className={classes.disconnectBtn} to={logoutUrl()}>
                Se Deconnecter
              </MyButtonLink>
            </>
          ) : (
            <>
              <p>Bonjour, vous n&apos;êtes pas connecté</p>
              <div className="d-flex gap-1">
                <MyButtonLink to="/signup" className="text-black">
                  S&apos;Inscrire
                </MyButtonLink>
                <MyButtonLink to={loginUrl()} className="text-black">
                  Se Connecter
                </MyButtonLink>
              </div>
            </>
          )}
        </main>
      </div>
      <div style={{ paddingTop: "100px" }}>
        <Outlet />
      </div>

      {duk ? (
        <MyPopUp
          title="LE SAVIEZ VOUS ?"
          onClickOk={onClickOk}
          onClickReset={onClickReset}
          description={duk.description}
          active={active}
        />
      ) : (
        ""
      )}
      <MyNavbar />
    </>
  );
}

export default Layout;
