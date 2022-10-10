import { faCube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-900 text-yellow-300">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-yellow-300"
          >
            <FontAwesomeIcon className="mr-2" icon={faCube} /> Twist Quiz
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 ">
            <li className="hover:bg-slate-700 font-serif text-lg">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:bg-slate-700 font-serif text-lg">
              <Link to="/topics">Topics</Link>
            </li>
            <li className="hover:bg-slate-700 font-serif text-lg">
              <Link to="/statistics">Statistics</Link>
            </li>
            <li className="hover:bg-slate-700 font-serif text-lg">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
