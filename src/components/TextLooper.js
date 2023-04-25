import React from "react";
import TextLoop from "react-text-loop";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

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
    <ScrollAnimation animateIn="animate__headShake">
      <div className="h-60 text-2xl p-1 font-bold flex flex-col sm:flex-row items-center justify-center">
        <h2 className="font-semibold">Some tools I use:&nbsp;</h2>
        <TextLoop className="z-0 bgSiteGreen p-1 text-2xl text-white rounded-lg">
          <p className="ml-2 z-0 mt-2">ReactJS.</p>
          <p className="ml-2 z-0 mt-2">JavaScript ES6.</p>
          <p className="ml-2 z-0 mt-2">GatsbyJS.</p>
          <p className="ml-2 z-0 mt-2">CSS animations.</p>
          {/* <p className="ml-2 z-0 mt-2">Responsive design.</p> */}
          <p className="ml-2 z-0 mt-2">CSS Grid.</p>
          <p className="ml-2 z-0 mt-2">Tailwind CSS.</p>
          <p className="ml-2 z-0 mt-2">SASS.</p>
          <p className="ml-2 z-0 mt-2">PHP.</p>
          <p className="ml-2 z-0 mt-2">Git.</p>
          <p className="ml-2 z-0 mt-2">Flexbox.</p>
          <p className="ml-2 z-0 mt-2">Wordpress.</p>
          <p className="ml-2 z-0 mt-2">Styled Components.</p>
        </TextLoop>{" "}
      </div>
    </ScrollAnimation>
  );
};

export default TextLooper;
