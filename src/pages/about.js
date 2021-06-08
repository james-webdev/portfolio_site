import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import TextLooper from "../components/TextLooper";

const About = () => {
  return (
    <Layout>
      <div className="mt-10 md:mt-20 mb-2 md:mb-20">
        <TextLooper />
      </div>
      <div className="h-96 ml-5 mr-5 md:ml-60 md:mr-60 flex flex-col lg:flex lg:flex-row text-center mb-96 mt-10 sm:mt-40">
        {/* <p className="poppins text-3xl mt-40">
         Back from France after 14 years I am looking for work in the South East
        </p> */}
        <p className="poppins text-2xl m-3 p-2">
          Why coding? I find it to be the perfect balance of creativity, which I
          value very highly, and problem solving, which keeps my analytical mind
          busy.
        </p>
        <p className="poppins text-2xl m-3 p-2">
          I have a foundation degree and a bachelor's degree in full stack
          JavaScript and web and mobile web development.{" "}
        </p>

        <p className="poppins text-2xl m-3 p-2 aboutMarginB mb-10">
          {" "}
          Previous to my career change in 2019 I set up a{" "}
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
