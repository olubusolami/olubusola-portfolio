import React from "react";
import styles from "../../styles/Home.module.css";
import { data } from "../../data";

const tools = data.map((datum, id) => {
  return <span key={id}>{datum.tool}</span>;
});

const About = () => {
  return (
    <div>
      <section className={styles.about} id="about">
        <div className={styles.glass}>
          <h1>About me</h1>
          <div className={styles.aboutDetails}>
            <div className={styles.aboutText}>
              <p>
                I am a backend developer based in Lagos, Nigeria with experience
                working in various teams of developers employing diverse tools,
                modern frontend and backend technologies, and best practices to
                build performant and accessible web interfaces on complex
                applications.
                <br />
                <br />I am responsible for writing the web services and APIs
                used by front-end developers and mobile app developers. I love
                learning new things and taking up new challenges. When I am not
                coding, I am listening to music or reading up new things.
              </p>
            </div>
            <div className={styles.techStack}>
              <h1>Tools and Technologies</h1>
              <div className={styles.tools}>{tools}</div>
              <div className={styles.cv}>
                <a
                  href="https://drive.google.com/file/d/1asO1IaCEVsuFj6YszOnrylX0qoaHaGnU/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
