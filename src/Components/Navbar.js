

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";


 function Navbar() {
   const Navigate = useNavigate()

  const logouthandle=()=>{
    localStorage.removeItem("auth-token")
  Navigate("/")
  }
 
  
  return (
    <AppBar>
      <Toolbar>
        <Tabs textColor=".text-white" sx={{ marginLeft: "auto" }}>
          {!JSON.parse(localStorage.getItem("auth-token")) ? (
            <>
              <Link
                to="/"
                style={{
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: 10,
                }}
              >
                <Tab label={"Home"} textColor=".text-white"></Tab>
              </Link>
              {/* <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: 10,
                  marginLeft: "0.5rem",
                }}
              >
                <Tab label={"SignUp"} textColor=".text-white"></Tab>
              </Link> */}

              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: 10,
                  marginLeft: "0.5rem",
                }}
              >
                <Tab label={"Login"} textColor=".text-white"></Tab>
              </Link>
            </>
          ) : (
            <Tab
              onClick={logouthandle}
              label={"logout"}
              textColor=".text-white"
            ></Tab>
          )}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}


export default Navbar