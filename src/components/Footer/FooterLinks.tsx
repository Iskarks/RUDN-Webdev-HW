import React from "react";
import styles from "./Footer.module.css";

const FooterLinks: React.FC = () => {
  const links = [
    "Согласие на обработку данных",
    "Служба поддержки",
    "Политика конфиденциальности",
  ];

  return (
    <ul className={styles.linksList}>
      {links.map((text, idx) => (
        <li key={idx}>
          <a href="#" className={styles.link}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
