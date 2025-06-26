import styles from "./HeroCard.module.scss";
import profIcon from "#/images/Profile photo.jpg";
import download from "#/icons/download.svg";
import { icons } from "@/common/components/Hero/Hero.helpers";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function HeroCard() {

  const t = useTranslations("Hero.card");
  
  const handleDownload = () => {
    const files = [
      {
        url: "/files/CV_Umarali Omorov_Frontend(en).pdf",
        name: "CV_Umaraliomorov_Frontend(en).pdf",
      },
      {
        url: "/files/CV_Umarali Omorov_Frontend(ru).pdf",
        name: "CV_Umaraliomorov_Frontend(ru).pdf",
      },
    ];
  
    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file.url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

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
        <h2>{t("name")}</h2>
        <p>{t("profession")}</p>
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
        <button className={styles.download} onClick={handleDownload}>
         {t("button")}
          <Image
            className={styles.icon}
            src={download}
            alt="download"
            width={20}
            height={20}
          />
        </button>
    </div>
  );
}
