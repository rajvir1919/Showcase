import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Photo from "../Images/pic.png";
import Icon from "../Images/Icon.png";
import EditProfile from "../Images/edit_profile.svg";
import "../App.css";
const Section = (props) => {
 const navigate = useNavigate();
  const [profilePic,setProfilePic]=useState(Photo);
  return (
    <>
      <div className="header-container">
        <header>
          <div className="hero-container">
            <img src={profilePic} alt="123" id="photo" />
          
          </div>
          <section className="bio">
            <p className="username">Classic clothing</p>
            <div className="videoicon">
              <img src={Icon} alt="123" /> VIDEOS {localStorage.getItem("userVidsSize")}
            </div>
            <div className="bio-container">
              <h5>our shop sells all the things you want</h5>
            </div>
          </section>
          <section className="edit_profile">
            <button
              onClick={() => {
                console.log("ck");
                navigate("/personal/updateProfile");
              }}
            >
              <img src={EditProfile} alt="356" />
            </button>
            <div className="hide">Update profile</div>
          </section>
        </header>
      </div>
    </>
  );
};

export default Section;
