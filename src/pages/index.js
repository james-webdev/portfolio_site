import * as React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
// import Canvas from "../components/Canvas";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className="ml-5 mr-5">
          <Main />
        </div>
        <div className="">{/* <Canvas /> */}</div>
      </Layout>
    </>
  );
};

export default IndexPage;
