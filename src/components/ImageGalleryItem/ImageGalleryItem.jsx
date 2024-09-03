import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <li
    className={styles.galleryItem}
    onClick={() => onClick(largeImageURL, tags)}
  >
    <img src={webformatURL} alt={tags} className={styles.image} />
  </li>
);

export default ImageGalleryItem;
