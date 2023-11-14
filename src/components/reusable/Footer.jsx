import { useState } from "react";

export const Footer = () => {
  const [messageInput, setMessageInput] = useState("");

  const messageHandler = (event) => {
    event.preventDefault();
    setMessageInput(event.target.value);
  };

  return (
    <footer className="flex flex-wrap">
      <h3>Kontakt</h3>
      <form onSubmit={messageHandler}>
        <textarea
          id="message"
          rows="5"
          placeholder="Deine Nachricht"
        ></textarea>
        <button className="border">Absenden</button>
      </form>
    </footer>
  );
};
