import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Snackbar, Alert, Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

import ShowCase from "./ShowCase.png";
const NavBar = () => {
  const navigate = useNavigate();
  const [ErrorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [display1, setDisplay] = useState("none");
  const [color1, setColor1] = useState("black");
  // const [AuthUser, setAuthUser] = useState("/login");
 
  
  const ProfileNavigation=()=>{
    let token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      token = token.replace(/['"]+/g, "");
    

    
    fetch("http://localhost:5000/user/infor", {
      method: "GET",
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        
        return res.json();
      })
      .then((data) => {
        console.log(data,"sp");
      
        const role = data.role;

        if (role == 0) {
          navigate("/dashboarduser");
        } else if (role == 1) {
          navigate("/dashboardbusiness");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setOpen(true);
        setErrorMessage("Error in fetching data");
        console.log(err);
      });
    }
    else{
      setOpen(true);
      setErrorMessage("Please login first");
      navigate('/');
    }
  }
  
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
            src={ShowCase}
          />
        </div>
        <div className={styles.links}>
          {/* <NavLink to="/as"  activeClassName={styles.active}>
            Home
          </NavLink> */}
          <Link to="/">
            <div
              style={{
                margin: "0px 10px",
                fontSize: "1.1rem",
                color: "black",
              }}
            >
              HOME
            </div>
          </Link>
          <Link to="/subs">
            <div
              style={{
                margin: "0px 10px",
                fontSize: "1.1rem",
                color: "black",
              }}
            >
              {"Subscription".toUpperCase()}
            </div>
          </Link>
          <Link to="/FAQ">
            <div
              style={{
                margin: "0px 10px",
                fontSize: "1.1rem",
                color: "black",
              }}
            >
              FAQ
            </div>
          </Link>
          <Link to="/contact">
            <div
              style={{
                margin: "0px 10px",
                fontSize: "1.1rem",
                color: "black",
              }}
            >
              CONTACT-US
            </div>
          </Link>
        </div>
        <div className={styles.icons}>
          <div style={{ display: display1 }}>
            <input type="text" />
          </div>
          <SearchIcon
            onClick={() => {
              setColor1((prev) => {
                if (prev === "black") {
                  setDisplay("block");
                  return "red";
                } else {
                  setDisplay("none");
                  return "black";
                }
              });
            }}
            style={{ color: color1 }}
            className={styles.si}
          />

          <PersonIcon onClick={ProfileNavigation} className={styles.pi} />
        </div>
      </div>
      <Snackbar
   
        open={open}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          sx={{
            fontSize: "1rem",
            width: "500px",
            color: "white",
            zIndex: "1002 !important",
          }}
          onClose={() => {
            setOpen(false);
          }}
          icon={<ErrorIcon />}
          severity="error"
          variant="filled"
        >
          {ErrorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NavBar;
