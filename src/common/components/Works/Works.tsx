"use client";

import { MonitorSite } from "@/common/ui/MonitorSite";
import styles from "./Works.module.scss";
import { sites } from "./Works.helpers";
import { Scroll } from "@/common/ui/Scroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Works() {

  const t = useTranslations("Works")

  return (
    <motion.section
      className={styles.works}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h1 className={styles.title}>{t("title")}</h1>
      <p>{t("desc")}</p>
      <Scroll />
      <motion.div
        className={styles.works__box}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {sites.map((item, index) => (
          <Link href={item.url} key={index} className={styles.link}>
            <MonitorSite key={index} pic={item.icon} txt={item.name} />
          </Link>
        ))}
      </motion.div>
      <Scroll />
    </motion.section>
  );
}
