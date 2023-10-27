import React from "react"
import styles from "./index.module.css"
import Logo from "../../assets/images/Blaze.png"
import Link from "react-router-dom"
const Header = () => {
    return (
        <>
            <section className={styles.header}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.topHead}>
                                <div className="logo-sec"><img src={Logo} alt="logo-img" width={"180px"} /></div>
                                <div className={styles.contact_sec}>
                                    <div className={styles.call}>
                                        <i class="fa-solid fa-phone"></i>
                                        <span>+92 0000 00000</span>
                                    </div>
                                    <div className={styles.chat}>
                                       
                                        <i class="fa-solid fa-message"></i>
                                        <span>example@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header