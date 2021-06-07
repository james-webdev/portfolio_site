import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="h-96 flex flex-col justify-center items-center ml-60 mr-60">
        <p className="poppins text-3xl mt-40">
          I have a French equivalent of a foundation degree and a bachelor's
          degree in web and mobile web development in full stack JavaScript and
          PHP development (European Qualifications Framework){" "}
        </p>
        <p className="poppins text-3xl pt-10">
          {" "}
          Previous to my career change in 2019 I set up a cold pressed juice
          company in Paris and I worked as a teacher in some of the best
          business schools in France: HEC, ESCP Europe, ESSEC, among others
        </p>
      </div>
    </Layout>
  );
};

export default About;
