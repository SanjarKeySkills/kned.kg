import React from "react"; //  { useState, useRef }
import styles from "./partnersSlider.module.scss";
import partnersLogo1 from "../../../../assets/partnersLogo1.png";
import partnersLogo2 from "../../../../assets/partnersLogo2.png";

const images = [partnersLogo1, partnersLogo2];

const PartnersSlider = () => {
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Логика для перехода к следующему слайду
    const nextSlide = () => {
        if (isMobile) {
            setMobileIndex(
                (prevIndex) => (prevIndex + 1) % images_responcive.length
            );
        } else {
            setDesktopIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    // Логика для перехода на предыдущий слайд

    const prevSlide = () => {
        if (isMobile) {
            setMobileIndex(
                (prevIndex) =>
                    (prevIndex - 1 + images_responcive.length) %
                    images_responcive.length
            );
        } else {
            setDesktopIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
        }
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
            <img
                src={
                    isMobile
                        ? images_responcive[mobileIndex] // Для мобильной версии
                        : images[desktopIndex] // Для десктопной версии
                }
                alt={`Slide ${isMobile ? mobileIndex : desktopIndex}`}
                className={isMobile ? styles.slide_responcive : styles.slide}
            />
            <button onClick={nextSlide} className={styles.rightArrow}>
                ❯
            </button>
        </div>
    );
};

export default PartnersSlider;
