"use client";

import styles from './Scroll.module.scss'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export function Scroll() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles.line_container} ref={ref}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={styles.animated_line}
      />
    </div>
  );
}
