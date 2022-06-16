import styles from './profile1.module.css'
import React, { useEffect, useState } from 'react'
import { useNavigate} from "react-router-dom";
import jwt from "jsonwebtoken"
import axios from "axios"

const Profile1 = () =>{
  const navigate = useNavigate()
  const [name, setname] = useState("")
  const [about, setabout] = useState("")
  const [whats, setwhats] = useState("")
  const [msg, setMsg] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(()=>{
    var token = localStorage.getItem('token')
    if(token){
      token = token.replace(/['"]+/g, "");
      const user = jwt.decode(token)
      if(!user){
        localStorage.removeItem('token')
      }
    }
    
  })
  
  const EditDetail = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.patch('http://localhost:5000/user/editpro', {
            name: name,
            phone: phone,
            about: about,
            whats:whats,
        },{
          headers:{
            'Authorization':localStorage.getItem('token').replace(/['"]+/g, ""),
          }
        });
        setPhone('')
        setname('')
        setwhats('')
        setabout('')
        navigate("/business/otp");

    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  } 


    return (
      <div>
        <br />
        <br />
        <br />
        <form onSubmit={EditDetail} className="container" id="con">
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
              style={{ cursor: "pointer" }}
              type="radio"
              id="profile"
              name="password"
              defaultValue="Profile"
            />
            <label className={styles.radio}>Profile</label>
            <input
              style={{ cursor: "pointer" }}
              onChange={() => {
                navigate("/business/profile/p3");
              }}
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
          <div className="form-group" style={{ paddingLeft: "10%" }}>
            <img
              src="/avatarpro.png"
              ait="Photo"
              width="200px"
              height="140px"
            />
          </div>
          <br />
          <div className="form-group" style={{ paddingLeft: "15%" }}>
            <input className={styles.pic} type="file" />
          </div>
          <div className="form-group">
            <p>People visiting your profile will see the following info</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="User name"
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="about me">
              <b>About Me</b>
            </label>
            <br />
            <textarea
              id="about me"
              name="about me"
              style={{ height: "150px" }}
              defaultValue={"            "}
              value={about}
              onChange={(e) => setabout(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ph.no whatsapp">
              <b>Whatsapp link</b>
            </label>
            <br />
            <input
              placeholder="Enter link"
              name="ph.no whatsapp"
              id="ph.no whatsapp"
              required
              value={whats}
              onChange={(e) => setwhats(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ph.no">
              <b>Phonenumber*</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Phone number"
              name="ph.no"
              id="ph.no"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <button
              type="button"
              className="temporarilybtn"
              style={{ paddingRight: "4%", border: "none" }}
            >
              Temporarily disable my account
            </button>
            <button
            onClick={async()=>{
                 let token = localStorage.getItem("token");
                 if (token !== undefined && token !== null) {
                   token = token.replace(/['"]+/g, "");
                 
                  try{
                    const user = await fetch(
                      "http://localhost:5000/user/infor",
                      {
                        method: "GET",
                        headers: {
                          Authorization: token,
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                      }
                    );
                    const user1 = await user.json();
                   
                    const delete_id = user1._id;
                    console.log(delete_id);
                    const deleteUser = await fetch(
                      `http://localhost:5000/user/delete/${delete_id}`,{
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                        },

                        
                      }
                    );
                    const deleteUser1 = await deleteUser.json();
                    console.log("Deleted account", deleteUser1);
                    localStorage.removeItem("token");
                    navigate("/");
                  }
                  catch(err){
                    console.log(err,"error in deleting account")
                  }}
                  else{
                    navigate("/");
                  }
              
            }}
              type="button"
              className="deletebtn"
              style={{ paddingLeft: "3%", border: "none" }}
            >
              Delete my account
            </button>
          </div>
          <div className="form-group">
            <button type="submit" className={styles.savebtn}>
              Save
            </button>
          </div>
        </form>
        {/* <Footer/> */}
      </div>
    );
}
export default Profile1;