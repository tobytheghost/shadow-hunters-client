import React from "react";

import Player from "../../components/Player/Player";

import "./Players.scss";

const Players = () => {
  const players = [
    {
      id: 1,
      username: "tobytheghost",
      color: "red",
      revealed: false,
      character: {
        name: "Werewolf",
        image: "https://picsum.photos/120/80",
        type: "Shadow",
        hp: 14,
        win: "All the Hunters are dead.",
        ability:
          "When you are attacked, you may perform a free attack against the attacker.",
      },
    },
    {
      id: 2,
      username: "player2",
      color: "green",
      revealed: true,
      character: {
        name: "George",
        image: "https://picsum.photos/120/80",
        type: "Hunter",
        hp: 14,
        win: "All the Shadows are dead.",
        ability:
          "Once per game, at the beginning of your turn, you may choose a character and roll a 6 sided die, if you do, deal that much damage to that character.",
      },
    },
    {
      id: 3,
      username: "player3",
      color: "blue",
      revealed: true,
      character: {
        name: "Bob",
        image: "https://picsum.photos/120/80",
        type: "Neutral",
        hp: 14,
        win: "You have 5 or more equipment cards.",
        ability:
          "When your attack would deal 2 or more damage to a character, you may prevent that damage and steal and equipment card from that character.",
      },
    },
    {
      id: 4,
      username: "player4",
      color: "black",
      revealed: true,
      character: {
        name: "Bob",
        image: "https://picsum.photos/120/80",
        type: "Neutral",
        hp: 14,
        win: "You have 5 or more equipment cards.",
        ability:
          "When your attack would deal 2 or more damage to a character, you may prevent that damage and steal and equipment card from that character.",
      },
    },
    {
      id: 5,
      username: "player5",
      color: "white",
      revealed: true,
      character: {
        name: "Bob",
        image: "https://picsum.photos/120/80",
        type: "Neutral",
        hp: 14,
        win: "You have 5 or more equipment cards.",
        ability:
          "When your attack would deal 2 or more damage to a character, you may prevent that damage and steal and equipment card from that character.",
      },
    },
    {
      id: 6,
      username: "player6",
      color: "purple",
      revealed: true,
      character: {
        name: "Bob",
        image: "https://picsum.photos/120/80",
        type: "Neutral",
        hp: 14,
        win: "You have 5 or more equipment cards.",
        ability:
          "When your attack would deal 2 or more damage to a character, you may prevent that damage and steal and equipment card from that character.",
      },
    },
    {
      id: 7,
      username: "player7",
      color: "yellow",
      revealed: true,
      character: {
        name: "Bob",
        image: "https://picsum.photos/120/80",
        type: "Neutral",
        hp: 14,
        win: "You have 5 or more equipment cards.",
        ability:
          "When your attack would deal 2 or more damage to a character, you may prevent that damage and steal and equipment card from that character.",
      },
    },
    {
      id: 8,
      username: "player8",
      color: "orange",
      revealed: false,
      character: {
        name: "Bob",
        image: "https://picsum.photos/120/80",
        type: "Neutral",
        hp: 14,
        win: "You have 5 or more equipment cards.",
        ability:
          "When your attack would deal 2 or more damage to a character, you may prevent that damage and steal and equipment card from that character.",
      },
    },
  ];
  return (
    <div className="players">
      {players.map((player) => (
        <Player key={player.username} player={player} />
      ))}
    </div>
  );
};

export default Players;
