import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import GuardianPic from "../../images/GuardianDesktop.png";
import Worktools from "../../images/worktools.png";
import ReactLogo from "../../images/react.png";
import TailwindLogo from "../../images/tailwind.png";
import GatsbyLogo from "../../images/gatsby.png";
import MobileOne from "../../images/guardianmob1.png";
import MobileTwo from "../../images/guardianmob2.png";
import MobileThree from "../../images/guardianmob3.png";
import Artbook from "../../images/JSnow2.png";
import Pictionary from "../../images/WebSockets.png";
import Chatter from "../../images/Chatter_Desktop.png";
import Jus from "../../images/Black_ReFresh.png";
import Heart from "../../components/Heart";
import Shield from "../../components/Shield";
import Target from "../../components/Target";

const Guardian = () => {
  return (
    <>
      <Layout>
        <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
          <h1 className="font-bold text-3xl 2xl:text-5xl">Guardian</h1>
          <div className="flex w-full sm:w-1/2 justify-start mt-5">
            <p className="2xl:text-2xl mt-3">
              I built this site from scratch in React with GatsbyJS for
              Worktools, a cyber-security start-up based in London. I worked
              with a graphic designer for the designs. The site includes
              connection to the Google maps API an email notification back-end
              with GetForm.io and custom CSS animations.
            </p>{" "}
          </div>
          <div className="mt-5">
            <div className="flex w-full justify-start">
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  WHERE
                </h2>
                <div className="flex justify-center items-center">
                  <a href="https://www.linkedin.com/company/work-tools">
                    <img
                      className="w-14 rounded transform transition duration-500 hover:scale-105"
                      src={Worktools}
                      alt="Guardian logo"
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
                    <li>Gatsby</li>
                    <li>Tailwind CSS</li>
                    <li>Styled Components</li>
                    <li>AWS</li>
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
                    href="https://github.com/james-webdev/worktools-lander"
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  LIVE
                </h2>
                <p className="p-1 text-xs font-bold 2xl:text-2xl">
                  <a
                    className="textSiteGreen"
                    href="https://worktools-website.netlify.app/"
                  >
                    View Site
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img className="w-full" src={GuardianPic} alt="" />
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
                  Worktools has built a web app and desktop app in React and so
                  wanted a modern website in React to help with their VC funding
                  round. They wanted it to be in React so as to be able to
                  possibly reutilise some of the components across their other
                  apps.
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
              <img className="w-14 m-3" src={GatsbyLogo} alt="" />
              <img className="w-40 m-3" src={TailwindLogo} alt="" />
            </div>
            <div className="w-full sm:w-1/2 mt-5 m-3">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-3xl">
                  Webstack and explanation
                </h2>
              </div>
              <p className="max-w-4xl 2xl:text-2xl mt-3">
                I used React with GatsbyJS, a React-based, GraphQL powered,
                static site generator. I used Tailwind CSS, a utility first CSS
                framework, for styling. It was deployed on AWS.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-col md:mt-10 justify-center items-center sm:flex sm:flex-row">
              <img className="w-56 sm:w-1/3 m-3" src={MobileOne} alt="" />
              <img
                className="hidden lg:block w-56 sm:w-1/3 m-3"
                src={MobileThree}
                alt=""
              />
              <img className="w-56 sm:w-1/3 m-3" src={MobileTwo} alt="" />
            </div>
            {/* <div className="ml-10 mr-10 mt-5 flex justify-center items-center">
              <img className="w-2/3 shadow-lg" src={Users} alt="" />
            </div> */}
          </div>
          <div className="flex flex-col justify-center items-center mb-8 mt-10 w-full sm:w-1/2">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-3xl">
                Lessons Learned
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              I really honed my responsive website skills in this project. It
              was the first time I'd used CSS grid in addition to FlexBox which
              I am more familiar with. I also learnt a lot about CSS animations
              I am quite proud of the shield, target and heart animations which
              I built using SVGs provided by the graphic designer (see below). I
              also was able to improve my skills in using Tailwind CSS and Git
              version control and of course React.
            </p>
          </div>
          <section className="w-full flex justify-center">
            <div
              className="flex-col lg:flex lg:flex-row"
              style={{ maxWidth: 1200 }}
            >
              <div className="lg:w-1/3 mx-12 my-4 xl:ml-0">
                <Heart />
              </div>
              <div className="lg:w-1/3 mx-12 my-4">
                <Shield />
              </div>
              <div className="lg:w-1/3 mx-12 my-4 xl:mr-0">
                <Target />
              </div>
            </div>
          </section>
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
            {/* <Link to="/projects/pictionary">
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
            </Link> */}

            <Link to="/projects/jus">
              <div className="smallprojects rounded transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects" src={Jus} alt="" />
              </div>
              <div className="text-left ">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                  Juice e-commerce app
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

            {/* <Link to="/projects/chatter">
              <div className="smallprojects rounded-lg transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects" src={Chatter} alt="" />
              </div>

              <div className="text-left ">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 sm:mt-10">
                  Chatter Website
                </p>
                <p className="smallprojectstext mt-5 text-md">
                  A website with React and Gatsby.
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
            </Link> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Guardian;
