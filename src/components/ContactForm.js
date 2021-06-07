import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
      message: false,
    });
    if (ok) {
      form.reset();
    }
    if (msg) {
      console.log(msg);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, message: true });
    axios({
      method: "post",
      url: "https://getform.io/f/4a979712-4299-4337-9e90-ef82347d75b3",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
        console.log(r.data);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <>
      <div className="bgSiteGreen rounded p-4 mt-5 text-center contactForm">
        <div className="text-black">
          <h1 className="poppins text-4xl">Get in touch.</h1>
          <p className="poppins">I'll get right back to you.</p>
        </div>
        <form className="" onSubmit={handleOnSubmit}>
          <div className="">
            <input
              className="h-10 mt-4 mb-4 rounded text-black text-center"
              type="email"
              name="email"
              placeholder="You@Example.com"
            />
            <button
              className="ml-10 mr-10 mt-5 mb-5 p-3 rounded bg-white text-black poppins"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      {serverState.message && (
        <div className="poppins rounded mt-3 p-3 text-center text-black text-1xl">
          <p>Thanks! Your email has been submitted.</p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
