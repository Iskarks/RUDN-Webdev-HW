import React from "react";
import styles from "./Header.module.css";

export const BrandBlock: React.FC = () => {
  return (
    <div className={styles.brandBlock}>
      <div className={styles.brandText}>
        <div className={styles.brandTitle}>Сладкий сундук</div>
      </div>
    </div>
  );
};
