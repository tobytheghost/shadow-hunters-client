import React from "react";
// import { useParams } from "react-router-dom";
// import io from "socket.io-client";

import GameContainer from "../../containers/GameContainer";

import "./Room.scss";

const Room = () => {
  //const { roomId } = useParams();
  return (
    <div className="room">
      <GameContainer />
    </div>
  );
};

export default Room;
