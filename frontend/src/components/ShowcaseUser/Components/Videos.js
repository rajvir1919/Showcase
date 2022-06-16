import React, { useEffect, useState } from "react";
import "../App.css";
//const vids=[insta,insta2]

const Videos = (props) => {
  const [userVids, setUserVids] = useState([]);
  useEffect(() => {
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
          const id = data._id;
          console.log(id);
          fetch(`http://localhost:5000/user/saved/${id}`, {
            method: "GET",
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data,"bc");
              if(data==undefined)
              {
                
                return;
              }
              let b=[];
               for(let i = data.VideoLink.length-1;i>=0;i--)
               {
                const obj={
                  vid:data.VideoLink[i],
                  productId:data.productId,
                }
               b.push(obj);
               }
               console.log(b);
               localStorage.setItem("userVidsSize",b.length);
               setUserVids(b);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //
      console.log("no token");
    }
  }, []);
  return (
    <>
      <div className="Videos-wrapper">
         {userVids === [] || userVids===undefined ? (
          <div>Loading...</div>
        ) : (
          userVids.map((data,index) => {
            return (
              <video
                 key={index}
                onClick={() => {
                  props.onFetch(data.vid);
                  props.onPreviewModal(true);
                }}
                width="200"
                height="320"
                style={{ objectFit: "cover", cursor: "pointer" }}
                src={data.vid}
                controls
                autoPlay
                loop
                muted={true}
              ></video>
            );
          })
        )}
        
        {userVids.length===0 && <div>No Videos</div>} 
        
      </div>
    </>
  );
};

export default Videos;
