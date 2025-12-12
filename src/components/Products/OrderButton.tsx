import React, { useState } from "react";
import OrderCounter from "./OrderCounter";
import styles from "./Products.module.css";

interface OrderButtonProps {
  price: number;
}

const OrderButton: React.FC<OrderButtonProps> = ({ price }) => {
  const [count, setCount] = useState(0);

  if (count > 0) {
    return (
      <OrderCounter
        count={count}
        setCount={setCount}
        price={price}
      />
    );
  }

  return (
    <button
      className={styles.products__button}
      onClick={() => setCount(1)}
    >
      Заказать
    </button>
  );
};

export default OrderButton;
