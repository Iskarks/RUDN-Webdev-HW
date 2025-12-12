import React from "react";
import styles from "./Header.module.css";

interface PhoneInfoProps {
  icon: string;
}

export const PhoneInfo: React.FC<PhoneInfoProps> = ({ icon }) => {
  return (
    <div className={styles.itemBox}>
      <img src={icon} alt="Телефон" className={styles.icon} />
      <div className={styles.telGroup}>
        <div className={styles.tel}>8 (812) 844-95-49</div>
        <div className={styles.meta}>Ежедневно с 9:00 до 20:00</div>
      </div>
    </div>
  );
};
