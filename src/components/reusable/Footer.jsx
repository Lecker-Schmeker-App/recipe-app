import { useState } from "react";
import "./Footer.css";

export const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const messageHandler = (event) => {
    event.preventDefault();
    setMessageInput(event.target.textfeld.value);
  };

  return (
    <footer className="flex flex-wrap justify-center items-center bg-gray-900 py-10">
      {submitted ? (
        <p>Thanks, for your Feedback!</p>
      ) : (
        <form
          onSubmit={messageHandler}
          className="flex flex-col m-4 items-center"
        >
          <h2 className="text-white font-medium">Feedback</h2>
          <textarea
            id="message"
            rows="5"
            name="textfeld"
            placeholder="Ihre Nachricht"
            className="bg-gray-700 rounded-md"
          ></textarea>
          <div className=" my-3 ">
            <button className="btn text-gray bg-green-600 rounded-md font-medium">
              Absenden
            </button>
          </div>
        </form>
      )}

      <div className="text-white p-5 flex flex-col social-media">
        <h2 className="text-center">Social Media</h2>
        <div className="text-green-600 icons ">
          <i className="fa-brands fa-twitter"></i>

          <i className="fa-brands fa-square-facebook"></i>

          <i className="fa-brands fa-square-instagram"></i>

          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>

      <div className="w-full text-xs pt-3 text-center text-white ">
        © 2023 Copywrite - Lecker-Schmecker
      </div>
    </footer>
  );
};
