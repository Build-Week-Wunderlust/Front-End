import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { register } from "../actions/actions";

//STYLES
import {
  RegisterPage,
  RadioButtons,
  Radio,
  CheckedRadio,
  Button,
  DisabledButton
} from "../styles/register.js";

const Register = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [isTourist, setIsTourist] = useState(true);

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [emailValid, setEmailValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  //Login on form submit
  const register = e => {
    e.preventDefault();

    let creds = {
      email: credentials.email,
      username: credentials.username,
      password: credentials.password,
      isTourist: isTourist
    };

    console.log("Registering with: ", creds);
    props.register(creds);
  };

  const validateField = (name, value) => {
    let fieldValidationErrors = formErrors;
    let formEmailValid = emailValid;
    let formUsernameValid = usernameValid;
    let formPasswordValid = passwordValid;
    let formConfirmPasswordValid = confirmPasswordValid;

    switch (name) {
      case "email":
        formEmailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        fieldValidationErrors.email = formEmailValid ? "" : " is invalid";
        break;
      case "username":
        formUsernameValid = value.length >= 4;
        fieldValidationErrors.username = formUsernameValid
          ? ""
          : " is too short";
        break;
      case "password":
        formPasswordValid = value.length >= 6;
        fieldValidationErrors.password = formPasswordValid
          ? ""
          : " is too short";
        break;
      case "confirmPassword":
        formConfirmPasswordValid = value === credentials.password;
        fieldValidationErrors.confirmPassword = formConfirmPasswordValid
          ? ""
          : "Passwords must match";
      default:
        break;
    }
    console.log("field valid::CONFIRM PASSWORD", formConfirmPasswordValid);
    console.log(fieldValidationErrors);
    setFormErrors(fieldValidationErrors);
    setEmailValid(formEmailValid);
    setUsernameValid(formUsernameValid);
    setPasswordValid(formPasswordValid);
    setConfirmPasswordValid(formConfirmPasswordValid);
  };

  const validateForm = () => {
    if (emailValid && usernameValid && passwordValid && confirmPasswordValid) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    validateField(e.target.name, e.target.value);
  };

  const handleRadio = e => {
    console.log("radio clicked");
    setIsTourist(!isTourist);
  };

  return (
    <>
      <RegisterPage>
        {/* <img src="https://via.placeholder.com/395x184.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"></img> */}

        <form onSubmit={register}>
          <h2>Are you a...</h2>

          <RadioButtons>
            <label>
              <div>
                {isTourist ? (
                  <CheckedRadio onClick={handleRadio} />
                ) : (
                  <Radio onClick={handleRadio} />
                )}
                Tourist
              </div>
            </label>
            <label>
              <div>
                {!isTourist ? (
                  <CheckedRadio onClick={handleRadio} />
                ) : (
                  <Radio onClick={handleRadio} />
                )}
                Guide
              </div>
            </label>
          </RadioButtons>

          <div className="form-input">
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
            {formErrors.username ? (
              <span className="input-error">Username {formErrors.username}</span>
            ) : (
              <span> </span>
            )}
          </div>

          <div className="form-input">
            <span>Email</span>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
            {formErrors.email ? (
              <span className="input-error">Email {formErrors.email}</span>
            ) : (
              <span> </span>
            )}
          </div>

          <div className="form-input">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            {formErrors.password ? (
              <span className="input-error">
                Password {formErrors.password}
              </span>
            ) : (
              <span> </span>
            )}
          </div>
          <div className="form-input">
            <span>Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword ? (
              <span className="input-error">{formErrors.confirmPassword}</span>
            ) : (
              <span> </span>
            )}
          </div>
          {/*************** CHANGE FOR ACTUAL VALIDATION ******************/}
          {true ? (
            <Button type="submit">Sign Up</Button>
          ) : (
            <DisabledButton type="submit" disabled>
              Sign Up
            </DisabledButton>
          )}
        </form>
      </RegisterPage>
    </>
  );
};

const mapDispatchToProps = {
  register
};

export default connect(state => {
  console.log(
    "%c vvv PROPS IN LIST",
    "color: green; background: #222; font-size: 24px;",
    state
  );
  console.log(
    "%c ^^^ PROPS IN LIST",
    "color: green; background: #222; font-size: 24px;"
  );
  return state;
}, mapDispatchToProps)(Register);