import React, { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./MyCardList.module.css";
import MyCard from "../UI/MyCard/MyCard";
import ThemeProvider from "../../contexts/theme";

function MyCardList({ className, list, color, nameType }) {
  const {
    item,
    "btn-disabled": btnDisabled,
    mycardlist,
    square,
    slider,
    light,
    info,
    "district-name": districtName,
    "vintage-name": vintageName,
    info2,
    dark,
  } = classes;
  const theme = useContext(ThemeProvider);
  const documentRef = useRef(document);
  const [items, setItems] = useState(null);
  const [active, setActive] = useState(0);
  const [vintage, setVintage] = useState(null);
  const [district, setDistrict] = useState(null);

  const [dragStartX, setDragStartX] = useState(null);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(null);
  const [dx, setDx] = useState(0);
  const [cardScrolled, setCardScrolled] = useState(0);
  const unitToScroll = 50;

  useEffect(() => {
    setVintage(list[active].name);
    setDistrict(list[active].district);
  }, [active, list]);

  useEffect(() => {
    if (dx > unitToScroll) {
      setActive(active - 1 >= 0 ? active - 1 : active);
      setCardScrolled(cardScrolled + 1);
    }
    if (dx < -unitToScroll) {
      setActive(items && active + 1 < items.length ? active + 1 : active);
      setCardScrolled(cardScrolled - 1);
    }
  }, [dx, dragStartX]);

  function handleMouseMove(event) {
    if (dragStartX === null || dragStartScrollLeft === null) {
      return;
    }
    event.preventDefault();
    setDx(event.clientX - dragStartX - cardScrolled * unitToScroll);
  }

  function handleMouseUp() {
    setCardScrolled(0);
    setDragStartX(null);
    setDragStartScrollLeft(null);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  }

  function handleMouseDown(event) {
    setDragStartX(event.clientX);
    setDragStartScrollLeft(event.currentTarget.scrollLeft);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
  }

  function handleTouchMove(event) {
    if (dragStartX === null || dragStartScrollLeft === null) {
      return;
    }
    setDx(event.touches[0].clientX - dragStartX - cardScrolled * unitToScroll);
  }

  function handleTouchEnd() {
    setCardScrolled(0);
    setDragStartX(null);
    setDragStartScrollLeft(null);
    document.removeEventListener("touchend", handleTouchEnd);
    document.removeEventListener("touchmove", handleTouchMove);
  }

  function handleTouchStart(event) {
    setDragStartX(event.touches[0].clientX);
    setDragStartScrollLeft(event.currentTarget.scrollLeft);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchmove", handleTouchMove);
  }

  useEffect(() => {
    setItems(documentRef.current.getElementsByClassName(item));
  }, [list]);

  useEffect(() => {
    setActive(items ? Math.round(items.length / 2) - 1 : 0);
  }, [items]);

  useEffect(() => {
    if (items && items.length > 0) {
      let stt = 0;
      items[active].style.transform = "none";
      items[active].style.zIndex = 1;
      items[active].style.filter = "none";
      items[active].style.opacity = 1;
      for (let i = active + 1; i < items.length; i += 1) {
        stt += 1;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = 0;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
      stt = 0;
      for (let i = active - 1; i >= 0; i -= 1) {
        stt += 1;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = 0;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    }
  }, [items, active]);

  return (
    <div
      className={`${className} ${mycardlist} ${
        theme === "dark" && !color ? dark : light
      }`}
    >
      <div className={`${nameType === 1 ? info : info2}`}>
        <p
          className={districtName}
          style={{
            color: theme === "dark" || nameType === 1 ? "white" : "black",
          }}
        >
          {district}
        </p>
        <p
          className={vintageName}
          style={{
            color: theme === "dark" || nameType === 1 ? "white" : "black",
          }}
        >
          {vintage}
        </p>
      </div>

      <div
        tabIndex="0"
        role="button"
        className={`${square} ${slider}`}
        style={color ? { background: color } : {}}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {list.map((elem, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            key={elem.id}
            to={index === active ? `/cards/${elem.district}/${elem.name}` : "#"}
          >
            <MyCard
              onClick={() => {
                setActive(index);
                setVintage(elem.name);
                setDistrict(elem.district);
              }}
              className={classes.item}
              img={elem.img}
            />
          </Link>
        ))}
        <button
          onClick={() =>
            setActive(active + 1 < items.length ? active + 1 : active)
          }
          type="button"
          className={`${classes.btnNext} ${
            items && active + 1 < items.length ? "" : btnDisabled
          }`}
        >
          {">"}
        </button>
        <button
          onClick={() => setActive(active - 1 >= 0 ? active - 1 : active)}
          type="button"
          className={`${classes.btnPrev} ${active - 1 >= 0 ? "" : btnDisabled}`}
        >
          {"<"}
        </button>
      </div>
    </div>
  );
}
MyCardList.defaultProps = {
  className: "",
  color: "",
  nameType: 1,
};

MyCardList.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  nameType: PropTypes.oneOf([1, 2]),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      district: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default MyCardList;
