import React from "react";
import styles from "./Products.module.css";
import OrderButton from "./OrderButton";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  alt,
}) => {
  const numericPrice = parseInt(price.replace(/\D/g, ""), 10);

  return (
    <div className={styles.products__card}>
      <div className={styles.products__image}>
        <img src={image} alt={alt} />
      </div>

      <div className={styles.products__info}>
        <h3 className={styles.products__name}>{name}</h3>
        <p className={styles.products__description}>{description}</p>

        <div className={styles.products__footer}>
          <span className={styles.products__price}>{price}</span>

          <OrderButton price={numericPrice} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
