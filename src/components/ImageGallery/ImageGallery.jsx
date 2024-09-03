import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import { nanoid } from "nanoid"; // Import nanoid for unique keys

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map(({ webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={nanoid()} // Use nanoid for generating unique keys
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        onClick={onImageClick}
      />
    ))}
  </ul>
);

export default ImageGallery;
