import React from "react";
import styles from "./Header.module.css";

interface AddressInfoProps {
  icon: string;
}

export const AddressInfo: React.FC<AddressInfoProps> = ({ icon }) => {
  return (
    <div className={styles.itemBox}>
      <div className={styles.contactRow}>
        <img src={icon} alt="Адрес компании" className={styles.icon} />
        <div className={styles.meta}>
          г. Санкт Петербург, <br />
          ул. Куйбышева 31
        </div>
      </div>
    </div>
  );
};
