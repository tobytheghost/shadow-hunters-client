import React from "react";
import { useGlobalState } from "../../context/GlobalStateProvider";

const Actions = () => {
  const [{ socket }] = useGlobalState();

  const handlePassTurn = () => {
    socket.emit("playerPassTurn", {
      uid: 1,
    });
  };

  return (
    <div className="actions">
      <button onClick={() => handlePassTurn()}>Pass Turn</button>
    </div>
  );
};

export default Actions;
