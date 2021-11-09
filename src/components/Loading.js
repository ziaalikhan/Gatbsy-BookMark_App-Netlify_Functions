import React from "react";
import * as styles from "../pages/main.module.css";

export default function Loading() {
  return (
    <div className={styles.loader_Container}>
      <div className={styles.loader}></div>
    </div>
  );
}
