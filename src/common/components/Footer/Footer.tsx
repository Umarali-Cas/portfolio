import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <hr />
        {/* <h1>
          {"<h1>"} <span>Portfolio</span> {"</h1>"}
        </h1> */}
        <div className={styles.titleWrapper}>
          <h1 className={styles.title} data-text="<h1> Portfolio </h1>">
          {"<h1>"} <span>Portfolio</span> {"</h1>"}
          </h1>
        </div>
        <hr />
      </div>
    </footer>
  );
}
