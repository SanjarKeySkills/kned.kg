import React, { useState, useRef, useEffect } from "react";
import styles from "./sliderCourseIfcBtn.module.scss";
import SliderCourseKd from "../../../UI/ImgSliderCourse/ImgSliderCourseKd/imgSliderCourseKd.jsx";
import SliderCourseKs from "../../../UI/ImgSliderCourse/ImgSliderCourseKs/imgSliderCourseKs.jsx";
import SliderCourseResponciveKd from "../../../UI/ImgSliderCourse/ImgSliderCourseResponciveKd/ImgSliderCourseResponciveKd.jsx";
import SliderCourseResponciveKs from "../../../UI/ImgSliderCourse/ImgSliderCourseResponciveKs/ImgSliderCourseResponciveKs.jsx";

// window.innerWidth - определяет размер окна и условно рендерить нужное изображение в компоненте.
// Использование медиазапросов CSS для скрытия нужных изображений.
// условный рендеринг с использованием JavaScript.
const banners = [<SliderCourseKd />, <SliderCourseKs />];
const banners_responcive = [
    <SliderCourseResponciveKd />,
    <SliderCourseResponciveKs />,
];

const SliderTest = () => {
    // Индекс для мобильной и десктопной версии
    const [desktopIndex, setDesktopIndex] = useState(0);
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

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
                (prevIndex) => (prevIndex + 1) % banners_responcive.length
            );
        } else {
            setDesktopIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }
    };

    // Логика для перехода на предыдущий слайд
    const prevSlide = () => {
        if (isMobile) {
            setMobileIndex(
                (prevIndex) =>
                    (prevIndex - 1 + banners_responcive.length) %
                    banners_responcive.length
            );
        } else {
            setDesktopIndex(
                (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
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
                    ? banners_responcive[mobileIndex]
                    : banners[desktopIndex]}
            </div>
            <button onClick={nextSlide} className={styles.rightArrow}>
                ❯
            </button>
        </div>
    );
};

export default SliderTest;
