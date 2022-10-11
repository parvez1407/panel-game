import React from "react";

const QuizOptions = ({ option, handleCorrectOptions }) => {
  return (
    <div className="bg-indigo-100 rounded shadow-sm hover:shadow py-2">
      <button onClick={() => handleCorrectOptions(option)}>{option}</button>
    </div>
  );
};

export default QuizOptions;
