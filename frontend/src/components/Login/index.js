import React from "react";
import styles from "./login.module.css";
import { Snackbar, Alert, Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

import { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [ErrorMessage,setErrorMessage]=useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  // const [role,setRole]=useState(0)
  const navigate = useNavigate();

  const NewLogin = async (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let regxpass = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    const userexist = await fetch("http://localhost:5000/exist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const userExistData = await userexist.json();
    console.log(regxpass.test(password), regex.test(email));
    if (
      userExistData.exist == 1 &&
      regex.test(email) &&
      regxpass.test(password)
    ) {
      try {
        const response = await axios.post("http://localhost:5000/user/login", {
          email: email,
          password: password,
        });
        console.log(response);
        
        setEmail("");
        setPassword("");
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accesstoken)
        );
        localStorage.setItem("val", JSON.stringify(response.data.val));
        let token = localStorage.getItem("token");
        token = token.replace(/['"]+/g, "");
        const roles = await fetch("http://localhost:5000/user/infor", {
          method: "GET",
          headers: {
            Authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const roleData = await roles.json();
       console.log(roleData.role);
        if (roleData.role == 0) {
          navigate("/dashboarduser");
        } else {
          navigate("/dashboardbusiness");
        }
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    }  else if(!regex.test(email)){
      setOpen(true);
      setErrorMessage("Invalid Email Address is Entered!");
    }
    else if(!regxpass.test(password)){
      setOpen(true);
      setErrorMessage("Password entered should have atleast 8 characters, one uppercase, one lowercase, one number and one special character!");
    }
    
    else if (userExistData.exist == 0) {
      setOpen(true);
      setErrorMessage("User does not exist");
    }
  };

  return (
    <div className={styles.login}>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="/blue bubble (1).png" />
            <img
              src="/blue  bubble with dots tail.png"
              className={styles.blue_bubble_with_dots_tail}
            />
          </div>
          <div className="col-8">
            <div className={styles.container_1}>
              <img
                src="/ShowCase logo (1).png"
                className={styles.showcase_logo1}
                width="125px"
                height="125px"
              />
              <form onSubmit={NewLogin} className={`container ${styles.form1}`}>
                <h6>Login</h6>
                <br />
                <p className={styles.plogin}>
                  Please login using account detail bellow
                </p>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter email address"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Enter password"
                    name=" email-password"
                    id="email-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/r");
                  }}
                  className={styles.ppassword}
                >
                  <b>Forgot your password?</b>
                </p>
                <div className="form-group">
                  <button type="submit" className={styles.signbtn}>
                    Sign In
                  </button>
                </div>
                <p>Or</p>

                <div className="form-group">
                  <button type="button" className={styles.googlebtn}>
                    Register with Google
                  </button>
                </div>
                <br />
                <p className={styles.paccount}>
                  Don't have an Account?
                  <Link to="/joinus">Create account</Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-2">
            <img
              src="/image 1178.png"
              className={styles.image1178}
              style={{ marginTop: "80px", marginLeft: "-140px" }}
            />
            <img
              src="/blue round speech bubble.png"
              className={styles.blue_round_speech_bubble}
            />
          </div>
        </div>
      </div>
      {/* <Footer/> */}

      <Snackbar
        open={open}
        autoHideDuration={6000}
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
    </div>
  );
};

export default Login;
