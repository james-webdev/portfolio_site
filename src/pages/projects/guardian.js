import React from "react";
import Layout from "../../components/Layout";
import GuardianPic from "../../images/GuardianDesktop.png";

const Guardian = () => {
  return (
    <>
      <Layout>
        <div className="mt-20 ml-5 mr-5 sm:ml-20 sm:mr-20 lg:ml-60 lg:mr-60 mb-28">
          <h1 className="font-bold text-3xl">Guardian</h1>
          <div className="flex w-full sm:w-1/2 justify-start mt-5">
            <p className="2xl:text-2xl mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              asperiores omnis ex optio. Sequi iusto nulla sint sed repellat ab
              itaque laborum in voluptas facilis debitis id nihil, voluptatum
              alias.
            </p>{" "}
          </div>
          <div className="mt-5">
            <div className="flex w-1/2 justify-start">
              <div>
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-2xl">
                  TYPE
                </h2>
                <p className="p-1 text-xs 2xl:text-2xl">
                  something goes here and it needs to wrap around I think
                </p>
              </div>
              <div>
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-2xl">
                  STACK
                </h2>
                <p className="p-1 text-xs 2xl:text-2xl">
                  something goes here and it needs to wrap around I think
                </p>
              </div>
              <div>
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-2xl">
                  CODE
                </h2>
                <p className="p-1 text-xs 2xl:text-2xl">
                  something goes here and it needs to wrap around I think
                </p>
              </div>
              <div>
                <h2 className="m-1 sm:m-4 font-bold text-sm md:text-xl 2xl:text-2xl">
                  LIVE
                </h2>
                <p className="p-1 text-xs 2xl:text-2xl">
                  something goes here and it needs to wrap around I think
                </p>
              </div>
            </div>
          </div>
          <div className="ml-10 mr-10 mt-10">
            <img src={GuardianPic} alt="" />
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
          <div className="flex flex-col sm:flex sm:flex-row justify-content items-center mt-5">
            <div className="w-1/2 flex justify-center items-center">
              <p className="p-2">ICON</p>
              <p className="p-2">ICON</p>
            </div>
            <div className="w-full sm:w-1/2 mt-5">
              <div>
                <h2 className="font-bold md:text-xl 2xl:text-2xl">
                  Webstack and explanation
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
          <div className="mt-10 ">
            <div className="flex flex-col justify-center items-center sm:flex sm:flex-row">
              <img className="sm:w-1/3 m-3" src={GuardianPic} alt="" />
              <img className="sm:w-1/3 mn-3" src={GuardianPic} alt="" />
            </div>
            <div className="ml-10 mr-10 mt-5 flex justify-center items-center">
              <img className="w-2/3" src={GuardianPic} alt="" />
            </div>
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
          <div className="ml-10 mr-10 mt-10 flex justify-center items-center">
            <img src={GuardianPic} alt="" />
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

export default Guardian;
