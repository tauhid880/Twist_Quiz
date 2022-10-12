import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ questions }) => {
  return (
    <div className="mb-10 flex items-center justify-center">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{questions.question}</h2>
          <div className="grid grid-cols-4">
            {questions.options.map((answer) => (
              <Link>{answer}</Link>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
