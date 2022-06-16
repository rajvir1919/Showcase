import React, { useEffect, useState } from 'react'
import styles from './profile3.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Profile3 = () =>{
  const navigate = useNavigate()
  const [oldpass,setOld] = useState("")
  const [newpass,setNew] = useState("");
  const [confirmpass,setConfirm] = useState("");


  const handlechange = async(e) =>{
    // e.preventDefault();
    let token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      token = token.replace(/['"]+/g, "");}
    else{
      localStorage.removeItem("token");
      navigate("/")
    }
    if(newpass === confirmpass){
    const response = await axios.patch('http://localhost:5000/user/changepass',{
      oldpass: oldpass,
      newpass:newpass
    },{
      headers:{
        'Authorization':localStorage.getItem('token').replace(/['"]+/g, "")
      }
    })
    var sd = await response;
    alert(response);
    setOld("")
    setConfirm("")
    setNew("")
    }
    else{
      alert("Password does not match ");
    }

  } 
    return (
      <div>

        <br />
        <br />
        <br />
        <form onSubmit={handlechange} className="container" id="con">
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
          <div className="form-group">
            <input
              onChange={() => {
                navigate("/business/profile/p1");
              }}
              type="radio"
              id="profile"
              style={{ cursor: "pointer" }}
              name="password"
              defaultValue="Profile"
            />
            <label className={styles.radio}>Profile</label>
            <input
              style={{ cursor: "pointer" }}
              type="radio"
              id="Change password"
              name="password"
              defaultValue="Change password"
            />
            <label className={styles.radio}>Change password</label>
            <input
              style={{ cursor: "pointer" }}
              onChange={() => {
                navigate("/business/profile/gsp");
              }}
              type="radio"
              id="gps settings"
              name="password"
              defaultValue="GPS settings"
            />
            <label className={styles.radio}>GPS settings</label>
          </div>
          <br />
          <br />
          <div className="form-group">
            <label htmlFor="psw-old">
              <b>Old password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              name="psw-old"
              id="psw-old"
              required
              value={oldpass}
              onChange={(e) => setOld(e.target.value)}
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="psw-new">
              <b>New password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              name="psw-new"
              id="psw-new"
              required
              value={newpass}
              onChange={(e) => setNew(e.target.value)}
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="psw-confirm">
              <b>Confirm new password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              name="psw-confirm"
              id="psw-cofirm"
              required
              value={confirmpass}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="savebtn">
              Save
            </button>
          </div>
        </form>
        {/* <Footer /> */}
      </div>
    );
}
export default Profile3