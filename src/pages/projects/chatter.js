import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import ShapeWorks from "../../images/ShapeWorks.png";
import ReactLogo from "../../images/react.png";
import Artbook from "../../images/JSnow2.png";
import Pictionary from "../../images/WebSockets.png";
import Guardian from "../../images/Guardian_Desktop.png";
import Jus from "../../images/Black_ReFresh.png";
import SW from "../../images/SW-logo.svg";
import WP from "../../images/WordPress.png";
import SASS from "../../images/Sass.png";
import PHP from "../../images/php.png";

const Chatter = () => {
  return (
    <>
      <Layout>
        <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
          <h1 className="font-bold text-3xl 2xl:text-5xl">Shape Works Website</h1>
          <div className="flex w-full sm:w-1/2 justify-start mt-5">
            <p className="2xl:text-2xl mt-3">
              I built this site with my colleagues at Shape Works in 2023 with Wordpress and custom Gutenberg blocks in React, PHP and SASS.
            </p>{" "}
          </div>
          <div className="mt-5">
            <div className="flex w-full justify-start">
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  WHERE
                </h2>
                <div className="flex justify-center items-center">
                  <a href="https://shape.works/">
                    <img
                      className="w-60 rounded transform transition duration-300 hover:scale-105"
                      src={SW}
                      alt="Shape Works logo"
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
                    <li>React</li>
                    <li>Wordpress</li>
                    <li>PHP</li>
                    <li>SASS</li>
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
                    href="https://github.com/shape-works/shape-dot-works"
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  LIVE
                </h2>
                <p className="p-1 text-sm font-bold 2xl:text-2xl">
                  <a
                    className="textSiteGreen"
                    href="https://shape.works/"
                  >
                    View Site
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 shadow-lg">
            <img className="w-full" src={ShapeWorks} alt="" />
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
                  Shape Works wanted to build its own new portfolio site to showcase the excellent work and the websites it has built for a range of high profile clients in recent years.
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
          <div className="flex flex-col sm:flex sm:flex-row justify-center items-center mt-5">
            <div className="w-1/2 flex flex-col xl:flex xl:flex-row mt-4 sm:mt-10 justify-center items-center m-3">
              <img className="w-14 sm:w-24 m-3" src={ReactLogo} alt="" />
              <img className="w-14 m-3" src={WP} alt="" />
              <img className="w-28 m-3" src={SASS} alt="" />
              <img className="w-28 m-3" src={PHP} alt="" />
            </div>
            <div className="w-full sm:w-1/2 mt-5 m-3">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-3xl">
                  Webstack and explanation
                </h2>
              </div>
              <p className="max-w-4xl 2xl:text-2xl mt-3">
                My team and used React to build custom gutenberg blocks for this site. Back end logic was handled with PHP and Wordpress and styling with SASS. The site is deployed on Kinsta servers.
              </p>
            </div>
          </div>
          {/* <div className="mt-10">
            <div className="flex flex-col md:mt-10 justify-center items-center sm:flex sm:flex-row">
              <img className="w-56 sm:w-1/3 m-3" src={Chatmob1} alt="" />
              <img
                className="hidden lg:block w-56 sm:w-1/3 m-3"
                src={Chatmob2}
                alt=""
              />
              <img className="w-56 sm:w-1/3 m-3" src={Chatmob3} alt="" />
            </div>
            <div className="ml-10 mr-10 mt-5 flex justify-center items-center">
              <img className="w-2/3 shadow-lg" src={Users} alt="" />
            </div>
          </div> */}
          {/* <div className="flex flex-col justify-center items-center mb-8 mt-10 w-full sm:w-1/2">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-3xl">
                Lessons Learned
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              This was my first time using React and I learnt a great deal
              notably building and linking React components, importing images
              and animated GIFs and had my first introduction to Hooks. I was
              able to massively increase my skills in CSS styling, learning
              Flebox along the way and I honed my skills in getting a website to
              be responsive. I also improved my skills in Git version control.
            </p>
          </div> */}
          <div>
            <h2 className="font-bold mt-10 sm:mt-20 md:text-2xl 2xl:text-3xl">
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
                    className="hover:underline font-semibold text-sm sm:text-md"
                    to="/projects/pictionary"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </Link>

            <Link to="/projects/jus">
              <div className="smallprojects rounded transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects" src={Jus} alt="" />
              </div>
              <div className="text-left ">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                  Boutique Jus
                </p>
                <p className="smallprojectstext mt-5 text-md">
                  An E-commerce application in PHP and Bootstrap with a MySQL
                  database.
                </p>
                <div className="mt-5 hidden sm:block">
                  <Link
                    className="hover:underline font-semibold text-sm sm:text-md"
                    to="/projects/jus"
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

export default Chatter;
