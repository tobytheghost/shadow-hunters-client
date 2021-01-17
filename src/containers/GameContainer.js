import React from "react";
import Game from "../components/Game/Game";
import gameReducer, { initialGameState } from "../context/GameReducer";
import { GameStateProvider } from "../context/GameStateProvider";

const GameContainer = () => {
  return (
    <GameStateProvider initialState={initialGameState} reducer={gameReducer}>
      <Game />
    </GameStateProvider>
  );
};

export default GameContainer;
