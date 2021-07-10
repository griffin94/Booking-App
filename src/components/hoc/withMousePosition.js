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
      <div ref={ComponentRef}>
        <WrappedComponent {...props} mousePos={mousePos} />
      </div>
    );
  };

  return WithMousePosition;
};

export default withMousePosition;
