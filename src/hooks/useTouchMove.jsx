import { useRef, useEffect, useState } from "react";

function useTouchMove(DOMElementRef, listen = true) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const prevX = useRef(null);
  const prevY = useRef(null);
  let elem;

  useEffect(() => {
    prevX.current = x;
  }, [x]);

  useEffect(() => {
    prevY.current = y;
  }, [y]);

  useEffect(() => {
    elem = DOMElementRef.current;
  }, [listen]);

  useEffect(() => {
    const touchMoveFunc = (e) => {
      setX(e.touches[0].clientX);
      setY(e.touches[0].clientY);
    };
    if (listen) {
      elem.addEventListener("touchmove", touchMoveFunc);
    }
    return () => {
      elem.removeEventListener("touchmove", touchMoveFunc);
    };
  }, [listen]);
  return { x, prevX: prevX.current, y, prevY: prevY.current };
}

export default useTouchMove;
