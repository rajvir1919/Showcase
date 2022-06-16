import React, { useState, useEffect } from "react";
import "../App.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Saly39 from "../Images/Saly-39.jpg";
import LC from "../Images/left-circle.png";
import RC from "../Images/right-circle.png";
import test2 from "../fall.mp4";
import test3 from "../t3.mp4";
import test4 from "../test4.mp4";
import test5 from "../test5.mp4";
import { Snackbar, Alert, Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from "@mui/icons-material/Done";
const a = [test2, test3, test4, test5];
const MainPage = () => {
  const [ErrorMessage, setErrorMessage] = useState("");
  const [savebtn, setSavebtn] = useState("block");
  const [open, setOpen] = useState(false);
  const [ic, setIc] = useState();
  const [sv, setSv] = useState();
  const [slider, setSlider] = useState(0);
  const [Vids, setVids] = useState([]);
  const [ac, setac] = useState("accordion");
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      token = token.replace(/['"]+/g, "");
      fetch("http://localhost:5000/user/infor", {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.role == 1) {
            setSavebtn("none");
          } else {
            setSavebtn("block");
          }
        });
    } else {
      setSavebtn("none");
    }
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/admin/products")
      .then((res) => res.json())
      .then((data) => {
        let a = [];
        data.products.map((data) => {
          a.push(data);
        });
        console.log(data, "op2");
        setVids(a);
      });
  }, []);
  const SavedHandler = async () => {
    let token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      token = token.replace(/['"]+/g, "");

      try {
        const a = await fetch("http://localhost:5000/user/infor", {
          method: "GET",
          headers: {
            Authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const b = await a.json();

        const user_id = b._id;
        //    console.log(Vids[slider],slider);
        console.log(b, "b1");
        const ps = await fetch("http://localhost:5000/user/saved", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            videoId: user_id,
            productId: Vids[slider]._id,
            VideoLink: Vids[slider].link,
          }),
        });
        // console.log(ps);
        const c = await ps.json();
        console.log(c);
        if (c.message == 0) {
          setOpen(true);
          setSv("error");
          setIc(<ErrorIcon />);
          setErrorMessage("Video Already Saved");
        } else {
          setOpen(true);
          setSv("success");
          setIc(<DoneIcon />);
          setErrorMessage("Video Saved Successfully");
        }
      } catch (err) {
        console.log(err);
        alert("Error");
      }
    } else {
      console.log("not logged in");
      setOpen(true);
      setErrorMessage("Please Login to save");
    }
  };
  return (
    <>
      <div className="Wrapper_vc">
        <div
          onClick={() => {
            setac((prev) => {
              if (prev === "accordion") {
                return "accordionOpen";
              } else {
                return "accordion";
              }
            });
          }}
          className="Video_container"
        >
          {/* addd accordion */}
          <video
            style={{ cursor: "pointer", borderRadius: "20px" }}
            autoPlay
            controls
            src={Vids[slider] === undefined ? " " : Vids[slider].link}
            muted={true}
            loop
            height="100%"
            width="100%"
          ></video>
          <div className="LeftBar">
            <KeyboardArrowLeftIcon
              onClick={(e) => {
                e.stopPropagation();
                console.log(slider);
                setSlider((prev) => (prev - 1 + Vids.length) % Vids.length);
                setac("accordion");
              }}
              style={{ width: "60px", height: "60px", cursor: "pointer" }}
            />
          </div>
          <div className="RightBar">
            <KeyboardArrowRightIcon
              onClick={(e) => {
                console.log(slider);
                e.stopPropagation();
                setSlider((prev) => (prev + 1) % Vids.length);
                setac("accordion");
              }}
              style={{ width: "60px", height: "60px", cursor: "pointer" }}
            />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={ac}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>
                  {Vids[slider] == undefined
                    ? " "
                    : Vids[slider].companyName.split("*")[0]}
                </div>
                <h1>
                  {Vids[slider] == undefined
                    ? " "
                    : Vids[slider].brand.split("*")[0]}
                </h1>
              </div>
              <div style={{ padding: "5px", backgroundColor: "white" }}>
                {Vids[slider] == undefined ? " " : Vids[slider].price}
              </div>
            </div>
            <div>
              <div className="accordionPara">
                {Vids[slider] == undefined ? " " : Vids[slider].Description}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={() => {
                  if(Vids==undefined)
                  {
                           alert("Some Technical Erorr")
                  }
                  else{
                  window.open(`https://wa.me/${Vids[slider].brand.split("*")[1]}`);
                  }
                }}
                style={{
                  height: "45px",
                  width: "100px",
                  backgroundColor: "white",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Whatsapp
              </button>
              <button
                style={{
                  height: "45px",
                  width: "100px",
                  backgroundColor: "white",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                GPS
              </button>
              <button
                onClick={SavedHandler}
                style={{
                  height: "45px",
                  width: "100px",
                  backgroundColor: "white",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                  display: savebtn,
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <svg
            width="305"
            height="633"
            viewBox="0 0 305 633"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.46"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M286.512 222.02C346.852 378.729 248.398 545.01 91.6885 605.35C-71.4513 668.166 -268.907 623.207 -331.723 460.067C-399.362 284.399 -309.083 88.3708 -133.415 20.7311C36.2975 -44.6155 221.166 52.3071 286.512 222.02Z"
              fill="#3371F2"
            />
          </svg>
          <img src={LC} alt="circle" className="img-fluid img-pos" />
          <img src={RC} alt="ellipse" className="ellipse d-none d-lg-block" />
          <svg width="1440" height="700">
            <circle cx="250" cy="230" r="314" fill="#3371F2" />
            <circle cx="-200" cy="-500" r="314" fill="#EEEEEE" />
          </svg>
        </div>

        <a href="#">
          <img src={Saly39} alt="img2" className="img-fluid img2" />
        </a>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          sx={{
            fontSize: "1rem",
            width: "500px",
            color: "white",
          }}
          onClose={() => {
            setOpen(false);
          }}
          icon={ic}
          severity={sv}
          variant="filled"
        >
          {ErrorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default MainPage;
