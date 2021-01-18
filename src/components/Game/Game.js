import React from "react";

import CardPreview from "../../components/CardPreview/CardPreview";
import Deck from "../../components/Deck/Deck";
import Players from "../../components/Players/Players";
import { useGameState } from "../../context/GameStateProvider";
import Actions from "../../components/Actions/Actions";
import Board from "../Board/Board";

import "./Game.scss";

const Game = () => {
  const [{ preview }] = useGameState();

  return (
    <div className="game">
      <div className="main">
        <div className="subtitle">Players: </div>
        <Players />
        <Board />
      </div>
      <div className="side">
        <div className="subtitle">Card Preview: </div>
        <CardPreview card={preview} />
        <hr />
        <div className="subtitle">Decks: </div>
        <div className="decks">
          <Deck count={16} colour={"black"} />
          <Deck count={16} colour={"white"} />
          <Deck count={16} colour={"green"} />
        </div>
        <hr />
        <div className="subtitle">Actions: </div>
        <Actions />
      </div>
    </div>
  );
};

export default Game;
