import React,{useEffect} from "react";

import "./App.css";


import FreeAccount from "./Components/FreeAccount";
import HIW from "./Components/HIW";
import HappyShowCase from "./Components/HappyShowCase";
import Display from "./Components/Display";
import LetShowCase from "./Components/LetShowCase";

import MainPage from "./Components/MainPage";
const Landing = () => {
  
  return (
    <>
      
      
      <LetShowCase />
      <MainPage />
      <HappyShowCase />
      <Display />
      <HIW />
      <FreeAccount />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
