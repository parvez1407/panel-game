import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TopicsContext } from "./Root";
import Topic from "./Topic";

const Home = () => {
  const topics = useContext(TopicsContext);
  const navigate = useNavigate();
  const handleTakeTour = (id) => {
    navigate(`/topics/topic/${id}`);
  };
  return (
    <div>
      <div className="relative">
        <img
          src="https://www.nist.gov/sites/default/files/styles/960_x_960_limit/public/images/2020/07/30/women-ai-blogFeaturedImage-763-2.png?itok=0LSjyqlY?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-center xl:flex-row lg:py-25">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  The quick, brown fox <br className="hidden md:block" />
                  jumps over a <span className="text-indigo-500">lazy dog</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
