import React, { Children, useRef } from "react";
import styles from "./phoneotp.module.css";
import pic1 from "./Woman working on laptop at the desk.png";
import { Snackbar, Alert, Button } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

import { Link, useNavigate } from "react-router-dom";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorIcon from "@mui/icons-material/Error";

import { useState,useEffect } from "react";
const CompleteProfileOTP = () => {
  
  const navigate = useNavigate();
   const [ErrorMessage, setErrorMessage] = useState("OTP will expire in 10 minutes");
   const [open, setOpen] = useState(true);
   const [icon,setIcon]=useState(<WarningAmberIcon />);
   const [severity,setSeverity]=useState("success");
   const otpref = useRef();
  // const Children=({remainingTime})=>{
  //    const minutes = Math.floor(remainingTime / 60)
  // const seconds = remainingTime % 60

  // return `${minutes}:${seconds}`
  // }
  // useEffect(() =>{
  //   async function SendPhone(){
  //     try{
  //       var t = localStorage.getItem('token').replace(/"/g, '')
  //       const message = await axios.get('http://localhost:5000/user/getotp', { headers:{ 'Authorization':t}})

  //     } catch (error) {
  //       if (error.response) {
  //           setMsg(error.response.data.msg);

  //       }
  //   }
  //   }
  //   var token = localStorage.getItem('token')
  //   token = token.replace(/"/g, '');

  //   if(token){
  //     const user = jwt.decode(token)
  //     if(!user){
  //       localStorage.removeItem('token')
  //       navigate('/')
  //     }

  //     SendPhone();
  //   }
  // })
  useEffect(()=>{
    setTimeout(()=>{
     setOpen(true);
     setSeverity("info");
      setIcon(<InfoIcon/>);
      setErrorMessage("OTP expired! Please try again");
    },1000*60*10);
    setTimeout(()=>{
        navigate('/business/cyp2');
    },1000*60*10+5000);
  },[])
  const PostPhone = async (e) => {
    e.preventDefault();
    console.log("hehe")
    let details = localStorage.getItem("details");
    details = JSON.parse(details);
    let otp = otpref.current.value;
    console.log(otp, details);
    const res = await fetch("http://localhost:5000/otpcheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
        country: details.country,
        phone: details.phone,
      }),
    });
    const msg = await res.json();
    if (msg.data == "approved") {
      localStorage.removeItem("details");
      navigate("/business/sc");
    } else {
      setOpen(true);
      setSeverity("error");
      setIcon(<ErrorIcon/>);
      setErrorMessage("OTP is invalid! Try again");
    }
    //     try{
    //     const response = await axios.post('http://localhost:5000/user/verify', {phone:phone,}, { headers:{ 'Authorization':localStorage.getItem('token').replace(/"/g, '')}})
    //     if (response.data){

    //     }
    //     setPhone('')
    //   }catch (error) {
    //     if (error.response) {
    //         setMsg(error.response.data.msg);
    //     }
    // }
  };
  return (
    <div className="OTPPage">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className={styles.container1}>
              <form onSubmit={PostPhone} className="container">
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
                  <p3>STEP 03/03</p3>
                  <br />
                   {/* */}
                </div>
                <br />
                <br />
                <br />
                <div className="form-group" style={{ paddingLeft: "19%" }}>
                  <h3>
                    <b>Complete Your Profile!</b>
                    <br />
                  </h3>
                </div>
                <div className="form-group" style={{ paddingLeft: "20%" }}>
                  <p2>
                    For the purpose of industry regulation, your details
                    <br /> are requied.
                  </p2>
                </div>
                <hr />
                <div className="form-group" style={{ textAlign: "center" }}>
                  <label htmlFor="enterotp" style={{ paddingRight: "48%" }}>
                    <b>Enter OTP</b>
                  </label>
                  <br />
                  <input
                    ref={otpref}
                    type="password"
                    placeholder="Enter otp"
                    name="enterotp"
                    id="enterotp"
                    required
                  />
                  <br />
                </div>
                <br />
                <div className="form-group" style={{ textAlign: "center" }}>
                  <button type="submit" className={styles.savebtn}>
                    Save &amp; Continue
                  </button>
                </div>
                <div className="form-group" style={{ textAlign: "center" }}>
                  <p>
                    
                    <i className="material-icons">lock_outline</i> Your info is
                    safely secured
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-3">
            <img src={pic1} style={{ marginTop: "75px", marginLeft: "20px" }} />
          </div>
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
          }}
          onClose={() => {
            setOpen(false);
          }}
          icon={icon}
          severity={severity}
          variant="filled"
        >
          {ErrorMessage}
        </Alert>
      </Snackbar>
      {/* <Footer/> */}
    </div>
  );
};
export default CompleteProfileOTP;
