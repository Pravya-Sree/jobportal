import React from "react";
import Button from "@mui/material/Button";
import "./Login1.css";
function Login1() {
  return (
    <div class="box">
      <div class="form">
        <h1 class="heading">Login</h1>
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
            placeholder="Password"
            autocomplete="off"
            class="password"
            required
          />
        </div>
        <div className="button">
          <Button variant="contained" size="small" href="/Home">
            Login
          </Button>
        </div>
        <div class="row">
          <a href="#" class="link">
            don't have an account?
            <Button variant="outlined" size="small" href="/Register">
              Register one
            </Button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login1;
