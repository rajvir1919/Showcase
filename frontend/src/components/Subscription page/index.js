import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Subscription.module.css";
const Subscription = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.subscription}>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="blue bubble (2).png" alt="blue bubble" className={styles.blue_bubble_2} />
          </div>
          <div className="col-8">
            <div className={styles.container_1}>
              <form className="container">
                <div className="form-group">
                  <a
                    onClick={() => {
                      navigate(-1);
                    }}
                    href="#/"
                    className={`${styles.back} ${styles.a1}`}
                  >
                    <b>&lsaquo; Back</b>
                  </a>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className={`form-group ${styles.div1}`}>
                  <h3>
                    <b>Subscripition Account!</b>
                    <br />
                  </h3>
                </div>
                <div className={`form-group ${styles.div1}`}>
                  <p2>
                    For the purpose of industry regulation, your details
                    <br /> are requied.
                  </p2>
                </div>
                {/* <hr /> */}

                <div className={`form-group ${styles.div2}`}>
                  <label for="subscripition" className={styles.label3}>
                    <b>Subscripition Plans</b>
                  </label>
                  <br />
                  <select
                    id="subscripition"
                    name="subscripition"
                    className={styles.select1}
                  >
                    <option value="select">Select Per Month Plan</option>
                    <option value="#/">Silver 5$ Per Month</option>
                    <option value="#/">Gold 10$ Per Month</option>
                    <option value="#/">Platinum 15$ Per Month</option>
                  </select>
                </div>
                <div className={`form-group ${styles.div2}`}>
                  <button
                    type="submit"
                    className={styles.savebtn}
                    formAction="https://rzp.io/l/YkRpwYfJqL"
                  >
                    Continue
                  </button>
                </div>
                <div className={`form-group ${styles.div2}`}>
                  <p className={styles.p1}>
                    <i className="material-icons">lock_outline</i> Your info is
                    safely secured
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2">
            <img alt="circle" src="circle (1).png" className={styles.circle1} />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Subscription;
