import React, { useState, useRef, useEffect } from "react";
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
    // Индекс для мобильной и десктопной версии
    const [desktopIndex, setDesktopIndex] = useState(0);
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Для проверки, мобильное ли устройство

    // const [currentIndex, setCurrentIndex] = useState(0); // добавляем хук useState(false)

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
            {/* Условный рендеринг изображения */}
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

export default CourseSlider;

/* <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={styles.slide}
            />
            <img
                src={images_responcive[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={styles.slide_responcive}
            /> */
