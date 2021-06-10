import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ArtBook from "../images/ArtBookDesktopWelcome.png";
import Pictionary from "../images/WebsocketsDesktop.png";
import Guardian from "../images/GuardianDesktop.png";
import Chatter from "../images/ChatterDesktop.png";
import TextLooper from "../components/TextLooper";
import Jus from "../images/Jus.png";

const Projects = () => {
  return (
    <>
      <Layout>
        <div className="ml-5 mr-5 md:ml-60 md:mr-60 smallprojects">
          <div className="text-3xl font-semibold mt-32 smallprojects">
            What I've been working on
          </div>
          <div>
            <p className="text-md mt-3 smallprojects">
              Take a look at some of the applications and websites I've
              dedicated my time to
            </p>
          </div>

          <div className="p-4 mb-40 projectsGrid mt-5 md:mt-10 smallprojects">
            <Link to="/projects/artbook">
              <div className="rounded shadow-xl transform transition duration-500 hover:scale-105 smallprojects">
                <img src={ArtBook} alt="" />
              </div>
              <div className="text-left smallprojects">
                <p className="mt-3 text-2xl font-bold mt-0 md:mt-10">
                  ArtBook Social Network
                </p>
                <p className="mt-5 text-md">
                  A MERN social network allowing you to share art with your
                  friends
                </p>
                <div className="mt-5">
                  <Link
                    className="hover:underline font-semibold text-md"
                    to="/projects/chatter"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/projects/guardian">
              <div className="rounded-lg shadow-xl transform transition duration-500 hover:scale-105 smallprojects">
                <img src={Guardian} alt="" />
              </div>

              <div className="text-left smallprojects">
                <p className="mt-3 text-2xl font-bold mt-0 md:mt-10">
                  Worktools Website
                </p>
                <p className="mt-5 text-md">
                  A website in React with Gatsby and custom CSS animations
                </p>
                <div className="mt-5">
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
              <div className="rounded-lg shadow-xl transform transition duration-500 hover:scale-105 smallprojects">
                <img src={Pictionary} alt="" />
              </div>

              <div className="text-left smallprojects">
                <p className="mt-3 text-2xl font-bold mt-0 md:mt-10">
                  Websockets Pictionary
                </p>
                <p className="mt-5 text-md">
                  A pictionary game using P5.js and websockets with a MongoDB
                  database
                </p>
                <div className="mt-5">
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
              <div className="rounded shadow-xl transform transition duration-500 hover:scale-105 smallprojects">
                <img src={Jus} alt="" />
              </div>
              <div className="text-left smallprojects">
                <p className="mt-3 text-2xl font-bold mt-0 md:mt-10">
                  Boutique Jus
                </p>
                <p className="mt-5 text-md">
                  An E-commerce application in PHP and Bootstrap with a MySQL
                  database
                </p>
                <div className="mt-5">
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
              <div className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105 smallprojects">
                <img src={Chatter} alt="" />
              </div>

              <div className="text-left smallprojects">
                <p className="mt-3 text-2xl font-bold mt-0 sm:mt-10">
                  Chatter Website
                </p>
                <p className="mt-5 text-md">A website with React and Gatsby</p>
                <div className="mt-5">
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

export default Projects;
