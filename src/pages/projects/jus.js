import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import JusPic from "../../images/Jus.png";
import AFPA from "../../images/afpa.png";
import Artbook from "../../images/JSnow2.png";
import Guardian from "../../images/Guardian_Desktop.png";
import Chatter from "../../images/Chatter_Desktop.png";
import Pictionary from "../../images/WebSockets.png";
import BootstrapLogo from "../../images/bootstrap.png";
import MySQL from "../../images/MySQL.png";
import PHP from "../../images/php.png";
import Charbon from "../../images/charbon.png";
import Jus3 from "../../images/Jus3.png";
import ShapeWorks from "../../images/ShapeWorks4.png";

const Jus = () => {
  return (
    <>
      <Layout>
        <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
          <h1 className="font-bold text-3xl 2xl:text-5xl">
            Juice e-commerce app
          </h1>
          <div className="flex w-full sm:w-1/2 justify-start mt-5">
            <p className="2xl:text-2xl mt-3">
              This was my final course project I did at AFPA in 2019 for my web
              and mobile web developer qualification (equivalent to a Foundation
              Degree in the{" "}
              <a
                className="textSiteGreen"
                href="https://en.wikipedia.org/wiki/European_Qualifications_Framework"
              >
                EQF
              </a>
              ).&nbsp; We had to code from scratch an e-commerce site using MVC
              and Object Oriented Programming.
            </p>{" "}
          </div>
          <div className="mt-5">
            <div className="flex w-full justify-start">
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  WHERE
                </h2>
                <div className="flex justify-center items-center">
                  <a href="https://www.afpa.fr/">
                    <img
                      className="w-20 rounded transform transition duration-300 hover:scale-105"
                      src={AFPA}
                      alt="Ifocop logo"
                    />
                  </a>
                </div>
              </div>
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  STACK
                </h2>
                <p className="p-1 text-sm font-semibold 2xl:text-2xl">
                  <ul>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>SQL</li>
                  </ul>
                </p>
              </div>
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  CODE
                </h2>
                <div className="flex flex-col p-1 text-sm font-bold 2xl:text-2xl">
                  <a
                    className="textSiteGreen"
                    href="https://github.com/james-webdev/Boutique_jus"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 shadow-lg">
            <img className="w-full" src={Jus3} alt="" />
          </div>
          <div className="flex flex-col md:flex md:flex-row justify-between mt-10">
            <div className="">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-3xl">
                  Project Purpose and Goal
                </h2>
              </div>
              <div className="">
                <p className="max-w-4xl 2xl:text-2xl mt-3">
                  I decided to do a Juice e-commerce app as I had just closed my
                  own Juice company and thus had all the marketing images.
                </p>
              </div>
            </div>
            <div className="">
              <p className="hidden md:block md:invisible max-w-4xl 2xl:text-2xl mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                asperiores vitae consequatur unde consectetur ducimus eos, quam
                doloremque repellat tenetur eaque numquam nesciunt nobis ipsum
                alias quo illo, et aliquid.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex sm:flex-row justify-content items-center mt-5 gap-8">
            <div className="w-1/2 flex flex-col xl:flex xl:flex-row mt-4 sm:mt-10 justify-center items-center m-3">
              <img
                className="rounded-lg w-24 2xl:w-40 m-3"
                src={BootstrapLogo}
                alt=""
              />
              <img className="w-40 2xl:w-60 m-2" src={MySQL} alt="" />
              <img className="w-32 2xl:w-48 m-3" src={PHP} alt="" />
            </div>
            <div className="w-full sm:w-1/2 mt-5">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-3xl">
                  Webstack and explanation
                </h2>
              </div>
              <p className="max-w-4xl 2xl:text-2xl mt-3">
                The e-commerce site was coded using in part the code from a blog
                we had written in class in PHP with a Bootstrap template for the
                front-end and a MySQL database. The PHP was linked to the
                database using SQL and I used PHPMyAdmin and WAMP.
              </p>
            </div>
          </div>

          <div className="mt-10 shadow-lg">
            <img className="w-2/3" src={Charbon} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center mt-10">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-3xl">
                Lessons learnt
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              {" "}
              I learnt a lot about the MVC way of building apps in this project.
              I also learnt a great deal about PHP and how to get a front end to
              interact with a database. It gave me a good overview of how apps
              used to be built before the advent of PHP frameworks like Laravel
              (which I got to use for 4 months for my OKOS Partners internship)
              or Symfony as our teacher was a bit old school.
            </p>
          </div>

          <div>
            <h2 className="font-bold mt-10 sm:mt-20 md:text-xl 2xl:text-3xl">
              Other Projects
            </h2>
          </div>
          <div className="p-4 mb-40 projectsGrid mt-5 md:mt-10 ">
            <Link to="/projects/artbook">
              <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects" src={Artbook} alt="" />
              </div>

              <div className="text-left">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                  Artbook
                </p>
                <p className="smallprojectstext mt-5 text-md">
                  A MERN social network allowing you to share art with your
                  friends.
                </p>
                <div className="mt-5 hidden sm:block">
                  <Link
                    className="hover:underline font-semibold text-sm sm:text-md"
                    to="/projects/artbook"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/projects/guardian">
              <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects" src={Guardian} alt="" />
              </div>

              <div className="text-left ">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                  Worktools Website
                </p>
                <p className="smallprojectstext mt-5 text-md">
                  A website in React with Gatsby and custom CSS animations.
                </p>
                <div className="mt-5 hidden sm:block">
                  <Link
                    className="hover:underline font-semibold text-md"
                    to="/projects/guardian"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </Link>

            <Link to="/projects/pictionary">
              <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects" src={Pictionary} alt="" />
              </div>

              <div className="text-left ">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                  Websockets Pictionary
                </p>
                <p className="smallprojectstext mt-5 text-md">
                  A pictionary game using P5.js and websockets with a MongoDB
                  database.
                </p>
                <div className="mt-5 hidden sm:block">
                  <Link
                    className="hover:underline font-semibold text-md"
                    to="/projects/chatter"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </Link>

            <Link to="/projects/chatter">
              <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects shapeworks" src={ShapeWorks} alt="" />
              </div>

              <div className="text-left ">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 sm:mt-10">
                  Shape Works Website
                </p>
                <p className="smallprojectstext mt-5 text-md">
                  A website with Wordpress and Gutenberg blocks.
                </p>
                <div className="mt-5 hidden sm:block">
                  <Link
                    className="hover:underline font-semibold text-sm sm:text-md"
                    to="/projects/chatter"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default Jus;
