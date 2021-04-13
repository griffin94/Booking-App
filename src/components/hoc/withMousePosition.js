import { useState, useEffect, useRef } from "react";

const withMousePosition = (WrappedComponent) => {
  const WithMousePosition = (props) => {
    const [mousePos, setMousePos] = useState({ x: null, y: null });
    const ComponentRef = useRef(null);
    const updateMousePosition = (e) => {
      setMousePos({
        x: e.pageX,
        y: e.pageY,
      });
    };
    useEffect(() => {
      ComponentRef.current.addEventListener("mousemove", updateMousePosition);
      return () => {
        ComponentRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      };
    }, []);
    return (
      <WrappedComponent {...props} mousePos={mousePos} ref={ComponentRef} />
    );
  };

  return WithMousePosition;
};

export default withMousePosition;
