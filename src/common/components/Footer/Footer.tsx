import { getTranslations } from "next-intl/server";
import styles from "./Footer.module.scss";

export default async function Footer() {

  const t = await getTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <hr />
        <div className={styles.titleWrapper}>
          <h1 className={styles.title} data-text={`<h1> ${t("title")} </h1>`}>
          {"<h1>"} <span>{t("title")}</span> {"</h1>"}
          </h1>
        </div>
        <hr />
      </div>
      <p>{t("desc")}</p>
    </footer>
  );
}
