import React, { useState, useRef } from "react";
import styles from "./partnersSlider.module.scss";
import partnersSlide1 from "../../../UI/ImgSliderPartners/ImgSlide1/ImgSlide1.jsx";
import partnersSlide2 from "../../../UI/ImgSliderPartners/ImgSlide2/ImgSlide2.jsx";
import partnersSlide3 from "../../../UI/ImgSliderPartners/ImgSlide3/ImgSlide3.jsx";
import partnersSlide4 from "../../../UI/ImgSliderPartners/ImgSlide4/ImgSlide4.jsx";
import partnersSlide5 from "../../../UI/ImgSliderPartners/ImgSlide5/ImgSlide5.jsx";
import partnersSlide6 from "../../../UI/ImgSliderPartners/ImgSlide6/ImgSlide6.jsx";

const images = [
    partnersSlide1,
    partnersSlide2,
    partnersSlide3,
    partnersSlide4,
    partnersSlide5,
    partnersSlide6,
];

const PartnersSlider = () => {
    const [desktopIndex, setDesktopIndex] = useState(0); // Состояние для индекса слайда
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Логика для перехода к следующему слайду
    const nextSlide = () => {
        setDesktopIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Логика для перехода на предыдущий слайд
    const prevSlide = () => {
        setDesktopIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Логика для обработки свайпов на мобильных устройствах
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
            <div className={styles.slide}>
                {React.createElement(images[desktopIndex])}
            </div>
            <button onClick={nextSlide} className={styles.rightArrow}>
                ❯
            </button>
        </div>
    );
};

export default PartnersSlider;
