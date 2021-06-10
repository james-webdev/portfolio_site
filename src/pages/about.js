import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import TextLooper from "../components/TextLooper";
import Me from "../images/jim.png";
import Me2 from "../images/Me2.png";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mt-40 sm:mt-28 mb-20">
          <img className="w-56 rounded-lg shadow-lg" src={Me2} alt="" />
        </div>

        <div className="h-96 ml-8 mr-8 flex flex-col mt-32 mb-80 md:mt-5 max-w-3xl text-center justify-center items-center">
          <p className="text-md sm:text-xl">
            At the beginning of 2019 I was in a low place, stuck in a career I
            wasn't enjoying and faced with the failure of a company I had put my
            all into for several years. I was looking for a way forward.{" "}
          </p>
          <p className="text-md sm:text-xl mt-5">
            As if from above the idea of development came to me. I was able to
            apply for and get on a course entirely funded by the French state
            and get funding for 2 years to change career. After the first PHP
            focused web and mobile web development course I began a second
            course in Full Stack JavaScript development. I have developed a
            range of
            <Link className="textSiteGreen" to="/projects">
              {" "}
              projects{" "}
            </Link>
            in different stacks and for different companies. I find development
            to be the perfect balance of creativity, which I value very highly,
            and problem solving, which keeps my analytical mind busy.
          </p>
          <p className="text-md sm:text-xl mt-5">
            After 14 years in Paris I am now back in the UK and looking for my
            next challenge. Outside of work I enjoy road biking and reading.
            Last year I wrote a short dystopian novel set in the 22nd century.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
