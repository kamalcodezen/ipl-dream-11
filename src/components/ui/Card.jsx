import React, { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";

const Card = ({ player }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section className="container w-full">
      <div className="card bg-white/20 shadow-sm bg-white/20 flex flex-1 ">
        <figure>
          <img
            className="hover:scale-125  transition-transform duration-500 overflow-hidden w-[400px] h-[200px]"
            src={player.image}
            alt="Player image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FcBusinessman /> {player.name}
          </h2>
          <div className="flex justify-between">
            <p className="flex items-center gap-3">
              <FaFlag /> {player.country}
            </p>
            <button className="btn btn-outline">{player.position}</button>
          </div>
          <div className="divider  my-0"></div>
          <p>Rating:{player.rating}</p>
          <div className="flex justify-between gap-19">
            <p>{player.battingStyle}</p>
            <p className="text-gray-400">{player.battingStyle}</p>
          </div>
          <div className="card-actions justify-end items-center">
            <p>Price: {player.price}</p>
            <button
              onClick={() => setIsSelected(true)}
              className="btn btn-outline btn-secondary"
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
