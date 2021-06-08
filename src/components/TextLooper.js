import React from "react";
import TextLoop from "react-text-loop";

const TextLooper = () => {
  return (
    <div className="h-60 text-xl p-1 font-bold flex flex-col sm:flex-row items-center justify-center sm:text-3xl">
      <div className="p-2 leading-loose">Some of the tools I use</div>
      <TextLoop className="z-0 bgSiteGreen p-1 text-xl text-white rounded-lg sm:text-3xl">
        <p className="ml-2 z-0 mt-2">React.js</p>
        <p className="ml-2 z-0 mt-2">Gatsby.js</p>
        <p className="ml-2 z-0 mt-2">CSS animations</p>
        <p className="ml-2 z-0 mt-2">Responsive design</p>
        <p className="ml-2 z-0 mt-2">CSS Grid</p>
        <p className="ml-2 z-0 mt-2">Tailwind CSS</p>
        <p className="ml-2 z-0 mt-2">Flexbox</p>
        <p className="ml-2 z-0 mt-2">Styled Components</p>
      </TextLoop>{" "}
    </div>
  );
};

export default TextLooper;
