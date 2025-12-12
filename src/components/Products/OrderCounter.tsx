import React from "react";
import styles from "./Products.module.css";

interface OrderCounterProps {
  count: number;
  setCount: (value: number) => void;
  price: number;
}

const OrderCounter: React.FC<OrderCounterProps> = ({
  count,
  setCount,
  price,
}) => {
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  const total = price * count;

  return (
    <div className={styles.orderCounter}>
      <button className={styles.counterBtn} onClick={decrease}>
        –
      </button>

      <span className={styles.counterValue}>{count}</span>

      <button className={styles.counterBtn} onClick={increase}>
        +
      </button>

      <span className={styles.totalPrice}>{total} ₽</span>
    </div>
  );
};

export default OrderCounter;
