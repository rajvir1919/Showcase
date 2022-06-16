import React, { useState,useEffect } from "react";
import ReactPlayer from "react-player";

import styles from "../Formbusiness.module.css";
const PostVideo = (props) => {

  const [fileMeta, setfileMeta] = useState({});
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyAddress, setCompanyAddress] = useState("");
  const [ProductBrand, setProductBrand] = useState("");
  const [ProductType, setProductType] = useState("");
  const [Category, setCategory] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [fileDisplay, setfileDisplay] = useState("No file currently selected for Upload");
 
  const [previewVideo, setPreviewVideo] = useState(null);
   useEffect(()=>{
     
   },[])
  const FileChangeHandler = (e) => {
    // setSelected(true);
    const display =
      "File name " +
      e.target.files[0].name +
      " File size " +
      (e.target.files[0].size / 1000000).toFixed(3) +
      "MB";
    
      setfileDisplay(display);
      setfileMeta(e.target.files[0]);
      setPreviewVideo(URL.createObjectURL(e.target.files[0]));
    
    //console.log(e.target.files[0]);
  };
  const CancelUpload = () => {
    // setSelected(false);
    setfileMeta({});
    setPreviewVideo(null);
    setfileDisplay("No file currently selected for Upload");
    props.onModalClose(false);
  };
 const PostVideoHandler=(e) => {
            e.preventDefault();
          
            
          
            if (fileMeta.name === undefined) {
              alert("Select File");
              return;
            }

            const VideoMetaData = {
              previewVideo,
              ProductBrand,
              ProductType,
              Category,
              ProductPrice,
              ProductDescription,
              latitude:10,
              longitude:10,
            };
            console.log(VideoMetaData);
            props.onDisplay(VideoMetaData);
            props.onModalClose(false);
            var token = localStorage.getItem("token");
            token = token.replace(/['"]+/g, "");
            fetch("http://localhost:5000/user/infor", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization:token,
                Accept: "application/json",
              },
              
            }).then((res)=>{
               return res.json();
            }).then((data)=>{
              console.log(data);
                   fetch("http://localhost:5000/admin/products", {
                     method: "POST",
                     headers: {
                       "Content-Type": "application/json",
                       Authorization: token,
                       Accept: "application/json",
                     },
                     body: JSON.stringify({
                       link: previewVideo,
                       companyName: CompanyName+"*"+data._id,
                       email: CompanyAddress,
                       brand: ProductBrand+"*"+data.country+data.phone,
                       type: ProductType,
                       category: Category,
                       price: ProductPrice,
                       Description: ProductDescription,
                       latitude: 10,
                       longitude: 10,
                     }),
                   })
                     .then((res) => {
                       console.log(res);
                       return res.json();
                     })
                     .then((data) => {
                       console.log("login succesfully", data);
                     })
                     .catch((err) => {
                       console.log("error", err);
                     });
            })
            
          }
  return (
    <div
      onClick={() => {
        //   console.log("clicked");
        props.onModalClose(false);
      }}
      className={styles.wrapper_form}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          //   console.log("clicked2");
        }}
        className={styles.form}
      >
        <h1>New Post</h1>
        <br></br>
        <div className={styles.inputHolder}>
          <div className={styles.upload}>Upload</div>
          <input
            required
            type="file"
            style={{ display: "none" }}
            id="video"
            onChange={FileChangeHandler}
            placeholder="choose file"
          ></input>
          <input
            disabled
            className={styles.File}
            placeholder="Choose file"
          ></input>
          <label className={styles.LabelVideo} htmlFor="video">
            Browse
          </label>
        </div>
        <div className={styles.fd}>{fileDisplay}</div>

        <ReactPlayer
          className={styles.VideoPlayer}
          url={previewVideo}
          width="300px"
          controls
          height="150px"
          playing={true}
        ></ReactPlayer>
        <br />
        <form
          onSubmit={PostVideoHandler}
        >
          <div className={styles.h4}>Company Name*</div>
          <input
            value={CompanyName}
            className={styles.inputStyle}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            required
          ></input>
          <div className={styles.h4}>Email Address*</div>
          <input
            value={CompanyAddress}
            type="email"
            className={styles.inputStyle}
            onChange={(e) => {
              setCompanyAddress(e.target.value);
            }}
            required
          ></input>
          <div className={styles.h4}>Product Brand(with Model)*</div>
          <input
            value={ProductBrand}
            className={styles.inputStyle}
            onChange={(e) => {
              setProductBrand(e.target.value);
            }}
            required
          ></input>
          <div className={styles.h4}>Product Type*</div>
          <input
            value={ProductType}
            className={styles.inputStyle}
            onChange={(e) => {
              setProductType(e.target.value);
            }}
            required
          ></input>
          <div className={styles.h4}>Category*</div>
          <select
            className={styles.inputStyle}
            value={Category}
            onChange={(e) => {
              //  console.log(e.target.value);
              setCategory(e.target.value);
            }}
          >
            <option value="shirt">shirt</option>
            <option value="shoes">shoes</option>
            <option value="pants">pants</option>
          </select>
          <div className={styles.h4}>Product Price*</div>
          <input
            type="number"
            value={ProductPrice}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
            className={styles.inputStyle}
            required
          ></input>
          <div className={styles.h4}>Product Description*</div>
          <textarea
            value={ProductDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            className={styles.textInput}
          ></textarea>

          <div className={styles.Buttons}>
            <input className={styles.button_28} type="submit" value="Upload" />
            <button className={styles.button_29} onClick={CancelUpload}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostVideo;
