"use client";

import { Scroll } from "@/common/ui/Scroll";
import styles from "./AboutMe.module.scss";
import aboutImage from "#/images/aboutMe.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("AboutMe");

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
            <h1 className={styles.txt} data-text={t("title")}>
              {t("title")}
            </h1>
          </div>
          <div className={styles.title}>
            <span>{"<p>"}</span>
            <p>
              <span className={styles.hello}>{t("hello")}</span> <br /> <br />
              {t("one")} <span>{t("skills")}</span> <br />
              {t("and")}
              <span>{t("react")}</span>
              {t("etc")} <br /> <br />
              {t("description")} <br /> <br />
              {t("hobby")} <span>{t("hobbySkills")}</span>
              {t("hobbySkills2")} <span>{t("hobbySkills3")}</span> <br /> <br />
              {t("perspective")}
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
