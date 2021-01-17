import React from "react";
import { useGameState } from "../../context/GameStateProvider";

import "./CardPreview.scss";

const CardPreview = () => {
  const [{ preview }] = useGameState();

  return (
    <div className="card-preview">
      <div className="card-preview__name">{preview.name}</div>
      <div className="card-preview__info">
        <div className="card-preview__type">{preview.type}</div>
        <div className="card-preview__hp">{preview.hp}</div>
      </div>
      <img
        className="card-preview__image"
        src={preview.image}
        alt={preview.name}
      />
      {preview.win && (
        <>
          <div className="card-preview__subtitle">Win Condition: </div>
          <div className="card-preview__win">{preview.win}</div>
        </>
      )}
      {preview.ability && (
        <>
          <div className="card-preview__subtitle">Special Ability: </div>
          <div className="card-preview__ability">{preview.ability}</div>
        </>
      )}
    </div>
  );
};

export default CardPreview;
