import React,{useEffect,useState} from "react";
import styles from "../Appbusiness.module.css";
const Videos = (props) => {
  const [vdp,setVdp]=useState([]);
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
       const id=data._id;
       fetch("http://localhost:5000/admin/products", {
        method: "GET",
       }).then((res)=>{
          return res.json();
       }).then((products)=>{
          console.log(products,id,"ip");
         const product=products.products.filter(product=>product.companyName.includes(id));
          console.log(product,"meow");
          setVdp(product);
           localStorage.setItem("vsize",product.length);
       })
    })
  }
  },[])
  return (
    
    <div className={styles.Videos_wrapper}>
     {
        vdp.map((product,index)=>{
          return (
            <div key={index}>
              <video
                
                onClick={() => {
                  props.onFetch(product);
                  props.onPreviewModal(true);
                }}
                src={product.link}
                width="200"
                height="320"
                controls
                autoPlay
                muted
                style={{ objectFit: "cover", cursor: "pointer" }}
              />
            </div>
          );
        })
     }
      {/* {props.VideoDetails.map((video,index) => {
        
        return (
          <div>
         
          <video key={index} onClick={()=>{
              props.onFetch(video)
              props.onPreviewModal(true)
             
              
          }}  src={video.previewVideo} width="200" height="320"  style={{objectFit:"cover",cursor:"pointer"}} />
          </div>
        )
      })} */}
    </div>
  );
};

export default Videos;
