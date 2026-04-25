import React from "react";
import SelectedCard from "../ui/SelectedCard";

const SelectedPlayer = ({ selectedPlayer, setSelectedPlayer }) => {
  console.log(selectedPlayer);

  const handlePlayerRemove = (player) => {
    const isExits = selectedPlayer.filter(
      (selectPlayer) => selectPlayer.id != player.id,
    );
    setSelectedPlayer(isExits);
  };

  if (selectedPlayer.length == 0) {
    return <h2 className="text-6xl text-center">No Player</h2>;
  }

  return (
    <div className="space-y-5">
      {selectedPlayer.map((player) => (
        <SelectedCard
          key={player.id}
          player={player}
          handlePlayerRemove={handlePlayerRemove}
          selectedPlayer={selectedPlayer}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayer;
