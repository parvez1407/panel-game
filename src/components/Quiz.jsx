import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "./QuizDetails";

const Quiz = () => {
  const quiz = useLoaderData();
  const questions = quiz.data.questions;
  // console.log(questions);
  return (
    <div>
      <h3 className="lg:text-4xl lg:font-bold text-indigo-600 mt-14 mb-10">
        Tour of {quiz.data.name}
      </h3>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-1 xl:max-w-screen-lg sm:mx-auto">
        {questions.map((ques, index) => (
          <QuizDetails key={ques.id} ques={ques} index={index}></QuizDetails>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
