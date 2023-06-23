import React from "react";
import "../../styles/signin.css";


export const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="username" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};
