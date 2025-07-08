"use client";

import { HeroCard } from "@/common/ui/HeroCard";
import styles from "./Hero.module.scss";
import Image from "next/image";
import telegram from "#/icons/telegram.svg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {

  const t = useTranslations("Hero");

  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.titleWrapper}>
        <h1 className={styles.title} data-text={t("subtitle")}>
          {t("subtitle")}
        </h1>
      </div>
      <div className={styles.heroContainer}>
        <HeroCard />
        <div className={styles.textWrapper}>
          <div className={styles.heroTitle}>
            <span>{"<h1>"}</span>
            <h1>
              <span>{t("title.h1.up")}</span>
              <span>{t("title.h1.center")} <span className={styles.name}>{t("card.name")}</span></span>
              <span className={styles.prof}>{t("subtitle")}</span>
            </h1>
            <span>{"</h1>"}</span>
          </div>
          <div className={styles.heroSubtitle}>
            <span>{"<p>"}</span>
            <p>
              {t("title.p")}
            </p>
            <span>{"</p>"}</span>
          </div>
          <a href="https://t.me/it_is_painful" className={styles.talk}>
            <h2>{t("title.talk")}</h2>
            <Image src={telegram} alt="mail" width={20} height={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
