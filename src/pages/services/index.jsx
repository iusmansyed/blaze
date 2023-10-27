import React from "react";
import styles from "./index.module.css"
const Services = () => {
    const data = [
        {
            id: 1,
            icon: "fa-brands fa-connectdevelop",
            heading: "Web Development",
            text: "Our website development company works with clients based all over Pakistan and worldwide. A website is the central tool for the visibility of a business on the Internet. An effective website will not only strengthen the attraction, but also the acquisition and retention of new customers. If you have the ambition to accelerate your growth and increase your income."
        },
        {
            id: 2,
            icon: "fa-solid fa-mobile",
            heading: "Mobile Apps",
            text: "To improve your digital strategy and benefit from all the advantages of the mobile digital age, the mobile application allows you to open new distribution channels for your business. A dedicated application makes it possible to improve the visibility of brands, build customer loyalty, promote, locate products and services or even improve your company's business processes."
        },
        {
            id: 3,
            icon: "fa-brands fa-app-store-ios",
            heading: "IOS Apps",
            text: "A large community is using iphones in the world. We Design & Develop native iOS applications that dynamically adapt multiple screen sizes of iPhone & iPad. We will surely build your application which can compete at international level to get the ball rolling for your organization. The App Store is a platform provided by apple for distributing apps by developers to users."
        },
        {
            id: 4,
            icon: "fa-brands fa-android",
            heading: "Android Apps",
            text: "Our website development company works with clients based all over Pakistan and worldwide. A website is the central tool for the visibility of a business on the Internet. An effective website will not only strengthen the attraction, but also the acquisition and retention of new customers. If you have the ambition to accelerate your growth and increase your income."
        },
        {
            id: 5,
            icon: "fa-solid fa-mobile",
            heading: "Graphic Designing",
            text: "A visual identity that will allow you to stand out, attract attention and shine in your own way in an already very popular market. An identity that generates results that exceed expectations. For this, we believes that design, in addition to its aesthetic role, must above all be at the service of functionality."
        },
        {
            id: 6,
            icon: "fa-brands fa-app-store-ios",
            heading: "Software",
            text: "We design and develop elegant and functional solutions using Ruby on Rails, React, Node.js, Angular and more. We deliver apps essentials at your finger tips.Functional, flawless and easy to use. We are RoR experts, but building great products would not be possible without strong expertiese and extensive usage of many other technologies, e.g. Nginx, React/Angular,PostgreSQL, Redis, Redshift, AWS, Heroku and many others."
        },
    ]
    return (
        <>
            <section className={styles.services}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-heading">
                                <h1>our services</h1>
                            </div>
                        </div>
                        {data.map((item, index) => (
                            <div className="col-lg-4">
                                <div className={styles.description} key={index} data-aos="fade-down"
                                    data-aos-duration="1500">
                                    <h1><i className={item.icon}></i></h1>
                                    <h3>{item.heading}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>
            </section>
        </>
    )
}
export default Services