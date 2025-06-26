"use client";

import { HeroCard } from "@/common/ui/HeroCard";
import styles from "./Hero.module.scss";
import Image from "next/image";
import telegram from "#/icons/telegram.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.titleWrapper}>
        <h1 className={styles.title} data-text="Web Developer">
          Web Developer
        </h1>
      </div>
      <div className={styles.heroContainer}>
        <HeroCard />
        <div className={styles.textWrapper}>
          <div className={styles.heroTitle}>
            <span>{"<h1>"}</span>
            <h1>
              Hey <br />
              I’m <span className={styles.name}>Umarali</span> <br />
              Front-End Developer
            </h1>
            <span>{"</h1>"}</span>
          </div>
          <div className={styles.heroSubtitle}>
            <span>{"<p>"}</span>
            <p>
              I help business grow by crafting amazing web experiences. If
              you’re <br /> looking for a developer that likes to get stuff
              done,
            </p>
            <span>{"</p>"}</span>
          </div>
          <a href="https://t.me/cas_your_angel" className={styles.talk}>
            <h2>let’s talk</h2>
            <Image src={telegram} alt="mail" width={20} height={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
