import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Photo from "../Images/pic.png";
import Icon from "../Images/Icon.png";
import EditProfile from "../Images/edit_profile.svg";
import styles from "../Appbusiness.module.css";
const Section = (props) => {
  const [profilePic,setProfilePic]=useState(Photo);
  const [whatsapp,setWhatsapp]=useState();
  const naviagte=useNavigate();
  useEffect(()=>{
    let token=localStorage.getItem("token");
    if(token!==undefined&&token!==null){
      token=token.replace(/['"]+/g,"");
      fetch("http://localhost:5000/user/infor",{
        method:"GET",
        headers:{
          Authorization:token,
          Accept:"application/json",
          "Content-Type":"application/json",
        },
      }).then((res)=>{
        return res.json();
      }
      ).then((data)=>{
        const obj={
          phone:data.phone,
          country:data.country,
        }
        setWhatsapp(obj);
      }
      )
    }
    else{
      alert("Please login to see your profile");
    }
  },[])
  return (
    <>
      <div className={styles.header_container}>
        <header>
          <div className={styles.hero_container}>
            <img src={profilePic} alt="123" id="photo" />
            <input
              type="file"
              className={styles.my_file}
              onChange={(e) => {
                setProfilePic(URL.createObjectURL(e.target.files[0]));
              }}
              name=""
              id="my_file"
            />
          </div>
          <section className="bio">
            <p className={styles.username}>Classic clothing</p>
            <div className={styles.videoicon}>
              <img src={Icon} alt="123" /> VIDEOS {localStorage.getItem("vsize")}
            </div>
            <div className={styles.bio_container}>
              <h5>our shop sells all the things you want</h5>
            </div>
          </section>
          <section className={styles.edit_profile}>
            <button
              onClick={() => {
                //console.log("chch")
                naviagte("/business/profile/p1");
              }}
            >
              <img src={EditProfile} alt="356" />
            </button>
            <div className={styles.hide}>Update profile</div>
          </section>
          <section className="whatsapp">
            <div className="box1">
              <button onClick={()=>{
                if(whatsapp!==undefined){
                  window.open(`https://wa.me/${whatsapp.country}${whatsapp.phone}`)
                }
                else{
                  alert("Please login to see your profile");
                }
              }} className="boxbtn1">
                <a id="sp">
                  Whatsapp
                </a>
                <br />
                <span id="sp">contact on whatsapp</span>
              </button>
            </div>
          </section>
          <section className="gps">
            <div className="box2">
              <button
                onClick={() => {
                  props.onGps(true);
                }}
                className="boxbtn2"
              >
                <a id="sp" href="https://www.google.com/maps" target="_blank">
                  GPS
                </a>
                <br />
                <span id="sp">Look for Direction</span>
              </button>
            </div>
          </section>

          <div className="post_videobtn">
            <button onClick={props.onModalClose} className="button button2">
              Post Video
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Section;
