import React, { useState } from 'react';


const MessageButton = () => {
  const [message, setMessage] = useState('');

  const messages = [
    "Welcome to CSE",
    "Welcome to KL",
    "This is triggered from a different button",
    "This is from the last button"
  ];

  const displayMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex];
    setMessage(selectedMessage);
  };

  return (
    <div>
      <div id="message-container">{message}</div>
      <button onClick={displayMessage} ><h1>Click me</h1></button>
    </div>
  );
};

export default MessageButton;