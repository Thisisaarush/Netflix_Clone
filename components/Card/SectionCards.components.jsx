import React from "react";
import styles from "./SectionCards.module.css";
import { Card } from "./Card.component";

export const SectionCards = ({ title, videos }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((data) => (
          <Card imgUrl={data.imgUrl} size={data.size} key={data.id} />
        ))}
      </div>
    </section>
  );
};
