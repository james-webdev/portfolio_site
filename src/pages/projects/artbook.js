import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
// import ArtBookPic from "../../images/ArtBookDesktopWelcome.png";
import IFOCOP from "../../images/ifocop.png";
import ReactLogo from "../../images/react.png";
import TailwindLogo from "../../images/tailwind.png";
import JSnow from "../../images/jsnow.png";
import JSnowMobile from "../../images/mobileJS.png";
import FaveMobile from "../../images/mobileFave.png";
import FlowerFarmer from "../../images/FlowerFarmer.png";
import Users from "../../images/Users.png";

const ArtBook = () => {
  return (
    <>
      <Layout>
        <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
          <h1 className="font-bold text-3xl">ArtBook</h1>
          <div className="flex w-full sm:w-1/2 justify-start mt-5">
            <p className="2xl:text-2xl mt-3">
              This was my final class project at IFOCOP for my Full Stack
              JavaScript qualification. It is a social network web and mobile
              web application where users can share images of art they like. It
              was inspired by Instagram.
            </p>{" "}
          </div>
          <div className="mt-5">
            <div className="flex w-full justify-start">
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-2xl">
                  WHERE
                </h2>
                <div className="flex justify-center items-center">
                  <a href="https://www.ifocop.fr/">
                    <img
                      className="shadow-lg w-20 rounded"
                      src={IFOCOP}
                      alt="Ifocop logo"
                    />
                  </a>
                </div>
              </div>
              <div className="m-1 sm:m-4">
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-2xl">
                  STACK
                </h2>
                <p className="p-1 text-sm font-semibold 2xl:text-2xl">
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
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-2xl">
                  CODE
                </h2>
                <div className="flex flex-col p-1 text-sm font-bold 2xl:text-2xl">
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
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-2xl">
                  LIVE
                </h2>
                <p className="p-1 text-sm font-bold 2xl:text-2xl">
                  <a className="textSiteGreen" href="http://artbook.live/">
                    View Site
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="ml-10 mr-10 mt-10 shadow-lg">
            <StaticImage
              className="shadow-lg w-20 rounded"
              src="../images/jsnow.png"
              placeholder="blurred"
              alt="Artbook page"
            />
            <img src={JSnow} alt="" />
          </div>
          <div className="flex flex-col md:flex md:flex-row justify-between mt-10">
            <div className="">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-2xl">
                  Project Purpose and Goal
                </h2>
              </div>
              <div className="">
                <p className="max-w-4xl 2xl:text-2xl mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                  asperiores vitae consequatur unde consectetur ducimus eos,
                  quam doloremque repellat tenetur eaque numquam nesciunt nobis
                  ipsum alias quo illo, et aliquid.
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
            <div className="w-1/2 flex justify-center items-center m-3">
              <img className="w-24 m-2" src={ReactLogo} alt="" />
              <img className="w-56 m-2" src={TailwindLogo} alt="" />
              <StaticImage
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
              />
              {/* <img className="w-32 m-2" src={MENLogo} alt="" /> */}
            </div>
            <div className="w-full sm:w-1/2 mt-5 m-3">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-2xl">
                  Webstack and explanation
                </h2>
              </div>
              <p className="max-w-4xl 2xl:text-2xl mt-3">
                I used a pre-coded API for the back-end in Node, Express and
                Mongo DB (though I did make some additions in particular adding
                code to delete all Posts from the database on User delete). The
                front-end I built myself in React with Hooks and Axios to connect to
                the API. I used Tailwind CSS for the styling.
              </p>
            </div>
          </div>
          <div className="mt-10 ">
            <div className="flex flex-col justify-center items-center sm:flex sm:flex-row">
              <img
                className="sm:w-1/4 m-3 shadow-lg"
                src={JSnowMobile}
                alt=""
              />
              <img className="sm:w-1/4 m-3 shadow-lg" src={FaveMobile} alt="" />
            </div>
            {/* <div className="ml-10 mr-10 mt-5 flex justify-center items-center">
              <img className="w-2/3 shadow-lg" src={Users} alt="" />
            </div> */}
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-2xl">
                Problems and thought processes
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              asperiores vitae consequatur unde consectetur ducimus eos, quam
              doloremque repellat tenetur eaque numquam nesciunt nobis ipsum
              alias quo illo, et aliquid.
            </p>
          </div>
          {/* <div className="ml-10 mr-10 mt-10 flex justify-center items-center">
            <img className="shadow-lg" src={FlowerFarmer} alt="" />
          </div> */}
          <div className="ml-10 mr-10 mt-5 flex justify-center items-center">
            <img className="w-2/3 shadow-lg" src={Users} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center mt-10 w-full sm:w-1/2">
            <div>
              <h2 className="font-bold md:text-xl 2xl:text-2xl">
                Lessons Learned
              </h2>
            </div>
            <p className="max-w-4xl 2xl:text-2xl mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              asperiores vitae consequatur unde consectetur ducimus eos, quam
              doloremque repellat tenetur eaque numquam nesciunt nobis ipsum
              alias quo illo, et aliquid.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ArtBook;
