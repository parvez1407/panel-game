import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic, handleTakeTour }) => {
  const { id, logo, name, total } = topic;
  return (
    <div>
      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="relative w-full h-full">
          <img
            src={logo}
            className="object-cover w-full h-full rounded-t bg-indigo-200"
            alt="Plan"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <p className="text-sm text-gray-900">Total Question: {total}</p>
            <h3 className="mt-1 mb-4 lg:text-xl lg:font-semibold sm:font-medium text-3xl">
              Topic: {name}
            </h3>
          </div>
          <button
            onClick={() => handleTakeTour(id)}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
          >
            Take a Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
