import React from "react";
import styles from "./rpea.module.css";
import { useNavigate } from "react-router-dom";

const Reset_password_by_email_address = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.reset_password_by_email_address}>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="circle (2).png"
              width="200px"
              height="200px"
              className={styles.circle2}
            />
          </div>
          <div className="col-8">
            <div className={styles.container_1}>
              <form action="action_page.php" className="container">
                <div className="form-group">
                  <a onClick={()=>{
                    navigate(-1)
                  }} href="#/" className={`${styles.back} ${styles.a1}`}>
                    <b>&lsaquo; Back</b>
                  </a>
                </div>
                <br />
                <div className={`form-group ${styles.div1}`}>
                  <p>STEP 01/02</p>
                  <br />

                  {/* <p>
                    <b>Reset password.</b>
                  </p> */}
                </div>
                {/* <br />
                <br />
                <br />
                <div className={`form-group ${styles.div2}`}>
                  <h3>
                    <b>
                      Reset Password by <br />
                      Phone Number!
                    </b>
                    <br />
                  </h3>
                </div> */}
                {/* <div className={`form-group ${styles.div2}`}>
                  <p>
                    For the purpose of industry regulation, your details
                    <br /> are requied.
                  </p>
                </div> */}

            

                <br />
                <br />
                <br />
                <div className={`form-group ${styles.div2}`}>
                  <h3>
                    <b>
                      Reset Password by <br />
                      Phone Number!
                    </b>
                    <br />
                  </h3>
                </div>
                <div className={`form-group ${styles.div2}`}>
                  <p2>
                    For the purpose of industry regulation, your details
                    <br /> are requied.
                  </p2>
                </div>

                <div  className={`form-group ${styles.div1}`}>
                  <label for="email" className={styles.label1}>
                    <b>Phone Number</b>
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder="Enter Registered Phone Number"
                    name="email"
                    id="email"
                    required
                  />
                  <br />
                </div>

                {/* <div className={`form-group ${styles.div1}`}>
                  <label for="email" className={styles.label1}>
                    <b>Email address</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter email address"
                    name="email"
                    id={styles.email}
                    required
                  />
                  <br />
                </div> */}

                <div className={`form-group ${styles.div1}`}>
                  <button type="submit" className={styles.submitbtn}>
                    Submit
                  </button>
                </div>
                <div className={`form-group ${styles.div1}`}>
                  <p className={styles.p1}>
                    {" "}
                    <i className="material-icons">lock_outline</i> Your info is
                    safely secured
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2">
            <img src="circle (1).png" className={styles.circle1} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Reset_password_by_email_address;
