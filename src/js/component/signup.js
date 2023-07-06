import React, { useContext, useEffect } from "react";
import "../../styles/signin.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const SignUp = () => {
  const {store, actions}=useContext(Context)
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.username.value;
    const password = event.target.password.value;
    actions.createUser(name, email, password)
    event.target.name.value=""
    event.target.username.value=""
    event.target.password.value=""
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};