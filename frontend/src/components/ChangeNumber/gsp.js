import React from "react";
import styles from "./gsp.module.css";
import { useNavigate } from "react-router-dom";

const GSP = () => {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <br />
      <br />
      <form action="action_page.php" className="container" id="con">
        <div className="form-group">
          <a
            onClick={() => {
              navigate(-1);
            }}
             href="#"
            className={styles.back}
          >
            <b>‹ Back</b>
          </a>
        </div>
        <br />
        <div className="form-group">
          <input
            style={{ cursor: "pointer" }}
            onChange={() => {
              navigate("/business/profile/p1");
            }}
            type="radio"
            id="profile"
            name="password"
            defaultValue="Profile"
          />
          <label className={styles.radio}>Profile</label>
          <input
            style={{ cursor: "pointer" }}
            onChange={() => {
              navigate("/business/profile/p3");
            }}
            type="radio"
            id="Change password"
            name="password"
            defaultValue="Change password"
          />
          <label className={styles.radio}>Change password</label>
          <input
            style={{ cursor: "pointer" }}
            type="radio"
            id="gps"
            name="password"
            defaultValue="GPS"
          />
          <label className={styles.radio}>GPS</label>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="paste link address">
            <b>GPS location link</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Paste here"
            name="paste link address"
            id="paste link address"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <p>OR</p>
        </div>
        <br />
        <div className="form-group">
          <p1>
            <b>Add the following information,</b>
            <br />
            We will set it up for you
          </p1>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="address">
            <b>Your Shop Address</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Please enter complete address"
            name="address"
            id="address"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="country">
            <b>Country of residence</b>
          </label>
          <br />
          <select id="country" name="country">
            <option value="please">Please</option>
            <option value="#">India</option>
            <option value="#" />
            <option value="#" />
          </select>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="state">
            <b>State</b>
          </label>
          <br />
          <select id="state" name="state">
            <option value="please">Please</option>
            <option value="#">Andhra pradesh</option>
            <option value="#">Telangana</option>
            <option value="#">Karnataka</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="district">
            <b>District</b>
          </label>
          <br />
          <select id="district" name="district">
            <option value="please">Please</option>
            <option value="#">Anantapur</option>
            <option value="#">Ranga reddy</option>
            <option value="#">Bangalore</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="code">
            <b>Pincode</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the code"
            name="code"
            id="code"
            required
          />
          <br />
        </div>
        <br />
        <div className="form-group">
          <button type="submit" className={styles.savebtn}>
            Save
          </button>
        </div>
      </form>
      {/* <Footer/> */}
    </div>
  );
};
export default GSP;
