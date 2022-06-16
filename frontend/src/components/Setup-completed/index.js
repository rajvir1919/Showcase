import React from "react"
import styles from "./setup.module.css"
import Footer from "../Footer"
import {Link} from "react-router-dom"
const Setup_completed=()=>{
    return(
        <div className={styles.Setup_completed}>
 

    
    <div className="container">
        <div className="row">
            <div className="col-4">
                <img src="/image 1181 (1).png" alt = "img" className={styles.image1181} />
            </div>
            <div className="col-8">
                <div className={styles.container_1}>
                    <form action="action_page.php" className="container">
                        <div className={`form-group ${styles.div1}`}>
                        <i className={`material-icons ${styles.iclass}`}>check_circle</i>
                        <h3><b>Account set up completed</b></h3>
                    
                        <p1>You can always change the type of account you have created</p1><br />
                    
                        <p2>Business account to normal account, normal account to business</p2>
                        </div><br />
                        <div className={`form-group ${styles.div1}`}>
                            <Link to="/"><button type="submit" className={styles.profilebtn}>Take me to profile</button></Link>
                       </div>
                    
                    
                    </form> 
                </div>
            </div>
        </div>
    </div>

    <br />
    <br />
    <br />
    <br />

    {/* <Footer /> */}
        </div>
    )
}

export default Setup_completed