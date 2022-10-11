import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-indigo-600 sm:text-4xl md:mx-auto">
            Welcome to My Blog!!!
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="border-indigo-700 border-2 rounded-lg p-3 shadow-xl">
            <p className="mb-4 text-xl font-medium text-indigo-500">
              What is the purpose of React router?
            </p>
            <p className="text-gray-700">
              Routing is a process in which a user is directed to different
              pages based on their action or request. ReactJS Router is mainly
              used for developing Single Page Web Applications. React Router is
              used to define multiple routes in the application. When a user
              types a specific URL into the browser, and if this URL path
              matches any 'route' inside the router file, the user will be
              redirected to that particular route..
              <br />
              <br />
              React Router is a standard library system built on top of the
              React and used to create routing in the React application using
              React Router Package. It provides the synchronous URL on the
              browser with data that will be displayed on the web page. It
              maintains the standard structure and behavior of the application
              and mainly used for developing single page web applications.
            </p>
          </div>
          <div className="border-indigo-700 border-2 rounded-lg p-3 shadow-xl">
            <p className="mb-4 text-xl font-medium text-indigo-500">
              How Does Context API Works?
            </p>
            <p className="text-gray-700">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
              <br />
              <br />
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state.
            </p>
          </div>
          <div className="border-indigo-700 border-2 rounded-lg p-3 shadow-xl">
            <p className="mb-4 text-xl font-medium text-indigo-500">
              Write few lines about useRef.
            </p>
            <p className="text-gray-700">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
              <br />
              <br />
              Does Not Cause Re-renders
              <br />
              If we tried to count how many times our application renders using
              the useState Hook, we would be caught in an infinite loop since
              this Hook itself causes a re-render.
              <br /> <br />
              Accessing DOM Elements
              <br />
              In general, we want to let React handle all DOM manipulation. But
              there are some instances where useRef can be used without causing
              issues. In React, we can add a ref attribute to an element to
              access it directly in the DOM.
              <br /> <br />
              Tracking State Changes
              <br />
              The useRef Hook can also be used to keep track of previous state
              values. This is because we are able to persist useRef values
              between renders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
