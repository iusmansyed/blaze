import React from "react"
import styles from "./index.module.css"


import Img1 from "../../assets/images/06.webp"
import Img2 from "../../assets/images/07.webp"
import Img3 from "../../assets/images/08.webp"
import Img4 from "../../assets/images/09.webp"
import Img5 from "../../assets/images/10.webp"
import Img6 from "../../assets/images/11.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    const Images = [
        {
            id: 1,
            imgUrl: Img1
        },
        {
            id: 2,
            imgUrl: Img2
        },
        {
            id: 3,
            imgUrl: Img3
        },
        {
            id: 4,
            imgUrl: Img4
        },
        {
            id: 5,
            imgUrl: Img5
        },
        {
            id: 6,
            imgUrl: Img6
        },

    ]
    AOS.init();

    return (
        <>
            <section className={styles.Projects}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className={styles.Project_heading}>
                                <h1>our projects</h1>
                            </div>
                        </div>

                        {Images.map((i, j) => {
                            console.log(i)
                            return (
                                <div key={j}>
                                    <div className="col-lg-2 mt-3" data-aos="fade-right"
                                        data-aos-duration="1500">
                                        <img src={i.imgUrl} alt="no image" className={styles.images} /></div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects