import React, { useContext } from "react";
import PropTypes from "prop-types";
import classes from "./MyPopUp.module.css";
import MyButton from "../MyButton/MyButton";
import ThemeProvider from "../../../contexts/theme";

function MyPopUp({ title, description, img, active, onClickReset, onClickOk }) {
  const theme = useContext(ThemeProvider);

  return (
    <div
      className={`${classes.MyPopUp} ${active ? classes.active : ""} ${
        theme === "white" ? classes.light : ""
      }`}
    >
      <div className={classes.wrapper}>
        <h4 className="text-center">{title}</h4>
        <p>{description}</p>
        <div className={classes.footer}>
          <img className={classes.img} src={img.src} alt={img.alt} />
          <div className={classes.btns}>
            <MyButton onClick={onClickReset} className={classes.btn_reset}>
              ne plus afficher
            </MyButton>
            <MyButton
              onClick={onClickOk}
              color="white"
              className={classes.btn_ok}
            >
              ok
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}

MyPopUp.defaultProps = {
  img: {
    src: "/src/assets/img/storybook/3d-casual-life-girl-with-books-and-backpack-1 1.png",
    alt: "girl",
  },
  title: "Titre par defaut",
  description:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. a qui officia deserunt mollit anim id est laborum."',
  active: false,
  onClickReset: () => {},
  onClickOk: () => {},
};

MyPopUp.propTypes = {
  img: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
  title: PropTypes.string,
  description: PropTypes.string,
  active: PropTypes.bool,
  onClickReset: PropTypes.func,
  onClickOk: PropTypes.func,
};

export default MyPopUp;
