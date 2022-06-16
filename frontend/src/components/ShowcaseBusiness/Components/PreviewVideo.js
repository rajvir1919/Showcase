import React,{useEffect,useState} from "react";
import "../Appbusiness.module.css";
import Cross from "../Images/cross.png";
const PreviewVideo = (props) => {
  const [pv,setPv]=useState()
  useEffect(()=>{
     let token = localStorage.getItem("token");
     console.log(token);
    if (token !== undefined && token !== null) {
      token = token.replace(/['"]+/g, "");
    

    
    fetch("http://localhost:5000/user/infor", {
      method: "GET",
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
      console.log(data);
       setPv({
        phone:data.phone,
        country:data.country,
       })
    })
  }
    
  },[])
  return (
    <div
      onClick={() => {
        props.onPreviewModal(false);
      }}
      className="Preview-wrapper"
    >
      <div className="Preview-container">
        <span
          onClick={(e) => {
         
            props.onPreviewModal(false);
          }}
        >
          <img src={Cross} />
        </span>
        <div className="Video1">
          <video src={props.Data.link} controls autoPlay muted />
        </div>
        <div className="Video1-details">
          <div className="Video1-details-title">
            <div className="Title">
              <h1 className="TitleBold">{(props.Data.brand).split('*')[0]}</h1>
              <div className="Price">{props.Data.price}</div>
            </div>
            <div className="Description">{props.Data.Description}</div>
            <div className="Vid-Button">
              <a
                className="boxbtn_1"
                href={pv===undefined?"#":`https://wa.me/${pv.country}${pv.phone}`}
                target="_blank"
              >
                Whatsapp
              </a>

              <a
                onClick={() => {
                  props.onGps(true);
                }}
                className="boxbtn_1"
              >
                GPS
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewVideo;
