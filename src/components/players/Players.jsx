import React, { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const Players = ({ playerPromise }) => {
  const players = use(playerPromise);

  const [selectedBtn, setSelectedBtn] = useState("available");

  return (
    <div className="container mt-13">
      <div className="flex justify-between items-center my-7">
        {selectedBtn === "available" ? (
          <h2 className="text-2xl">Available Players</h2>
        ) : (
          <h2 className="text-2xl">Selected Player </h2>
        )}
        <div>
          <button
            onClick={() => setSelectedBtn("available")}
            className={`btn btn-outline rounded-r-none rounded-xl ${selectedBtn === "available" ? "bg-yellow-600" : "bg-white/10"}`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedBtn("selected")}
            className={`btn btn-outline  rounded-l-none rounded-xl ${selectedBtn === "selected" ? "bg-yellow-600" : "bg-white/10"}`}
          >
            Selected 0
          </button>
        </div>
      </div>

      {selectedBtn === "available" ? (
        <AvailablePlayers players={players}></AvailablePlayers>
      ) : (
        <SelectedPlayer></SelectedPlayer>
      )}
    </div>
  );
};

export default Players;
