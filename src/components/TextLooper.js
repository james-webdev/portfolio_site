import React from "react";
import TextLoop from "react-text-loop";
import styled from "styled-components";

const TextWrapper = styled.div`
  h1 {
    color: black;
    line-height: 1;
    letter-spacing: 2px;
    font-family: "Poppins", sans-serif;
    animation: textcolour 8s ease-in-out infinite;
  }

  @keyframes textcolour {
    0% {
    }
    38% {
      color: #01bbae;
    }
    65% {
      color: white;
    }

    100% {
    }
  }
`;

const TextLooper = () => {
  return (
    <div className="h-60 text-xl p-1 font-bold flex flex-col sm:flex-row items-center justify-center sm:text-3xl">
      <div className="p-2 leading-loose">
        <h1>Some tools I use:</h1>
      </div>
      <TextLoop className="z-0 bgSiteGreen p-1 text-xl text-white rounded-lg sm:text-3xl">
        <p className="ml-2 z-0 mt-2">React.js</p>
        <p className="ml-2 z-0 mt-2">JavaScript ES6</p>
        <p className="ml-2 z-0 mt-2">Gatsby.js</p>
        <p className="ml-2 z-0 mt-2">CSS animations</p>
        <p className="ml-2 z-0 mt-2">Responsive design</p>
        <p className="ml-2 z-0 mt-2">CSS Grid</p>
        <p className="ml-2 z-0 mt-2">Tailwind CSS</p>
        <p className="ml-2 z-0 mt-2">Git</p>
        <p className="ml-2 z-0 mt-2">Flexbox</p>
        <p className="ml-2 z-0 mt-2">Styled Components</p>
      </TextLoop>{" "}
    </div>
  );
};

export default TextLooper;
