import React from "react";
import SelectedCard from "../ui/SelectedCard";

const SelectedPlayer = ({ selectedPlayer }) => {
  console.log(selectedPlayer);
  return (
    <div className="space-y-5">
      {selectedPlayer.map((player) => (
        <SelectedCard key={player.id} player={player}></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayer;
