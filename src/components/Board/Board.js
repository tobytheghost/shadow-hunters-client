import React from "react";
import Area from "../Area/Area";

import "./Board.scss";

const Board = () => {
  const locations = [
    {
      name: "Church",
      number: "6",
    },
    {
      name: "Graveyard",
      number: "8",
    },
    {
      name: "Weird Woods",
      number: "9",
    },
    {
      name: "Underworld Gate",
      number: "4-5",
    },
    {
      name: "Hermits Cabin",
      number: "2-3",
    },
    {
      name: "Erstwhile Altar",
      number: "10",
    },
  ];
  return (
    <div className="board">
      <Area locations={[locations[0], locations[1]]} />
      <Area locations={[locations[2], locations[3]]} />
      <Area locations={[locations[4], locations[5]]} />
    </div>
  );
};

export default Board;
