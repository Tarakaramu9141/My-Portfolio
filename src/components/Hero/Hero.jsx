import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm K.Taraka Ramu</h1>
        <p className={styles.description}>
        Recent graduate with a solid foundation in python and SQL, skilled in data manipulation, analysis, and visualizations. Eager to leverage technical expertise and programming skills to drive impactful projects in a dynamic, forward-thinking environment.
        </p>
        <a href="mailto:tarakaramu3893@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/boy.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
