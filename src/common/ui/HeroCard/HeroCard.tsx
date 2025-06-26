import styles from "./HeroCard.module.scss";
import profIcon from "#/images/Profile photo.jpg";
import download from "#/icons/download.svg";
import { icons } from "@/common/components/Hero/Hero.helpers";
import Image from "next/image";

export function HeroCard() {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <Image
          className={styles.profile}
          src={profIcon}
          alt="profImg"
          width={80}
          height={80}
        />
        <h2>Umarali</h2>
        <p>Front-end Developer</p>
      </div>
      <div className={styles.links}>
        {icons.map((icon, index) => (
          <div key={index} className={styles.icon}>
            <Image src={icon.src} alt={icon.name} width={20} height={20} />
            <a href={icon.url}>{icon.name}</a>
          </div>
        ))}
        <div className={styles.skills}>
          <div className={styles.skills__title}>
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
          </div>
          <div className={styles.skills__title}>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
      <a
        className={styles.down}
        href="/files/CV_Umarali Omorov_Frontend(en).pdf"
        download="CV_Umaraliomorov_Frontend(en).pdf"
      >
        <button className={styles.download}>
          Download CV
          <Image
            className={styles.icon}
            src={download}
            alt="download"
            width={20}
            height={20}
          />
        </button>
      </a>
    </div>
  );
}
