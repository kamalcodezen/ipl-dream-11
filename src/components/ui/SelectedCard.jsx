import React from "react";
import { MdDeleteForever } from "react-icons/md";

const selectedCard = ({ player, handlePlayerRemove }) => {


  return (
    <div className="container ">
      <div className="flex justify-between items-center border-2 border-amber-400 p-4 rounded-xl space-x-5">
        <div className="flex items-center gap-4 justify-between">
          <img
            className="h-[75px] w-[100px]  rounded-xl"
            src={player.image}
            alt={player.name}
          />
          <div>
            <h2 className="text-2xl">{player.name}</h2>
            <p className="text-gray-300">{player.battingStyle}</p>
          </div>
        </div>

        <div>
          <button
            onClick={() => handlePlayerRemove(player)}
            className="text-3xl text-red-500 cursor-pointer"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default selectedCard;
