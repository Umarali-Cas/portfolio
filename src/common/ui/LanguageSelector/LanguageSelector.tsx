"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./LanguageSelector.module.scss";

export default function LanguageSelector() {
  const [activeLang, setActiveLang] = useState("ru");
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const lang = pathname.split("/")[1] || "ru";
    setActiveLang(["ru", "en"].includes(lang) ? lang : "ru");
  }, [pathname]);

  const changeLanguage = (lang: string) => {
    if (lang === activeLang) return;

    setIsLoading(true);
    setActiveLang(lang);
    localStorage.setItem("preferred-language", lang);

    const newPath =
      pathname.startsWith("/ru") || pathname.startsWith("/en")
        ? `/${lang}${pathname.slice(3)}`
        : `/${lang}${pathname}`;

    router.push(newPath);
  };

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <span className={styles.spinner}></span>
        </div>
      )}
      <div className={styles.lang}>
        <span
          className={styles.ru}
          style={activeLang === "ru" ? { color: "#fff" } : {}}
          onClick={() => changeLanguage("ru")}
        >
          ru
        </span>
        <span
          className={styles.en}
          style={activeLang === "en" ? { color: "#fff" } : {}}
          onClick={() => changeLanguage("en")}
        >
          en
        </span>

        <div
          className={styles.bg}
          style={activeLang === "ru" ? { left: "0" } : { left: "50%" }}
        ></div>
      </div>
    </>
  );
}
