import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.section}>
          <FooterLinks />
          <FooterLegal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
