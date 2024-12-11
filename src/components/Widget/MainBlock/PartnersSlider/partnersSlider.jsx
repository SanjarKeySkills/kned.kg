import React, { useState, useRef, useEffect } from "react";
import styles from "./partnersSlider.module.scss";
import PartnersSlide1 from "../../../UI/ImgSliderPartners/ImgSlide1/ImgSlide1.jsx";
import PartnersSlide2 from "../../../UI/ImgSliderPartners/ImgSlide2/ImgSlide2.jsx";
import PartnersSlide3 from "../../../UI/ImgSliderPartners/ImgSlide3/ImgSlide3.jsx";
import PartnersSlide4 from "../../../UI/ImgSliderPartners/ImgSlide4/ImgSlide4.jsx";
import PartnersSlide5 from "../../../UI/ImgSliderPartners/ImgSlide5/ImgSlide5.jsx";
import PartnersSlide6 from "../../../UI/ImgSliderPartners/ImgSlide6/ImgSlide6.jsx";

import PartnersSlide1_responcive from "../../../UI/ImgSliderPartners/ImgSlide1/ImgSlide1.jsx";
import PartnersSlide2_responcive from "../../../UI/ImgSliderPartners/ImgSlide2/ImgSlide2.jsx";
import PartnersSlide3_responcive from "../../../UI/ImgSliderPartners/ImgSlide3/ImgSlide3.jsx";
import PartnersSlide4_responcive from "../../../UI/ImgSliderPartners/ImgSlide4/ImgSlide4.jsx";
import PartnersSlide5_responcive from "../../../UI/ImgSliderPartners/ImgSlide5/ImgSlide5.jsx";
import PartnersSlide6_responcive from "../../../UI/ImgSliderPartners/ImgSlide6/ImgSlide6.jsx";

// window.innerWidth - определяет размер окна и условно рендерить нужное изображение в компоненте.
// Использование медиазапросов CSS для скрытия нужных изображений.
// условный рендеринг с использованием JavaScript.
const images = [
    <PartnersSlide1 />,
    <PartnersSlide2 />,
    <PartnersSlide3 />,
    <PartnersSlide4 />,
    <PartnersSlide5 />,
    <PartnersSlide6 />,
];
const partnersLogos_responcive = [
    <PartnersSlide1_responcive />,
    <PartnersSlide2_responcive />,
    <PartnersSlide3_responcive />,
    <PartnersSlide4_responcive />,
    <PartnersSlide5_responcive />,
    <PartnersSlide6_responcive />,
];

const PartnersSlider = () => {
    // Индекс для мобильной и десктопной версии
    const [desktopIndex, setDesktopIndex] = useState(0); // Состояние для индекса слайда
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Для проверки, мобильное ли устройство

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Проверяем размер окна и обновляем состояние
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // для мобильных устройств
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Сразу вызываем для начальной инициализации
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Логика для перехода к следующему слайду
    const nextSlide = () => {
        if (isMobile) {
            setMobileIndex(
                (prevIndex) => (prevIndex + 1) % partnersLogos_responcive.length
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
                    (prevIndex - 1 + partnersLogos_responcive.length) %
                    partnersLogos_responcive.length
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
            {/* Условный рендеринг изображения */}
            <button onClick={prevSlide} className={styles.leftArrow}>
                ❮
            </button>
            {/* Условный рендеринг слайдов для мобильных и десктопных устройств */}
            <div className={isMobile ? styles.slide_responcive : styles.slide}>
                {isMobile
                    ? partnersLogos_responcive[mobileIndex]
                    : images[desktopIndex]}
            </div>
            <button onClick={nextSlide} className={styles.rightArrow}>
                ❯
            </button>
        </div>
    );
};

export default PartnersSlider;
