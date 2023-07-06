import React, { useContext, useEffect } from "react";
import "../../styles/signin.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const SignIn = () => {
  const {store, actions}=useContext(Context)
  let navigate=useNavigate()
  useEffect(()=>{
    if(store.token !== undefined || store.token !== null || store.token !== ""){
      navigate("/myprofile")
    }
  }, [store.token])
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.username.value;
    const password = event.target.password.value;

    actions.login(email, password);
    event.target.username.value=""
    event.target.password.value=""
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
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
