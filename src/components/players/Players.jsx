import React, { use } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";

const Players = ({ playerPromise }) => {
  const players = use(playerPromise);
  console.log(players);

  return (
    <div>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
