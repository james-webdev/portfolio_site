import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavWrapper = styled.div`
  grid-template-columns: 1fr;
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  align-items: center;
`;

const Nav = () => {
  return (
    <nav>
      <NavWrapper className="bg-white">
        <Link to="/">
          <h1 className="text-3xl p-2 font-bold">JR</h1>
        </Link>
        <div className="mr-10">
          <Link
            to="/about"
            className="p-2 m-2 hover:border-green-500 rounded-sm border border-green-400"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="p-2 m-2 rounded-sm border border-green-400"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="p-2 m-2 rounded-sm border border-green-400"
          >
            Contact
          </Link>
        </div>
      </NavWrapper>
    </nav>
  );
};

export default Nav;
