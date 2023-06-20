import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
function Header() {
  return (
    <div className="header">
      <div>
        <h1>Job</h1>
        <img
          style={{ width: 50, height: 50, marginTop: 0 }}
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYc8EwYJMA4kAHNKLxKXsvlM_kyivtP8hfw&usqp=CAU"
          alt="JobPortal"
        />
        <h1>Portal</h1>
      </div>
      <div class="search">
        <input type="text" placeholder="search styles" />
        <SearchIcon />
      </div>
      <h1>JobPortal</h1>
      <div class="box1">
        <h4>Home</h4>
      </div>
      <div class="box2">
        <h4>About</h4>
      </div>
      <div class="box3">
        <h4>Offers</h4>
      </div>
      <div class="box4">
        <Button variant="contained" size="small" href="/Login1">
          Login
        </Button>
      </div>
      <div class="box5">
        <button>Register</button>
      </div>
      <div class="cart" style={{ position: "relative" }}>
        <ShoppingCartIcon style={{ color: "white" }} />
      </div>
    </div>
  );
}

export default Header;
