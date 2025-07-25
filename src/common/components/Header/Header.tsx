import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./Header.module.scss";
import { icons } from "./Header.helpers";
import Link from "next/link";

const LanguageSelector = dynamic(() => import("@/common/ui/LanguageSelector/LanguageSelector"));

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <p>
            {"<C/>"} <span>Front-end</span>
          </p>
        </div>
        <div className={styles.navBar}>
          <div className={styles.icons}>
            
          {icons.map((icon, index) => (
            <Link href={icon.url} key={index} className={styles.icon}>
              <Image src={icon.src} alt={icon.name} width={20} height={20} />
              <p>{icon.name}</p>
            </Link>
          ))}
          </div>
        <LanguageSelector/>
        </div>
      </div>
    </header>
  );
}
