import { useState, useEffect } from "react";
import styles from "./Slider.module.css";

const images = [
  "../slider/slider1.JPG",
  "../slider/slider2.JPG",
  "../slider/slider3.JPG",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className={styles.background}>
        <h1>Bubblebee`s Blog</h1>
        <h2>Travel. Discover. Learn</h2>

        <div className={styles.slider}>
          <img
            className={styles.images}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
