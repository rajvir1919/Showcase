import styles from "./business.module.css";
import pic1 from "./assest/imageman.png";
import pic2 from "./assest/blue1.png";
import pic3 from "./assest/blue2.png";
import { Link, useNavigate } from "react-router-dom";

const Join_US_Business = () => {
  const navigate = useNavigate();
  const handlebus = () => {
    navigate("/business/register");
  };
  const handleind = () => {
    navigate("/personal/register");
  };
  return (
    <div className={styles.home}>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={pic2} />
            <img
              src={pic3}
              style={{ marginTop: "145px", marginLeft: "-165px" }}
            />
          </div>
          <div className="col-8">
            <div className={styles.container_1}>
              <form className="container" style={{ textAlign: "center" }}>
                <h2 style={{ paddingTop: "125px" }}>Join Us</h2>
                <p>
                  To begin this journey ,tell us what type of account <br />
                  you'd be opening
                </p>
                <div className={styles.Individual}>
                  <button onClick={handleind}>
                    <h6>
                      <b>Individual</b>
                    </h6>
                    <p>
                      Personal account to manage all you
                      <br /> activities
                    </p>
                    <i
                      className="material-icons"
                      id="person"
                      style={{ fontSize: "47px", color: "#3371f2" }}
                    >
                      person
                    </i>
                  </button>
                </div>
                <div className={styles.Business}>
                  <button onClick={handlebus}>
                    <h6>
                      <b>Business</b>
                    </h6>
                    <p>
                      Own or belong to a company, this is
                      <br />
                      for you.
                    </p>
                    <i
                      className="fa fa-suitcase"
                      id="fa-suitcase"
                      style={{ fontSize: "43px", color: "#3371f2" }}
                    />
                  </button>
                </div>
                <p>
                  Already have an account?
                  <Link style={{ color: "#3371f2" }} to="/login">
                    {" "}
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-2">
            <img src={pic1} alt="animation" style={{ marginLeft: "-175px" }} />
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};
export default Join_US_Business;
