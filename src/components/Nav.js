import React from "react";
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
      <NavWrapper className="border border-black">
        <h1 className="text-2xl p-2 font-bold">JR</h1>
        <p className="p-2 border border-black">About</p>
        <p className="p-2 border border-black">Projects</p>
        <p className="p-2 border border-black">Contact</p>
      </NavWrapper>
    </nav>
  );
};

export default Nav;
