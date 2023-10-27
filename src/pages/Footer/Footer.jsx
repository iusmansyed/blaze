import React from "react"
import styles from "./footer.module.css"
import Logo from "../../assets/images/Blaze-Interactives-Logo-02.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    AOS.init();
    return (
        <>
            <section className={styles.Footer}
               >
                <div className="container" data-aos="fade-up"  data-aos-duration="1500">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className={styles.logo}>
                                    <img src={Logo} alt="" width={"150px"} />
                                </div>
                                <div className={styles.text}>
                                    <a href="https://www.google.com/maps?q=24.8329989,67.0735916&z=17&hl=en " target="_blank">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <p>Defence Phase 2 - Karachi</p>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.ending}>Copyright © 2022 - All Rights Reserved - <span style={{color:"red"}}>Blaze Interactive</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer