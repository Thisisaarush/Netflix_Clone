import React, { useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";

export const Card = ({ imgUrl = "/banner.jpg", size = "medium" }) => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    setImgSrc("/banner.jpg");
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ scaleY: 1.1 }}
      >
        <Image
          src={imgSrc}
          alt="cover"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};
