import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    ${FontAwesomeIcon} {
      transform: translateY(-1px);
    }
  }
`;

const Github = () => (
  <GithubWrapper className="text-3xl">
    <a href="https://www.github.com/james-webdev">
      <FontAwesomeIcon style={{ color: "white" }} icon={faGithub} />
    </a>
  </GithubWrapper>
);

export default Github;
