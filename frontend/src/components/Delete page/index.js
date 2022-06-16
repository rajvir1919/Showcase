import React from "react"
import styles from "./delete.module.css"

const Delete=()=>{
    return(
        <div>
            <div className="container">
                <form action="action_page.php" className="container" id="con">
                    <div className="form-group">
                    <button className={styles.btn}><i className="fa fa-close"></i></button>
                </div>
                    <div className="form-group">
                    <h1>Do you want to Delete this video?</h1>
                </div>
                    <div className="form-group">
                    <button type="submit" className={styles.yesbtn}>Yes</button>
                    <button type="submit" className={styles.nobtn}>No</button>
                </div>
            </form>
        </div>

        <br />
        <br />
        <br />
        <br />

        {/* <Footer /> */}

        </div>
    )
}

export default Delete