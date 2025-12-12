import React from "react";
import styles from "./Header.module.css";
import { AddressInfo } from "./AddressInfo";
import { PhoneInfo } from "./PhoneInfo";

interface InfoBlockProps {
  addressIcon: string;
  phoneIcon: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  addressIcon,
  phoneIcon,
}) => {
  return (
    <div className={styles.infoBlock}>
      <AddressInfo icon={addressIcon} />
      <PhoneInfo icon={phoneIcon} />
    </div>
  );
};
