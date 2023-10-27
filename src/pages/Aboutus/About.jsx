import React from "react";
import styles from "./About.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    AOS.init();
    return (
        <>
            <section className={styles.about}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" >
                            
                            <h1>about us</h1>
                            <h2 data-aos="fade-right" data-aos-duration="2500">
                                Our Vision is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become an entity in technology based corporate solutions, capable of demanding unconditional response from the targeted niche. We also believe that for our scope of improvisation – sky is the limit and we are always ready to take our achievements to the next level. We are growing and would always like to remain on the growing streak.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;