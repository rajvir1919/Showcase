import React from "react";
import styles from "./normal_profile_1.module.css";

import { useNavigate } from "react-router-dom";

const Normal_profile_1 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Normal_profile_1}>
      {/* <nav className="navbar navbar-expand-sm ">

                
                <div className="nav-logo">
                    <a href="#/" className="navbar-brand"><img src="/asserts/img/Showcase Logo.png" alt="logo" style="width: 40px;"></a>
                </div>

                
                <div className="search-box">
                    <form action="" className="form-inline" id="searchbox">
                        <input className="form-control mr-sm-2" placeholder="search...." type="text" >
                            <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>

              
                <ul className="navbar-nav" id="navbar-ul">
                    <li className="nav-item">
                        <a href="#/" className="nav-link">All Videos</a>
                    </li>

                   
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Men</a>
                        <div className="dropdown-menu">
                            <a href="#/" className="dropdown-item">T-shirts</a>
                            <a href="#/" className="dropdown-item">Shirts</a>
                            <a href="#/" className="dropdown-item">Shoes</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Women</a>
                        <div className="dropdown-menu">
                            <a href="#/" className="dropdown-item">T-shirts</a>
                            <a href="#/" className="dropdown-item">Shirts</a>
                            <a href="#/" className="dropdown-item">Shoes</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Kids</a>
                        <div className="dropdown-menu">
                            <a href="#/" className="dropdown-item">T-shirts</a>
                            <a href="#/" className="dropdown-item">Shirts</a>
                            <a href="#/" className="dropdown-item">Shoes</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Home & Kitchen</a>
                        <div className="dropdown-menu">
                            <a href="#/" className="dropdown-item">T-shirts</a>
                            <a href="#/" className="dropdown-item">Shirts</a>
                            <a href="#/" className="dropdown-item">Shoes</a>
                        </div>
                    </li>
                </ul>


                
                <div className="nav-right">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#/" className="nav-link"><i className="material-icons">account_circle</i></a>
                        </li>
                        <li className="nav-item">
                            <a href="#/"><button className="btn btn-success" type="login" id="login-btn">Login</button></a>
                        </li>
                    </ul>
                </div>




            </nav> */}

      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className={styles.container1}>
              <form action="action_page.php" className="container" id="con">
                <div className="form-group">
                  <a onClick={()=>{
                    navigate(-1)
                  }} href="#/" className="back">
                    <b>&lsaquo; Back</b>
                  </a>
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="radio"
                    id="profile"
                    onChange={() => {
                      navigate("/personal/updateProfile");
                    }}
                    name="password"
                    value="Profile"
                  />
                  <label className={styles.radio}>Profile</label>

                  <input
                    type="radio"
                    id="Change-password"
                    name="password"
                    value="Change password"
                  />
                  <label className={styles.radio}>Change password</label>
                </div>
                <br />
                <div className="form-group">
                  <label for="psw-old" className={styles.label1}>
                    <b>Old password</b>
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="psw-old"
                    id="psw-old"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label for="psw-new" className={styles.label1}>
                    <b>New password</b>
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="psw-new"
                    id="psw-new"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label for="psw-confirm" className={styles.label1}>
                    <b>Confirm new password</b>
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="psw-confirm"
                    id="psw-cofirm"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className={styles.savebtn}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-4">
            <img
              src="image.png"
              width="550px"
              height="550px"
              className={styles.img2}
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* <Footer/> */}
    </div>
  );
};

export default Normal_profile_1;
