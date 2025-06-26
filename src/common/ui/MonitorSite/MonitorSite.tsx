import Image, { StaticImageData } from "next/image";
import styles from "./MonitorSite.module.scss";
import mac from "#/icons/mac.svg";

type MonitorSiteProps = {
  pic: StaticImageData | string;
  txt: string;
};

export function MonitorSite({ pic, txt }: MonitorSiteProps) {
  return (
    <div className={styles.mon}>
      <Image
        className={styles.picture}
        src={pic}
        alt="pic"
        width={198}
        height={131}
      />
      <Image
        className={styles.screen}
        src={mac}
        alt="monitor"
        width={250}
        height={250}
      />
      <div className={styles.view}>
        <span className={styles.text}>View WebSite?</span>
      </div>
      <span className={styles.txt}>{txt}</span>
    </div>
  );
}
