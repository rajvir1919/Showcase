import React, { useEffect, useState } from "react";
import "../App.css";
import Cross from "../Images/cross.png";
const PreviewVideo = (props) => {
  const [det, setDet] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/admin/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const id = props.Data;
        console.log(id, "id", data);
       
        let email;
        for (let i = 0; i < data.products.length; i++) {
          if (data.products[i].link === id) {
            console.log(data.products[i], "data");
            setDet(data.products[i]);
            
          }
        }
        
      });
  }, []);
  return (
    <>
      {det === undefined ? (
        <div></div>
      ) : (
        <div
          onClick={() => {
            props.onPreviewModal(false);
          }}
          className="Preview-wrapper"
        >
          <div className="Preview-container">
            <span
              onClick={() => {
                props.onPreviewModal(false);
              }}
            >
              <img src={Cross} />
            </span>
            <div className="Video1">
              <video src={det.link} controls />
            </div>
            <div className="Video1-details">
              <div className="Video1-details-title">
                <div className="Title">
                  <h1 className="TitleBold">{(det.brand).split('*')[0]}</h1>
                  <div className="Price">{det.price}</div>
                </div>
                <div className="Description">{det.Description}</div>
                <div className="Vid-Button">
                  <a
                    className="boxbtn_1"
                    href={`https://wa.me/${(det.brand).split('*')[1]}`}
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
      )}
    </>
  );
};

export default PreviewVideo;
