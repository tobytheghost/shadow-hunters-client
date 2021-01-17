import React from "react";

import "./Location.scss";

const Location = ({ location }) => {
  const characters = [
    {
      colour: "red",
    },
    {
      colour: "green",
    },
  ];
  return (
    <div className="location">
      <div className="location__name">{location.name}</div>
      <div className="location__number">{location.number}</div>
      <div className="location__characters">
        {characters.map((character) => {
          return (
            <div
              key={character.colour}
              className={`location__character location__character--${character.colour}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
