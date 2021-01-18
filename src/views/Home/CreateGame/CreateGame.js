import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalState } from "../../../context/GlobalStateProvider";

import "./CreateGame.scss";

const CreateGame = () => {
  const [{ socket }] = useGlobalState();
  const history = useHistory();
  //const [players, setPlayers] = useState();
  const [name, setName] = useState("");

  const handleCreateNewGame = () => {
    console.log("here");
    socket.emit("hostCreateNewGame");
  };

  socket.on("newGameCreated", (data) => {
    console.log(data);
    history.push(`/lobby/${data.gameId}`);
  });

  return (
    <div className="create">
      <h2 className="create__title">Create Game</h2>
      <label>
        <span className="create__input-title">Name</span>
        <input
          className="create__input create__input--name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className="create__button" onClick={handleCreateNewGame}>
        Create
      </button>
    </div>
  );
};

export default CreateGame;
