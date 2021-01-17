import React, { useState } from "react";

import "./JoinGame.scss";

const JoinGame = () => {
  const [roomId, setRoomId] = useState();
  const [name, setName] = useState();

  return (
    <div className="join">
      <h2 className="join__title">Join Game</h2>
      <label>
        <span className="join__input-title">Room ID</span>
        <input
          className="join__input join__input--room"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
      </label>
      <label>
        <span className="join__input-title">Name</span>
        <input
          className="join__input join__input--name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className="join__button">Join</button>
    </div>
  );
};

export default JoinGame;
