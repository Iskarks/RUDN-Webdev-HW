import CakeGalleryGrid from "./CakeGallerGrid";
import styles from "./CakeGallery.module.css"

const CakeGallery = () => {
  return (
    <section className={styles.cakeGallery}>
      <div className="wrap">
        <header className={styles.cakeGallery__header}>
          <h2 className={styles.cakeGallery__title}>Сделали более 3.000 заказов за 2 года</h2>
          <p className={styles.cakeGallery__description}>
            Посмотрите фото реальных заказов из нашего Instagram
          </p>
        </header>

        <CakeGalleryGrid />
      </div>
    </section>
  );
};

export default CakeGallery;
