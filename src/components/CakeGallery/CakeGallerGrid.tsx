import React from "react";
import styles from "./CakeGallery.module.css";

import img1 from "../../assets/img/gallery/gallery-cake.png";
import img2 from "../../assets/img/gallery/gallery-cakes (1).png";
import img3 from "../../assets/img/gallery/gallery-cakes (9).png";
import img4 from "../../assets/img/gallery/gallery-cakes (10).png";
import img5 from "../../assets/img/gallery/gallery-cakes (11).png";
import img6 from "../../assets/img/gallery/gallery-cakes (12).png";
import img7 from "../../assets/img/gallery/gallery-cakes (13).png";
import img8 from "../../assets/img/gallery/gallery-cakes (14).png";
import img9 from "../../assets/img/gallery/gallery-cakes (15).png";

const images: string[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9
];

const CakeGalleryGrid: React.FC = () => {
  return (
    <div className={styles.cakeGallery__grid}>
      {images.map((src, index) => (
        <figure key={index} className={styles.cakeGallery__item}>
          <img src={src} alt="Фото заказа" />
        </figure>
      ))}
    </div>
  );
};

export default CakeGalleryGrid;
