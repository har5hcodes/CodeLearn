import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { InfoSection } from "./components/InfoSection";
import MessageSection from "./components/MessageSection";

function App() {
  const [message1, setMessage1] = useState(true);
  const [message2, setMessage2] = useState(false);

  const handleMessage = () => {
    setMessage1(!message1);
    setMessage2(!message2);
  };

  return (
    <>
      <div className="container">
        <InfoSection />
        <div>
          <MessageSection message1={message1} message2={message2} />
          <Form handleMessage={handleMessage} />
        </div>
      </div>
    </>
  );
}

export default App;
