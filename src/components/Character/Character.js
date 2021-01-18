import React from "react";
import { gameActionTypes } from "../../context/GameReducer";
import { useGameState } from "../../context/GameStateProvider";

import "./Character.scss";

const Character = ({ character }) => {
  const [, gameDispatch] = useGameState();

  const handleOnMouseEnter = () => {
    gameDispatch({
      type: gameActionTypes.SET_PREVIEW,
      payload: {
        preview: character,
      },
    });
  };

  if (!character) {
    return (
      <div className="character">
        <div className="character__name">???</div>
        <div className="character__info">
          <div className="character__type">???</div>
          <div className="character__hp">??</div>
        </div>
        <img src="https://picsum.photos/120/80" alt="" />
      </div>
    );
  }

  return (
    <div
      className={`character character--${character.type}`}
      onMouseEnter={() => handleOnMouseEnter()}
    >
      <div className="character__name">{character.name}</div>
      <div className="character__info">
        <div className="character__type">{character.type}</div>
        <div className="character__hp">{character.hp}</div>
      </div>
      <img src={character.image} alt={character.name} />
      {/* <div
        className={`character__popup ${
          showPopup ? "character__popup--show" : ""
        }`}
      >
        <div className="character__win">{character.win}</div>
        <hr />
        <div className="character__ability">{character.ability}</div>
      </div> */}
    </div>
  );
};

export default Character;
