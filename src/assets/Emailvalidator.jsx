import React from "react";
import { useState } from "react";
import validator from "validator";

const Email = () => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <div>
      <pre>
        <input
        placeholder="E-mail"
          type="text"
          id="userEmail"
          onChange={(e) => validateEmail(e)}
        ></input>{" "}
        <br />
        <span
          style={{
            fontWeight: "bold",
            color: "black",
          }}
        >
          {emailError}
        </span>
      </pre>
    </div>
  );
};
export default Email;
