import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { TopicsContext } from "./Root";
import Topic from "./Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);
  const navigate = useNavigate();
  const handleTakeTour = (id) => {
    navigate(`/topics/topic/${id}`);
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-5 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Choose</span>
          </span>{" "}
          your way. Advance everyday.
        </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-4 xl:max-w-screen-lg sm:mx-auto">
        {topics.map((topic) => (
          <Topic
            key={topic.id}
            topic={topic}
            handleTakeTour={handleTakeTour}
          ></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
