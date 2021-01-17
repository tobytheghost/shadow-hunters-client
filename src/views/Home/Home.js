import React from "react";
import CreateGame from "./CreateGame/CreateGame";
import JoinGame from "./JoinGame/JoinGame";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Shadow Hunters Online</h1>
      <JoinGame />
      <CreateGame />
    </div>
  );
};

export default Home;
