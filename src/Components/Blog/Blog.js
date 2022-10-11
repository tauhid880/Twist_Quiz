import React from "react";

const Blog = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* Question 1 */}
      <div className="collapse shadow-md shadow-black bg-violet-300 m-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          1. What is the purpose of react router?
        </div>
        <div className="collapse-content">
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
      </div>
      {/* Question 2 */}
      <div className="collapse shadow-md shadow-black bg-violet-300 m-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          2. How does context api work?
        </div>
        <div className="collapse-content">
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management.
          </p>
        </div>
      </div>
      {/* Question 3 */}
      <div className="collapse shadow-md shadow-black bg-violet-300 m-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          3. What is useRef?
        </div>
        <div className="collapse-content">
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
