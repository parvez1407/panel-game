import React from "react";

const QuizDetails = ({ ques }) => {
  const { id, question, options } = ques;
  console.log(ques, id);

  return (
    <div className="transition duration-300 bg-indigo-50 rounded shadow-sm hover:shadow">
      <h1 className="text-lg font-medium text-indigo-600 mb-6">{question}</h1>
      <div className="grid max-w-md gap-10 p-6 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
        <div className="bg-indigo-100 rounded shadow-sm hover:shadow">
          <button>{options[0]}</button>
        </div>
        <div className="bg-indigo-100 rounded shadow-sm hover:shadow">
          <button>{options[1]}</button>
        </div>
        <div className="bg-indigo-100 rounded shadow-sm hover:shadow">
          <button>{options[2]}</button>
        </div>
        <div className="bg-indigo-100 rounded shadow-sm hover:shadow">
          <button>{options[3]}</button>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
