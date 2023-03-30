import React from "react";

const MessageSection = (props) => {
  return (
    <div className="msgContainer">
      {props.message1 && (
        <p className="msgHeader">
          <span>Try it free 7 days</span> then $120/mo. thereafter.
        </p>
      )}
      {props.message2 && (
        <p className="msgHeader">
          You have successfully subscribed to our plan{" "}
          <span style={{ fontSize: "1.5rem", marginLeft: "0.25rem" }}>
            &#x2713;{" "}
          </span>
        </p>
      )}
    </div>
  );
};

export default MessageSection;
