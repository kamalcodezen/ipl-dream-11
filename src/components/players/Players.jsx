import React, { use } from "react";

const Players = ({ playerPromise }) => {
  const players = use(playerPromise);
  console.log(players);

  return (
    <section className="container">
      <p>{players.length}</p>
    </section>
  );
};

export default Players;
