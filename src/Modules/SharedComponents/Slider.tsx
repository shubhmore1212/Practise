import { MouseEvent, MouseEventHandler, useState } from "react";

const Slider = () => {
  const [mousePosition, setMousePosition] = useState({ left: 100, right: 100 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({
      left: (e.pageX / window.innerWidth) * 100,
      right: 100 - (e.pageX / window.innerWidth) * 100,
    });
    console.log(mousePosition.left, mousePosition.right);
  };

  return (
    <div onMouseMove={(e: any) => handleMouseMove(e)}>
      <div
        id="left-side"
        className="side"
        style={{ width: `${mousePosition.left}%` }}
      >
        <h1 className="title">Today is going to be Awesome</h1>
      </div>
      <div
        id="right-side"
        className="side"
        // style={{ width: `${mousePosition.right}%` }}
      >
        <h1 className="title">Today is going to be Wonderful</h1>
      </div>
    </div>
  );
};

export default Slider;
