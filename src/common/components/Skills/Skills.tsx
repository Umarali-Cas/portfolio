"use client";

import styles from "./Skills.module.scss";
import { mySkill } from "./Skills.helpers";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Skills() {

  const t = useTranslations("Skills");

  return (
    <section className={styles.skills}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className={styles.titleWrapper}>
          <h1 className={styles.title} data-text="</>">
            {"</>"}
          </h1>
          <h1 className={styles.title} data-text="Skills">
            {t("title")}
          </h1>
          <p>{t("desc")}</p>
        </div>

        <motion.div
          className={styles.skills__box}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {mySkill.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <Link href={skill.to} target="_blank">
                <div
                  className={styles.imageWrapper}
                  style={{ backgroundColor: skill.col }}
                >
                  <Image
                    className={styles.image}
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
              <span style={{ color: skill.col }}>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
