import React, { useState } from "react";

import "./CreateGame.scss";

const CreateGame = () => {
  const [players, setPlayers] = useState();
  const [name, setName] = useState();

  return (
    <div className="create">
      <h2 className="create__title">Create Game</h2>
      {/* <label>
        <span className="create__input-title">Players</span>
        <input
          className="create__input create__input--players"
          value={players}
          onChange={(e) => setPlayers(e.target.value)}
        />
      </label> */}
      <label>
        <span className="create__input-title">Name</span>
        <input
          className="create__input create__input--name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className="create__button">Create</button>
    </div>
  );
};

export default CreateGame;
