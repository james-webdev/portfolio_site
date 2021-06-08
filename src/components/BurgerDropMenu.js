import React from "react";
import { Link } from "gatsby";

const Menu = ({ menuOpen }) => {
  return (
    <div
      className={
        menuOpen
          ? "transitionMenu w-screen opacity-100 bg-white flex flex-col text-center sm:hidden"
          : "hidden opacity-0"
      }
    >
      <Link to="/">
        <h1 className="text-4xl ml-5 p-3 font-bold">JR</h1>
      </Link>
      <Link
        to="/about"
        className="p-2 m-2 hover:border-green-500 rounded-sm border border-green-400"
      >
        About
      </Link>
      <Link
        to="/projects"
        className="p-2 m-2 hover:border-green-500 rounded-sm border border-green-400"
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className="p-2 m-2 hover:border-green-500 rounded-sm border border-green-400"
      >
        Contact
      </Link>
    </div>
  );
};

export default Menu;
