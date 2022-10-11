import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-40 h-40 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-indigo-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8 text-indigo-500">
            Sorry, we didn't find this page!!! Please visit Correct Path.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded-md bg-indigo-300 hover:bg-indigo-500 text-indigo-900 hover:text-indigo-100"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
