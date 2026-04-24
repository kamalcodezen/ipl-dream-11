import React from "react";
import Players from "../players/Players";
import Card from "../ui/Card";

const AvailablePlayers = ({ players }) => {
  return (
    <section className="container  mx-auto ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 mx-auto justify-items-center ">
        {players.map((player) => (
          <Card key={player.id} player={player}></Card>
        ))}
      </div>
    </section>
  );
};

export default AvailablePlayers;
