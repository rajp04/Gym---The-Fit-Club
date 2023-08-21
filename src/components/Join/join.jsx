import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const join = () => {
  const form = useRef

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3qf286g",
        "template_l7130am",
        form.current,
        "y7ER00l49-TroyxtQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Enter Your Email"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default join;
