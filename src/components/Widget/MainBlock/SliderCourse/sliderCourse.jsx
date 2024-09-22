import React, { useState } from "react";
import styles from "./sliderCourse.module.scss";
import banner1 from "../../../../assets/banner1.png";
import banner2 from "../../../../assets/banner2.png";
import banner3 from "../../../../assets/banner3.png";

// const images = [{ banner1 }, { banner2 }, { banner3 }];

const images = [
    // "../../../../assets/banner1.png",
    // "../../../../assets/banner2.png",
    // "../../../../assets/banner3.png",
    banner1,
    banner2,
    banner3,
];

const SliderCourse = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className={styles.slider}>
            <button onClick={prevSlide} className={styles.leftArrow}>
                ❮
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={styles.slide}
            />
            <button onClick={nextSlide} className={styles.rightArrow}>
                ❯
            </button>
        </div>
    );
};

export default SliderCourse;
