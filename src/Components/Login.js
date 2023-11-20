import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material/";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
  const paperStyle = { padding: "30px 20px", width: 450, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1976d2" };
  const marginTop = { marginTop: 15 };

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "pratibha@gmail.com" && password === "123456") {
      navigate("/table");
    }
  };

  return (
    <>
      <Grid style={{ marginTop: "40px" }}>
        <div className="mt-30">
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}></Avatar>
              <h2 style={headerStyle}>Log In</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to log in
              </Typography>
            </Grid>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="email"
                placeholder="Enter your email"
                style={marginTop}
                required={true}
                type="email"
                onChange={handleChange}
                name="email"
                value={inputs.phone}
              />

              <TextField
                label="Password"
                placeholder="Enter your password"
                style={marginTop}
                fullWidth
                onChange={handleChange}
                name="password"
                required={true}
                type="text"
                value={inputs.password}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={marginTop}
              >
                LogIn
              </Button>
            </form>
          </Paper>
        </div>
      </Grid>
    </>
  );
};

export default LogIn;
