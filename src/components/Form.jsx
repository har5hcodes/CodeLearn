import React, { useState, useEffect } from "react";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayedSkills, setDisplayedSkills] = useState([
    "Choose your skills",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
  ]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if the form is complete
    const isValidEmail = (email) => {
      if (!email.includes("@")) {
        return false;
      }

      // Make sure the "@" symbol is not the first or last character
      const atIndex = email.indexOf("@");
      if (atIndex === 0 || atIndex === email.length - 1) {
        return false;
      }

      // Make sure there is at least one character before and after the "@" symbol
      const beforeAt = email.slice(0, atIndex);
      const afterAt = email.slice(atIndex + 1);
      if (beforeAt.length === 0 || afterAt.length === 0) {
        return false;
      }

      return true;
    };

    const isFormComplete =
      name !== "" &&
      email !== "" &&
      password !== "" &&
      selectedSkills.length > 0;

    setIsFormValid(isValidEmail && isFormComplete);
  }, [name, email, password, selectedSkills]);

  const handleSelectedSkill = (e) => {
    const selectedSkill = e.target.value;
    if (selectedSkill === "Choose your skills") {
      return;
    }
    setDisplayedSkills((prev) =>
      prev.filter((skill) => skill !== selectedSkill)
    );
    setSelectedSkills((prev) => [...prev, selectedSkill]);
  };

  const handleRemoveSkill = (e) => {
    const removedSkill = e;
    setSelectedSkills((prev) => prev.filter((skill) => skill !== removedSkill));
    setDisplayedSkills((prev) => [...prev, removedSkill]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleMessage();

    setName("");
    setEmail("");
    setPassword("");
    setSelectedSkills([]);
    setDisplayedSkills([
      "Choose your skills",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
    ]);
    setIsFormValid(false);
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select onClick={handleSelectedSkill}>
        {displayedSkills.map((skill) => {
          return (
            <option key={skill} value={skill}>
              {skill}
            </option>
          );
        })}
      </select>
      <div className="selectedSkills">
        {selectedSkills.map((skill) => {
          return (
            <span key={skill} className="selectedSkill">
              {" "}
              {skill}{" "}
              <span
                className="removeSkillBtn"
                onClick={() => handleRemoveSkill(skill)}
              >
                x
              </span>
            </span>
          );
        })}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Claim your free trial
      </button>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <a href="/terms">Terms and Services</a>
      </p>
    </form>
  );
};
