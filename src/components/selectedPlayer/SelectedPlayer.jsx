import React from "react";
import SelectedCard from "../ui/SelectedCard";
import toast from "react-hot-toast";

const SelectedPlayer = ({ selectedPlayer, setSelectedPlayer }) => {
  //   console.log(selectedPlayer);

  const handlePlayerRemove = (player) => {
    const isExits = selectedPlayer.filter(
      (selectPlayer) => selectPlayer.id != player.id,
    );
    setSelectedPlayer(isExits);
    toast.success(`Player Removed`);
  };

  if (selectedPlayer.length == 0) {
    return (
      <div className="text-center py-16">
        <p className="text-6xl">🛒</p>
        <p className="text-2xl font-semibold text-gray-500 mt-4">
          Your cart is empty
        </p>
      </div>
    );
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
