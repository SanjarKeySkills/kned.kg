import React, { useState, useRef } from "react";

import styles from "./sliderCourse.module.scss";
import bannerAnnoncement1 from "../../../../assets/bannerAnnoncement_kd.png";
import bannerAnnoncement2 from "../../../../assets/bannerAnnoncement_ks.png";
import bannerAnnoncement1_respocive from "../../../../assets/course_banners/banner_course_kd.png";
import bannerAnnoncement2_respocive from "../../../../assets/course_banners/banner_course_ks.png";

// window.innerWidth - определяет размер окна и условно рендерить нужное изображение в компоненте.
// Использование медиазапросов CSS для скрытия нужных изображений.
// условный рендеринг с использованием JavaScript.

const images = [bannerAnnoncement1, bannerAnnoncement2];
const images_responcive = [
    bannerAnnoncement1_respocive,
    bannerAnnoncement2_respocive,
];

const CourseSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            nextSlide();
        } else if (touchStartX.current - touchEndX.current < -50) {
            prevSlide();
        }
    };

    return (
        <div
            className={styles.slider}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <button onClick={prevSlide} className={styles.leftArrow}>
                ❮
            </button>

            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={styles.slide}
            />
            <img
                src={images_responcive[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={styles.slide_responcive}
            />

            <button onClick={nextSlide} className={styles.rightArrow}>
                ❯
            </button>
        </div>
    );
};

export default CourseSlider;
