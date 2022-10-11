import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopicCard = ({ topic }) => {
  const { logo, name } = topic;

  return (
    <div className="mb-10">
      <div className="card w-auto bg-violet-300 shadow-xl shadow-gray-500 mb-5 m-10 border-black border-solid">
        <figure className="pb-0 pt-5 px-5">
          <img className="bg-gray-800 rounded-xl" src={logo} alt="Shoes" />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title font-mono font-bold">{name}</h2>
          <div className="card-actions justify-center">
            <button className="btn">
              Start Quiz <FontAwesomeIcon className="ml-2" icon={faPlay} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
