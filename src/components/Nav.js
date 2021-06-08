import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import BurgerMenu from "../components/BurgerMenu";
import Menu from "../components/BurgerDropMenu";

const NavWrapper = styled.div`
  grid-template-columns: 1fr;
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const onBurgerClick = () => setMenu(!menu);

  return (
    <nav>
      <NavWrapper className="bg-white h-20 w-full z-10 bg-opacity-75">
        <Link to="/">
          <h1 className="text-4xl ml-5 p-1 sm:p-3 font-bold">JR</h1>
        </Link>
        <div className="mr-5">
          <Link
            to="/about"
            className="p-1 sm:p-2 m-1 sm:m-2 hover:border-green-500 rounded-sm border border-green-400 bg-opacity-100"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="p-1 sm:p-2 m-1 sm:m-2 hover:border-green-500 rounded-sm border border-green-400 bg-opacity-100"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="p-1 sm:p-2 m-1 sm:m-2 hover:border-green-500 rounded-sm border border-green-400 bg-opacity-100"
          >
            Contact
          </Link>
          {/* <div>
            <div className="mr-5 sm:hidden">
              <BurgerMenu menuOpen={menu} onClick={onBurgerClick} />
            </div>
          </div> */}
        </div>
        {/* <div className="flex justify-center items-center">
          <Menu menuOpen={menu} />
        </div> */}
      </NavWrapper>
    </nav>
  );
};

export default Nav;
