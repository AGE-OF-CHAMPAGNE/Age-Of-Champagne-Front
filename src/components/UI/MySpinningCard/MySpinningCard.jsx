import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import useTouchMove from "../../../hooks/useTouchMove";
import classes from "./MySpinningCard.module.css";

function MySpinningCard({ img }) {
  const [angle, setAngle] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const [value, setValue] = useState(90);
  const [transform, setTransform] = useState({ x: 148.5, y: 101.25 });
  const [cardActive, setCardActive] = useState(false);
  const [transitionTime, setTransitionTime] = useState(0.1);
  const [displayBackCard, setDisplayBackCard] = useState("d-block");

  // the card color
  const color = "#EFE075";

  // css classes
  const {
    "dark-bg": darkBg,
    card,
    "card-side": cardSide,
    input,
    "img-container": imgContainer,
    "input-container": inputContainer,
    trajectory,
    circle,
    arrow,
    arrow_left: arrowLeft,
    arrow_right: arrowRight,
    line,
    line_45: line45,
    line_135: line135,
    "card-img": cardImg,
    "card-img_active": cardImgActive,
    "notification-error": notificationError,
    "colored-zone": coloredZone,
  } = classes;

  // img-container DOMElement
  const imageRef = useRef(null);

  // screen touch coordinates
  const { x, prevX } = useTouchMove(imageRef, !cardActive);

  useEffect(() => {
    let val;
    if ((angle >= 0 && angle < 90) || (angle >= -90 && angle < 0)) {
      val = angle / 12;
    }
    if (angle >= 90 && angle < 180) {
      val = (180 - angle) / 12;
    }
    if (angle >= -180 && angle < -90) {
      val = (-180 - angle) / 12;
    }
    setRotateZ(val);
  }, [angle]);

  // custom input type range direction conditions
  useEffect(() => {
    setAngle(value * 2 - 180);
    let { y } = transform;
    // 0 - 11.25
    if (value < 11.25) {
      y = value * 2;
    }
    // 11.25 - 22.5
    if (value < 22.5 && value >= 11.25) {
      y = value * 1.875;
    }
    // 22.5 - 33.75
    if (value < 33.75 && value >= 22.5) {
      y = value * 1.75;
    }
    // 33.75 - 45
    if (value < 45 && value >= 33.75) {
      y = value * 1.625;
    }
    // 45 - 56.25
    if (value < 56.25 && value >= 45) {
      y = value * 1.5;
    }
    // 56.25 - 67.5
    if (value < 67.5 && value >= 56.25) {
      y = value * 1.375;
    }
    // 67.5 - 78.75
    if (value < 78.75 && value >= 67.5) {
      y = value * 1.25;
    }
    // 78.75 - 90
    if (value < 90 && value >= 78.75) {
      y = value * 1.125;
    }
    // 90 - 101.25
    if (value < 101.25 && value >= 90) {
      y = (180 - value) * 1.125;
    }
    // 101.25 - 112.5
    if (value < 112.5 && value >= 101.25) {
      y = (180 - value) * 1.25;
    }
    // 112.5 - 123.75
    if (value < 123.75 && value >= 112.5) {
      y = (180 - value) * 1.375;
    }
    // 123.75 - 135
    if (value < 135 && value >= 123.75) {
      y = (180 - value) * 1.5;
    }
    // 135 - 146.25
    if (value < 146.25 && value >= 135) {
      y = (180 - value) * 1.625;
    }
    // 146.25 - 157.5
    if (value < 157.5 && value >= 146.25) {
      y = (180 - value) * 1.75;
    }
    // 157.5 - 168.75
    if (value < 168.75 && value >= 157.5) {
      y = (180 - value) * 1.875;
    }
    // 168.75 - 180
    if (value >= 168.75) {
      y = (180 - value) * 2;
    }
    setTransform({ x: value * 1.65, y });
  }, [value]);

  // reconciliation between circle (custom input) and (normal) input
  useEffect(() => {
    let v;
    if (prevX) {
      v = parseInt(value, 10) + (x - prevX);
      if (v <= 180 && v >= 0) {
        setValue(`${v}`);
      }
    }
  }, [x, prevX]);

  // reconciliation between front and back of the card
  useEffect(() => {
    if (cardActive) {
      setDisplayBackCard("d-none");
    } else {
      setTimeout(() => setDisplayBackCard("d-block"), 500);
    }
  }, [cardActive]);

  // card zoom class
  const cardImgDisabled = {
    transform: `translateX(0%) translateY(0%) rotateY(${angle}deg) rotateZ(${-rotateZ}deg)`,
    transition: `${transitionTime}s transform`,
  };

  return (
    <>
      <div className={card}>
        <div
          ref={imageRef}
          className={imgContainer}
          onClick={() => {
            setCardActive(!cardActive);
            setTransitionTime(0.5);
            setTimeout(() => setTransitionTime(0.1), 300);
            setValue(90);
          }}
          aria-hidden="true"
        >
          <div
            className={`${cardSide} ${displayBackCard}`}
            style={{
              width: angle === 90 || angle === -90 ? "2px" : "0",
            }}
          />
          <div
            className={`${cardImg} ${cardActive ? cardImgActive : ""}`}
            style={cardActive ? {} : cardImgDisabled}
            src={img.src}
            alt={img.alt}
          >
            <img className={coloredZone} src={img.src} alt={img.alt} />
          </div>
          <img
            className={`${cardImg} ${displayBackCard} position-absolute top-0 start-0`}
            style={{
              transform: `rotateY(${angle}deg) rotateZ(${-rotateZ}deg) scaleX(-1)`,
              zIndex: angle > 90 || angle < -90 ? 2 : -1,
            }}
            src="/src/assets/img/storybook/image 14.png"
            alt="dos de la carte"
          />
        </div>
        <div className={inputContainer}>
          <input
            className={input}
            onChange={(e) => {
              if (!cardActive) {
                setValue(e.target.value);
              }
            }}
            type="range"
            name="volume"
            min="0"
            value={value}
            step="1"
            max="180"
          />
          <div className={trajectory}>
            <div
              style={{
                backgroundColor: color,
                transform: `translateX(${transform.x}px) translateY(${transform.y}%)`,
              }}
              className={circle}
            >
              <div className={`${arrow} ${arrowLeft}`}>
                <span className={`${line} ${line45}`} />
                <span className={`${line} ${line135}`} />
              </div>
              <div className={`${arrow} ${arrowRight}`}>
                <span className={`${line} ${line45}`} />
                <span className={`${line} ${line135}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${darkBg} ${cardActive ? "d-block" : "d-none"} z-n1`}
        onClick={() => {
          setCardActive(!cardActive);
          setTransitionTime(0.5);
          setTimeout(() => setTransitionTime(0.1), 300);
          setValue(90);
        }}
        aria-hidden="true"
      >
        {window.DeviceOrientationEvent ? (
          <div className={notificationError}>
            {" "}
            l&apos;orientation de votre appareil n&apos;est pas prise en charge
            !{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

MySpinningCard.defaultProps = {
  img: {
    src: "",
    alt: "carte",
  },
};

MySpinningCard.propTypes = {
  img: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
};

export default MySpinningCard;
