import React from "react";
import Button from "@mui/material/Button";
import "./Register.css";
function Register() {
  return (
    <div>
      <div class="form">
        <h1 class="heading">Register</h1>
        <div class="row">
          <input
            type="text"
            placeholder="User Name"
            autocomplete="off"
            class="name"
            required
          />
        </div>
        <div class="row">
          <input
            type="email"
            placeholder="E-mail"
            autocomplete="off"
            class="email"
            required
          />
        </div>
        <div class="row">
          <input
            type="password"
            placeholder="Create Password"
            autocomplete="off"
            class="password"
            required
          />
        </div>
        <div class="row">
          <input
            type="password"
            placeholder="Confirm Password"
            autocomplete="off"
            class="password"
            required
          />
        </div>
        <div class="row">
          <Button variant="contained" size="small" href="/Login1">
            Register
          </Button>
        </div>
        <a href="#" class="link">
          already have an account ?{" "}
          <Button variant="outlined" size="small" href="/Login1">
            log in here
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Register;
