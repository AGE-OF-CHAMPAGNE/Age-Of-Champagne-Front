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

function Layout() {
  const [dukId, setDukId] = useState(null);
  const [duk, setDuk] = useState(null);
  const [active, setActive] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const { duk: dukState } = useContext(DukContext);
  const navigate = useNavigate();

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
      <Outlet />
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
