import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="h-full border border-black ml-5 mr-5 md:ml-20 md:mr-20 xl:ml-40 xl:mr-40">
          <ContactForm />
        </div>
      </Layout>
    </>
  );
};

export default Contact;
