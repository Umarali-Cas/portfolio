"use client";

import { Scroll } from "@/common/ui/Scroll";
import styles from "./AboutMe.module.scss";
import aboutImage from "#/images/aboutMe.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <Scroll />
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.me}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.txt} data-text="About Me">
              About Me
            </h1>
          </div>
          <div className={styles.title}>
            <span>{"<p>"}</span>
            <p>
              <span className={styles.hello}>Hello!</span> <br /> My name is
              Umarali and I specialize in web developement that utilizes{" "}
              <span>HTML</span>, <span>CSS</span>, <span>JS</span>, <br /> and{" "}
              <span>REACT</span> etc. <br /> <br /> I am a highly motivated
              individual and eternal optimist dedicated to writing clear, <br />
              concise, robust code that works. Striving to never stop learning
              and improving. <br /> <br /> When I`m not coding, I am{" "}
              <span>writing bolgs</span>, reading, or picking up some new
              hands-on <br /> art project like <span>photography</span>. <br />{" "}
              <br />
              like to have my perspective and belief systems challenged so that
              I see the world <br /> through new eyes.
            </p>
            <span>{"</p>"}</span>
          </div>
        </div>
        <Image
          className={styles.image}
          src={aboutImage}
          alt="image"
          width={450}
          height={550}
        />
      </motion.div>
      <Scroll />
    </section>
  );
}
