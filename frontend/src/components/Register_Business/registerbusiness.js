import React, { useEffect } from "react";

import styles from "./registerbusiness.module.css";
import { Snackbar, Alert, Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const RegisterBusiness = () => {
  const [ErrorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  // const [gpl, setGeoLocation] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [check, setCheck] = useState(false);
  // const [gl, setGl] = useState(true);
  const navigate = useNavigate();
  // const showPosition = (pos) => {
  //   const obj = {
  //     latitude: pos.coords.latitude,
  //     longitude: pos.coords.longitude,
  //   };
  //   setGeoLocation(obj);
  //   // alert(obj.latitude)
  //   // alert(obj.longitude)
  // };
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //     setGl(true)
  //   } else {
  //     setGl(false);
  //   }
  // }, []);
  //  useEffect(() => {
  //    let token = localStorage.getItem("token");
  //    if (token !== undefined && token !== null) {
  //      token = token.replace(/['"]+/g, "");

  //    fetch("http://localhost:5000/user/infor", {
  //      method: "GET",
  //      headers: {
  //        Authorization: token,
  //        Accept: "application/json",
  //        "Content-Type": "application/json",
  //      },
  //    })
  //      .then((res) => {

  //        return res.json();
  //      })
  //      .then((data) => {
  //        const role = data.role;
  //        if (role === 0) {
  //          navigate("/");
  //        }
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      });
  //     }
  //     else{
  //       console.log("Token needed")
  //     }
  //  });
  const Register = async (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let regxpass = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
    const userexist=await fetch("http://localhost:5000/exist",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email
      })
    })
    const userExistData=await userexist.json()
    
    if(!regex.test(email)){
      //setErrorMessage("Invalid Email");
      setOpen(true);
      setErrorMessage("Invalid Email Address");
    }
    else if(!regxpass.test(password)){
        setOpen(true);
        setErrorMessage(
          "Password entered should have atleast 8 characters, one uppercase, one lowercase, one number and one special character!"
        );
    }
    else if (userExistData.exist==0 && regex.test(email) && regxpass.test(password)) {
      try {
        
        const response = await axios.post(
          "http://localhost:5000/user/register",
          {
            name: name,
            email: email,
            role: 1,
            password: password,
          }
        );
        setEmail("");
        setName("");
        setPassword("");
        setCheck(false);

        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accesstoken)
        );
        navigate("/business/cyp2");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    } else if(userExistData.exist==1){
      setOpen(true)
      setErrorMessage("User already exist")
    }
  };

  return (
    <div className={styles.home}>
      <br />
      <br />
      <br />
      <form onSubmit={Register} className="container">
        <div className="form-group">
          <a
            onClick={() => {
              navigate(-1);
            }}
            href="#"
            className={styles.back}
          >
            <b>‹ Back</b>
          </a>
        </div>
        <br />
        <div className="form-group" style={{ textAlign: "center" }}>
          <p3>STEP 01/03</p3>
          <br />
          <p4>
            <b>Personal Info.</b>
          </p4>
        </div>
        <br />
        <br />
        <br />
        <div className="form-group" style={{ paddingLeft: "30%" }}>
          <h3>
            <b>Register Business Account!</b>
            <br />
          </h3>
        </div>
        <div className="form-group" style={{ paddingLeft: "30%" }}>
          <p2>
            For the purpose of industry regulation, your details
            <br /> are requied.
          </p2>
        </div>
        <hr />
        <div className="form-group" style={{ textAlign: "center" }}>
          <label htmlFor="name" style={{ paddingRight: "28%" }}>
            <b>Your fullname*</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Invictus Innocent"
            name="name"
            id={styles.name}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
        </div>
        <div className="form-group" style={{ textAlign: "center" }}>
          <label htmlFor="email" style={{ paddingRight: "28%" }}>
            <b>Email address*</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter email address"
            name="email"
            id={styles.email}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>
        <div
          className="form-group"
          style={{ textAlign: "center", paddingRight: "19%" }}
        >
          <input
            type="checkbox"
            defaultChecked="checked"
            name="terms & conditions"
            value={check}
            onChange={(e) => setCheck(e.target.value)}
          />
          <label htmlFor="terms and conditions">
            I agree to terms &amp; conditions
          </label>
        </div>
        <div className="form-group" style={{ textAlign: "center" }}>
          <label htmlFor="create" style={{ paddingRight: "28%" }}>
            <b>Create password*</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            name="create"
            id={styles.create}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </div>
        <div className="form-group" style={{ textAlign: "center" }}>
          <button type="submit" className={styles.registerbtn}>
            Register Account
          </button>
        </div>
        <p style={{ textAlign: "center" }}>Or</p>
        <div className="form-group" style={{ textAlign: "center" }}>
          <button type="button" className={styles.googlebtn}>
            Register with Google
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
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
      {/* <Footer/> */}
    </div>
  );
};

export default RegisterBusiness;
