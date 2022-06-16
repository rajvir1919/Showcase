import React from "react"
import styles from "./footer.module.css"

const Footer=()=>{

    return (
      <div>
        <footer className={`${styles.new_footer_area} bg_color `}>
          <div className={styles.new_footer_top}>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div
                    className={`f_widget ${styles.company_widget} wow fadeInLeft`}
                    data-wow-delay="0.2s"
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      Get in Touch
                    </h3>

                    <form
                      action="#/"
                      className="f_subscribe_two mailchimp"
                      method="post"
                      noValidate={true}
                      _lpchecked="1"
                    >
                      <input
                        type="text"
                        name="EMAIL"
                        className="form-control memail"
                        placeholder="Email"
                      />
                      <button className={`btn btn_get ${styles.btn_get_two}`} type="submit">
                        Subscribe
                      </button>
                      <p className="mchimp-errmessage"></p>
                      <p className="mchimp-sucmessage"></p>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget about-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                    <ul className="list-unstyled f_list">
                      <li>
                        <a href="#/" className="col-bl">
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a href="#/">Term &amp; conditions</a>
                      </li>
                      <li>
                        <a href="#/">Reporting</a>
                      </li>
                      <li>
                        <a href="#/">Documentation</a>
                      </li>
                      <li>
                        <a href="#/">Support Policy</a>
                      </li>
                      <li>
                        <a href="#/">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget social-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.8s"
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      Team Solutions
                    </h3>
                    <div className={styles.f_social_icon}>
                      <a href="#/" >
                        <i style={{cursor:"pointer",color:"blue"}} class="fa fa-facebook-square" aria-hidden="true"></i>
                      </a>
                      <a href="#/" >  
                        <i style={{ cursor: "pointer", color: "blue" }} class="fa fa-twitter" aria-hidden="true" />
                      </a>
                      <a href="#/" >
                        <i style={{ cursor: "pointer", color: "blue" }} class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                      <a href="#/" >
                        <i style={{ cursor: "pointer", color: "blue" }} class="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer_bg}>
              <div className={styles.footer_bg_one}></div>
              <div className={styles.footer_bg_two}></div>
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <p className="mb-0 f_400">showcase All rights reserved.</p>
                </div>
                <div className="col-lg-6 col-sm-5 text-right">
                  <p>
                    Made with <i className="icon_heart"></i> in{" "}
                    <a href="#/">local stores</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );

}

export default Footer