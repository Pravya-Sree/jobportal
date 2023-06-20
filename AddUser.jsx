import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AddUser = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    emailId: "",
  });

  const { name, userName, emailId } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/adduser", userData);
    // setUserData({ name: "", userName: "", emailId: "" });
    navigate("/HomePage");
  };

  return (
    <div class="shopping2">
      <div>
        <Container>
          <Box>
            <form onSubmit={submitData}>
              <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
                <TextField
                  variant="outlined"
                  label="Name"
                  name="name"
                  value={name}
                  onChange={handleData}
                />
                <TextField
                  variant="outlined"
                  label="User Name"
                  name="userName"
                  value={userName}
                  onChange={handleData}
                />
                <TextField
                  label="Email Address"
                  name="emailId"
                  value={emailId}
                  variant="outlined"
                  onChange={handleData}
                />
                <Stack direction={"row"} spacing={2}>
                  <Button type="submit" variant="contained">
                    Add User
                  </Button>
                  <Button href="/" color="error" variant="contained">
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default AddUser;
