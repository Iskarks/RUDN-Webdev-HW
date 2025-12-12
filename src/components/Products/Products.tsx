import React from "react";
import styles from "./Products.module.css";
import ProductsCard from "./ProductsCard";

const Products: React.FC = () => {
  return (
    <section className={styles.products}>
      <div className="wrap">
        <h2 className={styles.products__title}>
          Для любых событий и дорогих вам людей
        </h2>

        <ProductsCard />
      </div>
    </section>
  );
};

export default Products;
