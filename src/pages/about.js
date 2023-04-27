import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Me2 from "../images/James-nobg.png";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div style={{ background: '#01bbae' }} className="flex rounded-md justify-center items-center mt-40 sm:mt-28 mb-8 sm:mb-20">
          <img className="w-72 rounded-lg shadow-lg" src={Me2} alt="" />
        </div>

        <div className="h-96 ml-8 mr-8 flex flex-col mt-40 mb-80 md:mt-5 max-w-3xl text-center justify-center items-center">
          <p className="text-md sm:text-xl">
            At the beginning of 2019, after 9 years teaching business English in
            Paris and facing the closure of a cold-pressed juice company&nbsp;
            {/* <a
              className="textSiteGreen"
              href="https://www.instagram.com/refresh.coldpress/"
            >
              &nbsp;cold-pressed juice company&nbsp;
            </a> */}
            I'd set up, I was looking for a new direction.{" "}
          </p>
          <p className="text-md sm:text-xl mt-5">
            A succesion of synchronous events led me to development. I was able
            to apply for and get on a course in PHP focused web and mobile web
            development. I followed this up with a course in Full Stack
            JavaScript development.
          </p>
          <p className="text-md sm:text-xl mt-5">
            I have been coding nearly every day for 4 years now and have worked on a range of <Link
              className="textSiteGreen"
              to="/projects"
            >
              projects.&nbsp;
            </Link>
            The past year and half I have been working full-time at <a
              className="textSiteGreen"
              href="https://shape.works"
            >
              Shape Works
            </a> helping them build websites with React, SASS, PHP, Wordpress and JavaScript. I find development
            to be the perfect balance of creativity, which I value very highly,
            and problem solving, which keeps my analytical mind busy.
          </p>

          <p className="text-md sm:text-xl mt-5">
            Outside of work I enjoy road biking, swimming and reading.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
