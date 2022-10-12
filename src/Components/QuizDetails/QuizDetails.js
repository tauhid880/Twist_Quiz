import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const QuizDetails = () => {
  const loaderData = useLoaderData();
  const quizData = loaderData.data.questions;
  console.log(loaderData);
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold text-indigo-900 mb-10">
        Quiz of {loaderData.data.name}
      </h1>
      {quizData.map((questions) => (
        <Quiz key={questions.id} questions={questions}></Quiz>
      ))}
    </div>
  );
};

export default QuizDetails;
