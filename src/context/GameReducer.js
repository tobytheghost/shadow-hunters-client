export const initialGameState = {
  preview: {
    name: "Name",
    image: "https://picsum.photos/120/80",
    type: "Type",
    hp: "HP",
    win: "-",
    ability: "-",
  },
};

export const gameActionTypes = {
  SET_PREVIEW: "SET_PREVIEW",
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "SET_PREVIEW":
      return {
        ...state,
        preview: action.payload.preview,
      };
    default:
      return state;
  }
};

export default gameReducer;
