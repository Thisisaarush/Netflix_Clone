import React from "react";
import styles from "./SectionCards.module.css";
import { Card } from "./Card.component";

export const SectionCards = ({ title }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl="/banner.jpg" size="large" />
      </div>
    </section>
  );
};
