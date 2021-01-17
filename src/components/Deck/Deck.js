import React from "react";

import "./Deck.scss";

const Deck = ({ count, colour }) => {
  return (
    <div className={`deck deck--${colour}`}>
      <span>{count}</span>
    </div>
  );
};

export default Deck;
