import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import IFOCOP from "../../images/ifocop.png";
import ReactLogo from "../../images/react.png";
import TailwindLogo from "../../images/tailwind.png";
import JSnow from "../../images/jsnow.png";
import JSnowMobile from "../../images/mobileJS.png";
import FaveMobile from "../../images/mobileFave.png";
import Mobile from "../../images/mobile.png";
import FlowerFarmer from "../../images/FlowerFarmer.png";
import Users from "../../images/Users.png";
import Pictionary from "../../images/WebsocketsDesktop.png";
import Guardian from "../../images/GuardianDesktop.png";
import Chatter from "../../images/ChatterDesktop.png";
import Jus from "../../images/Jus.png";

const ArtBook = () => {
  return (
    <>
      <Layout>
        <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
          <h1 className="font-bold text-3xl 2xl:text-5xl">ArtBook</h1>
          <div className="flex w-full sm:w-1/2 justify-start mt-5">
            <p className="2xl:text-3xl mt-3">
              This was my final class project at IFOCOP for my Full Stack
              JavaScript qualification (equivalent to a Bachelor's Degree in the{" "}
              <a
                className="textSiteGreen"
                href="https://en.wikipedia.org/wiki/European_Qualifications_Framework"
              >
                EQF
              </a>
              ).&nbsp;It is a social network web and mobile web application
              where users can share images of art they like. It was inspired by
              Instagram.
            </p>{" "}
          </div>
          <div className="mt-5">
            <div className="flex w-full justify-start">
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  WHERE
                </h2>
                <div className="flex justify-center items-center">
                  <a href="https://www.ifocop.fr/formations-metiers/web-digital/formation-developpeur-full-stack-js/">
                    <img
                      className="shadow-md w-14 rounded transform transition duration-300 hover:scale-105"
                      src={IFOCOP}
                      alt="Ifocop logo"
                    />
                  </a>
                </div>
              </div>
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  STACK
                </h2>
                <p className="p-1 text-sm font-semibold 2xl:text-3xl">
                  <ul>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Tailwind CSS</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>Digital Ocean</li>
                  </ul>
                </p>
              </div>
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  CODE
                </h2>
                <div className="flex flex-col p-1 text-sm font-bold 2xl:text-3xl">
                  <a
                    className="textSiteGreen"
                    href="https://github.com/james-webdev/MERN_SocialNetwork_React_Front"
                  >
                    Front-end
                  </a>
                  <a
                    className="textSiteGreen mt-1"
                    href="https://github.com/james-webdev/MERN_SocialNetwork_Node_Back"
                  >
                    Back-end
                  </a>
                </div>
              </div>
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-3xl">
                  LIVE
                </h2>
                <p className="p-1 text-sm font-bold 2xl:text-3xl">
                  <a className="textSiteGreen" href="http://artbook.live/">
                    View Site
                  </a>
                </p>
                <div className="hidden sm:block">
                  <p className="p-1 text-xs font-semibold 2xl:text-3xl">
                    Guest login: guest@example.com
                  </p>
                  <p className="p-1 text-xs font-semibold 2xl:text-3xl">
                    Password: 5678
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 shadow-lg">
            {/* <StaticImage
              className="shadow-lg w-20 rounded"
              src="../images/jsnow.png"
              placeholder="blurred"
              alt="Artbook page"
            /> */}
            <img className="w-full" src={JSnow} alt="" />
          </div>
          <div className="flex flex-col md:flex md:flex-row justify-between mt-10">
            <div className="">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-3xl">
                  Project Purpose and Goal
                </h2>
              </div>
              <div className="">
                <p className="max-w-4xl 2xl:text-3xl mt-3">
                  We were left free to use the frameworks we wanted in this
                  project. I chose React because I can see it is very sought
                  after in today's market and I wanted to develop my skills.
                </p>
              </div>
            </div>
            <div className="">
              <p className="hidden md:block md:invisible max-w-4xl 2xl:text-3xl mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                asperiores vitae consequatur unde consectetur ducimus eos, quam
                doloremque repellat tenetur eaque numquam nesciunt nobis ipsum
                alias quo illo, et aliquid.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex sm:flex-row justify-center items-center mt-5">
            <div className="w-1/2 flex flex-col xl:flex xl:flex-row mt-4 sm:mt-10 justify-center items-center m-3">
              <img
                className="w-14 sm:w-24 2xl:w-40 m-3"
                src={ReactLogo}
                alt=""
              />
              <img className="w-56 2xl:w-96 m-3" src={TailwindLogo} alt="" />
              {/* <StaticImage
                className="shadow-lg rounded w-24 m-2"
                src="../../images/react.png"
                placeholder="blurred"
                alt="react logo"
              />
              <StaticImage
                className="shadow-lg rounded w-24 m-2"
                src="../../images/tailwind.png"
                placeholder="blurred"
                alt="tailwind logo"
              /> */}
              {/* <img className="w-32 m-2" src={MENLogo} alt="" /> */}
            </div>
            <div className="w-full sm:w-1/2 mt-5 m-3">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-3xl">
                  Webstack and explanation
                </h2>
              </div>
              <p className="max-w-4xl 2xl:text-3xl mt-3">
                The back-end is in Node, Express and Mongo DB in a MVC
                structure. The front-end is in React with Hooks and Axios to
                connect to the API. I used Tailwind CSS for styling.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-col gap-6 justify-center items-center sm:flex sm:flex-row">
              <img
                className="w-56 sm:w-1/4 m-3 shadow-lg"
                src={JSnowMobile}
                alt=""
              />
              <img
                className="hidden lg:block w-56 sm:w-1/4 m-3 shadow-lg"
                src={Mobile}
                alt=""
              />
              <img
                className="w-56 sm:w-1/4 m-3 shadow-lg"
                src={FaveMobile}
                alt=""
              />
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
            <p className="max-w-4xl 2xl:text-3xl mt-3">
              I really honed my React skills in this project. In particular for
              using hooks. I used the useState hook and the useEffect hook in
              nearly every component. I was able to learn authentication with
              JWT web tokens and how to store them in local storage. It also
              helped me to understand better using Axios to connect to an API
              and observe the request response cycle in the terminal. I also was
              able to improve my skills in using Tailwind, responsive web
              development and Git version control.
            </p>
          </div>

          {/* <div className="ml-10 mr-10 mt-10 flex justify-center items-center">
            <img className="shadow-lg" src={FlowerFarmer} alt="" />
          </div> */}
          {/* <div className="mt-5 flex justify-center items-center">
            <img className="w-full shadow-lg" src={Users} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-3xl">
                Problems and thought processes
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-3xl mt-3">
              One of the most tricky things was deploying the app on Digital
              Ocean as it was not something I had done before. I had an issue
              with the size of the image I was uploading, I had to change some
              parameters for larger image file upload.
            </p>
          </div> */}
          <div>
            <h2 className="font-bold mt-10 sm:mt-20 md:text-xl 2xl:text-3xl">
              Other Projects
            </h2>
          </div>
          <div className="p-4 mb-40 projectsGrid mt-5 md:mt-10 ">
            <Link to="/projects/guardian">
              <div className="smallprojects rounded-lg shadow-xl transform transition duration-500 hover:scale-105 ">
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
            <Link to="/projects/pictionary">
              <div className="smallprojects rounded-lg shadow-xl transform transition duration-500 hover:scale-105 ">
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

            <Link to="/projects/jus">
              <div className="smallprojects rounded shadow-xl transform transition duration-500 hover:scale-105 ">
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
                    className="hover:underline font-semibold text-md"
                    to="/projects/jus"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </Link>

            <Link to="/projects/chatter">
              <div className="smallprojects rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects" src={Chatter} alt="" />
              </div>

              <div className="text-left">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 sm:mt-10">
                  Chatter Website
                </p>
                <p className="smallprojectstext mt-5 text-md">
                  A website with React and Gatsby.
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

export default ArtBook;
