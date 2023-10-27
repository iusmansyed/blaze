import React from 'react';
// import Header from '../../Components/header';
import styles from "./index.module.css"
import Logo from "../../assets/images/Blaze-Interactives-Logo-02.png"
import Logo1 from "../../assets/images/blaze.webp"
// import Video from "../../assets/images/video.mp4"
import Video from "../../assets/images/video.gif"
import Header from '../../Components/header';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    AOS.init();
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
            <section className={styles.mainDiv}>

                <div className={styles.background_video_container}>
                    <div className={styles.video}>
                        <img src={Video} alt="gif" />
                    </div>
                    <div className={styles.content}>
                        {/* Your other content goes here */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-9" data-aos="fade-right"
                                    data-aos-duration="1500" >
                                    <div className={styles.heads}>
                                        <h3>There’s A Fine Line Between Perfectionism And Obsession. We Don’t See It</h3>
                                        <h1>PERFECTIONISM VS OBSESSION</h1>
                                    </div>
                                    <div className={styles.btns}>
                                        <div className={styles.contact_btn}>
                                            <button type="button" data-toggle="modal" data-target="#exampleModal">contact us</button>
                                        </div>
                                        <div className={styles.mail}>
                                            <button>mail us</button>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-5 offset-md-1" data-aos="fade-left"
                                    data-aos-duration="1500" >
                                    <img src={Logo} alt="" width={400} className={styles.imglogo} />
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;