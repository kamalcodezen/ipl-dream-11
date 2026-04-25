import React from "react";
import Players from "../players/Players";
import Card from "../ui/Card";

const AvailablePlayers = ({ players,setCoin,coin }) => {
  return (
    <section className="container ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3  mx-auto justify-items-center gap-y-9">
        {players.map((player) => (
          <Card key={player.id} player={player} setCoin={setCoin} coin={coin}></Card>
        ))}
      </div>
    </section>
  );
};

export default AvailablePlayers;
