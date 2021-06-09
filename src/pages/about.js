import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import TextLooper from "../components/TextLooper";
import Me from "../images/jim.png";
import Me2 from "../images/Me2.png";

const About = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center mt-40 sm:mt-28">
        <img className="w-56 rounded-lg shadow-lg" src={Me2} alt="" />
      </div>

      <div className="h-96 ml-5 mr-5 md:ml-60 md:mr-60 flex flex-col lg:flex lg:flex-row text-center mt-10 mb-60">
        {/* <p className="poppins text-3xl mt-40">
         Back from France after 14 years I am looking for work in the South East
        </p> */}
        <p className="poppins text-lg sm:text-2xl m-3 p-2">
          Why coding? I find it to be the perfect balance of creativity, which I
          value very highly, and problem solving, which keeps my analytical mind
          busy.
        </p>
        <p className="poppins text-lg sm:text-2xl m-3 p-2">
          I have a foundation degree and a bachelor's degree in full stack
          JavaScript and web and mobile web development.{" "}
        </p>

        <p className="poppins text-lg sm:text-2xl m-3 p-2 aboutMarginB mb-40">
          {" "}
          Previous to my career change in 2019 I studied naturopathy, set up a{" "}
          <a
            className="textSiteGreen"
            href="https://www.instagram.com/refresh.coldpress/"
          >
            cold pressed juice company
          </a>{" "}
          and worked as a Business English teacher in Paris.
        </p>
        {/* <p className="poppins text-2xl m-2 p-2 aboutMarginB mb-10">
          I just moved back to England after 14 years living in Paris.{" "}
        </p> */}
      </div>
    </Layout>
  );
};

export default About;
