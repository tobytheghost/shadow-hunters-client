// import firebase from "firebase";
import io from "socket.io-client";

const socket = io("http://localhost:3001", { transport: ["websocket"] });

export const initialGlobalState = {
  socket: socket,
  players: [],
};

export const globalActionTypes = {
  PLAYER_JOINED: "PLAYER_JOINED",
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_JOINED":
      console.log(action.payload);
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    default:
      return state;
  }
};

export default globalReducer;

socket.on("connected", (data) => {
  console.log(data);
});

socket.on("playerPassedTurn", (data) => {
  console.log(data);
  alert("Passed Turn!");
});
