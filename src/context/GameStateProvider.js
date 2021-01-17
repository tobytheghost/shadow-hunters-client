import React, { createContext, useContext, useReducer } from "react";

export const GameStateContext = createContext();

export const GameStateProvider = ({ reducer, initialState, children }) => (
  <GameStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GameStateContext.Provider>
);

export const useGameState = () => useContext(GameStateContext);
