import React, { useState, useEffect } from "react";
import { globalActionTypes } from "../../context/GlobalReducer";
import { useGlobalState } from "../../context/GlobalStateProvider";

const Lobby = () => {
  const [{ socket, players }] = useGlobalState();
  // const [players, setPlayers] = useState();

  socket.on("playerJoinedRoom", (data) => {
    console.log("Player joined room");
    globalReducer({
      type: globalActionTypes.PLAYER_JOINED,
      payload: data,
    });
  });

  return (
    <div>
      {players.map((player) => (
        <div key={JSON.stringify(player)}>{JSON.stringify(player)}</div>
      ))}
    </div>
  );
};

export default Lobby;
