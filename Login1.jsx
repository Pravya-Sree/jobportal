import React from "react";
function login() {
  return (
    <div style={{ paddingTop: 200 }}>
      <center>
        <h1 style={{ FontSize: 50 }}>Login page</h1>
        username:
        <input type="email"></input>
        <br />
        Password:
        <input type="password"></input>
        <br />
        <input type="submit"></input>
      </center>
    </div>
  );
}
export default login;
