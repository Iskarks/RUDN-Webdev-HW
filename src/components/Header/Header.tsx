import React from "react";
import styles from "./Header.module.css";

import addressIcon from "../../assets/img/head/adreesIcon.png";
import phoneIcon from "../../assets/img/head/phoneIcon.png";

import { BrandBlock } from "./BrandBlock";
import { InfoBlock } from "./InfoBlock";

const Header: React.FC = () => {
  return (
    <header className={styles.shell}>
      <div className={styles.wrap}>
        <div className={styles.layout}>
          <BrandBlock />
          <InfoBlock addressIcon={addressIcon} phoneIcon={phoneIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
