import React from "react";
import styles from "./Products.module.css";
import ProductCard from "./ProductCard";

import cake1 from "../../assets/img/cakes/cakes1.png";
import cake2 from "../../assets/img/cakes/cakes2.png";
import cake3 from "../../assets/img/cakes/cakes3.png";
import cake4 from "../../assets/img/cakes/cakes4.png";
import cake5 from "../../assets/img/cakes/cakes5.png";
import cake6 from "../../assets/img/cakes/cakes6.png";
import cake7 from "../../assets/img/cakes/cakes7.png";
import cake8 from "../../assets/img/cakes/cakes8.png";
import cake9 from "../../assets/img/cakes/cakes9.png";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  { id: 1, name: "Кремовый замок", description: "Нежный крем любого цвета на выбор, ванильная основа", price: "150 ₽/шт.", image: cake1, alt: "Кремовый замок" },
  { id: 2, name: "Малиновый рай", description: "Воздушный крем, темная основа и ягода малины", price: "150 ₽/шт.", image: cake2, alt: "Малиновый рай" },
  { id: 3, name: "Фейерверк", description: "Разноцветный крем, с бисквитной основой", price: "150 ₽/шт.", image: cake3, alt: "Фейерверк" },
  { id: 4, name: "Мыс безумия", description: "Разноцветная основа, стружка и нежный крем", price: "150 ₽/шт.", image: cake4, alt: "Мыс безумия" },
  { id: 5, name: "Шоколадный мир", description: "Ореховая стружка, нежный крем и шоколадная основа", price: "150 ₽/шт.", image: cake5, alt: "Шоколадный мир" },
  { id: 6, name: "Слезы дракона", description: "Нежный крем любого цвета на выбор, вафельная основа", price: "150 ₽/шт.", image: cake6, alt: "Слезы дракона" },
  { id: 7, name: "Летняя фантазия", description: "Украшения в форме сердец, для любимого человека", price: "150 ₽/шт.", image: cake7, alt: "Летняя фантазия" },
  { id: 8, name: "Облачная сказка", description: "Светлая основа, нежный крем со стружкой сверху", price: "150 ₽/шт.", image: cake8, alt: "Облачная сказка" },
  { id: 9, name: "Темный рыцарь", description: "Темная основа, нежный крем и вкусные шарики", price: "150 ₽/шт.", image: cake9, alt: "Темный рыцарь" },
];

const ProductsCard: React.FC = () => {
  return (
    <div className={styles.products__grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          alt={product.alt}
        />
      ))}
    </div>
  );
};

export default ProductsCard;
