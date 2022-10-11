import React from "react";
import { toast } from "react-toastify";
import QuizOptions from "./QuizOptions";

const QuizDetails = ({ ques }) => {
  const { id, question, options, correctAnswer } = ques;
  console.log(ques, id);

  const handleCorrectOptions = (correct) => {
    if (correctAnswer === correct) {
      toast.success("Your Answer is Correct", { autoClose: 500 });
    } else {
      toast.warning("Wrong Answer", { autoClose: 500 });
    }
  };
  const handleCorrectAnswer = () => {
    toast.info(correctAnswer, { autoClose: 1000 });
  };

  return (
    <div className="transition duration-300 bg-indigo-50 rounded shadow-sm hover:shadow">
      <div className="flex justify-end pr-6 pt-4">
        <button onClick={handleCorrectAnswer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-indigo-700 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <h1 className="text-lg font-medium text-indigo-600 mb-6">{question}</h1>
      <div className="grid max-w-md gap-10 p-6 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
        {options.map((option) => (
          <QuizOptions
            key={option}
            option={option}
            handleCorrectOptions={handleCorrectOptions}
          ></QuizOptions>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
