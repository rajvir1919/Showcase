import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Section from "./Components/Section";
import PostVideo from "./Components/PostVideo";
import Videos from "./Components/Videos";
import PreviewVideo from "./Components/PreviewVideo";
import MapModal from "./Components/MapModal";
const App = () => {
  const navigate = useNavigate();
  const [ModalClose, setModalClose] = useState(false);
  const [displayVideos, setdisplayVideos] = useState([]);
  const [ProductInfo, setProductInfo] = useState(false);
  const [closeGps, setCloseGps] = useState(false);
  const [data1, setData] = useState();
  const VideoDetails = (data) => {
    setdisplayVideos((prev) => [...prev, data]);
  };
  const FetchVideoDetails = (data) => {
    console.log(data,"hihi");
    setData(data);
  };
    useEffect(() => {
      console.log("ck1");
      let token = localStorage.getItem("token");
      if (token !== undefined && token !== null) {
        token = token.replace(/['"]+/g, "");
      }

      console.log(token);
      fetch("http://localhost:5000/user/infor", {
        method: "GET",
        headers: {
          Authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          const role = data.role;
          console.log(data);
          console.log(role,"role");
          if (role !== 0) {
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  return (
    <>
      {closeGps && <MapModal onGps={setCloseGps} />}

      <Section
        onGps={setCloseGps}
        TotalVids={displayVideos.length}
        onModalClose={setModalClose}
      />
      {ModalClose && (
        <PostVideo onDisplay={VideoDetails} onModalClose={setModalClose} />
      )}
      <Videos
        onFetch={FetchVideoDetails}
        onPreviewModal={setProductInfo}
        VideoDetails={displayVideos}
      ></Videos>
      {ProductInfo && (
        <PreviewVideo
          onGps={setCloseGps}
          Data={data1}
          onPreviewModal={setProductInfo}
        />
      )}
    </>
  );
};

export default App;
