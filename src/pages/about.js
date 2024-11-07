import React from 'react';
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h2>About Us</h2>
        <p>
          We are a forward-thinking, innovative company committed to offering creative solutions to everyday problems. Our team consists of dedicated professionals who strive to deliver the best user experience and satisfaction. With our combined experience, we provide cutting-edge solutions tailored to meet the specific needs of our clients.
          Our approach is rooted in efficiency, creativity, and a strong commitment to quality. We focus on achieving results that are not only impactful but also sustainable. Every product and service we offer is designed with the user in mind, ensuring that we create value at every step. Our team is passionate about continuous improvement and always looking for new ways to serve our clients better.
        </p>
      </div>
    </div>
  );
};

export default About;
