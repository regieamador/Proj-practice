import React from "react";
import Body from "./Body";
import Header from "./Header";
import Boxes from "./Boxes";
import Squares from "./Squares";

export default function Parent() {
  const [user, setUser] = React.useState("Reginald");
  const [squares, setSquares] = React.useState(Boxes);

  function toggle(index) {
    setSquares((prevSquares) => {
      const updatedSquares = [...prevSquares];

      updatedSquares[index] = { ...updatedSquares[index], on: !updatedSquares[index].on };

      return updatedSquares;
    });

  }

  const boxes = squares.map((box, index) => (
    <Squares key={box.id} on={box.on} pindot={() => toggle(index)} id={box.id} />
  ));

  return (
    <div>
      {boxes}
      <Header user={user} />
      <Body user={user} />
    </div>
  );
}