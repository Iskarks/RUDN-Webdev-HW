import React from "react";
import styles from "./Footer.module.css";

const FooterLegal: React.FC = () => {
  return (
    <p className={styles.copyInfo}>
      © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
    </p>
  );
};

export default FooterLegal;
