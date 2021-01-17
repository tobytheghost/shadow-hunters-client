import React from "react";

import Character from "../../components/Character/Character";

import "./Player.scss";

const Player = ({ player }) => {
  return (
    <div className={`player player--${player.color}`}>
      <div className="player__name">{player.username}</div>
      {!player.revealed ? (
        <Character character={null} />
      ) : (
        <Character character={player.character} />
      )}
    </div>
  );
};

export default Player;
