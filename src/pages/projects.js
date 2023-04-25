import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ArtBook from "../images/JSnow2.png";
import Pictionary from "../images/WebSockets.png";
import Guardian from "../images/Guardian_Desktop.png";
import ShapeWorks from "../images/ShapeWorks4.png";
import Jus from "../images/Black_ReFresh.png";

const Projects = () => {
  return (
    <>
      <Layout>
        <div className="ml-5 mr-5 md:ml-60 md:mr-60 ">
          <div className="text-xl sm:text-3xl font-semibold mt-32 ">
            What I've been working on
          </div>
          <div>
            <p className="smallprojectstext text-md mt-3">
              Take a look at some of the applications and websites I've
              dedicated my time to:
            </p>
          </div>

          <div className="p-4 mb-40 projectsGrid mt-5 md:mt-10 ">
            <Link to="/projects/artbook">
              <div className="smallprojects rounded transform transition duration-500 hover:scale-105 ">
                <img className="smallprojects" src={ArtBook} alt="" />
              </div>
              <div className="text-left ">
                <p className="mt-3 text-xl sm:text-2xl font-bold mt-0 md:mt-10">
                  ArtBook Social Network
                </p>
                <p className="smallprojectstext mt-5 text-md">
                  A MERN social network allowing you to share art with your
                  friends.
                </p>
                <div className="hidden sm:block mt-5">
                  <Link
                    className="hover:underline font-semibold text-sm sm:text-md"
                    to="/projects/artbook"
                    y
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
                    className="hover:underline font-semibold text-sm sm:text-md"
                    to="/projects/chatter"
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
                    to="/projects/chatter"
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

            
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
