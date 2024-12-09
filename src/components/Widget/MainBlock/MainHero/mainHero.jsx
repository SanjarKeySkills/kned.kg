import React, { useEffect, useRef, useState } from "react";
import styles from "./mainHero.module.scss";
import videoBg from "../../../../assets/Business _ stock video footage by FINDSTORY.mp4";
import scrollButton from "../../../../assets/arrowScrollDown.png";

const VideoHero = () => {
    const videoRef = useRef(null);
    const [isAtBottom, setIsAtBottom] = useState(false); // скролл в обе стороны

    useEffect(() => {
        videoRef.current.play();
    }, []);

    // Функция для прокрутки вниз
    const handleScrollDown = () => {
        const pageHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.pageYOffset + window.innerHeight;

        if (scrollPosition < pageHeight - 1) {
            // Если не внизу страницы, прокручиваем вниз
            window.scrollTo({
                top: window.innerHeight + window.pageYOffset,
                behavior: "smooth",
            });

            // Функция для прокрутки вниз на 100vh в однц сторону
            // window.scrollTo({
            //     top: window.innerHeight + window.pageYOffset, // Прокручиваем на 100vh вниз от текущей позиции
            //     behavior: "smooth", // Плавная прокрутка
            // });
        } else {
            // Если достигнут низ страницы, прокручиваем вверх
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    // Проверка, если достигнут конец страницы
    useEffect(() => {
        const checkIfAtBottom = () => {
            const pageHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.pageYOffset + window.innerHeight;
            if (scrollPosition >= pageHeight - 1) {
                setIsAtBottom(true);
            } else {
                setIsAtBottom(false);
            }
        };

        window.addEventListener("scroll", checkIfAtBottom);

        return () => {
            window.removeEventListener("scroll", checkIfAtBottom);
        };
    }, []);

    return (
        <div className={styles.mainHero}>
            <div className={styles.mainHeroWrapper}>
                <div className={styles.mainHeroContent}>
                    <p className={styles.heroTitle}>
                        ПАЛАТА НЕЗАВИСИМЫХ ДИРЕКТОРОВ <br /> КЫРГЫЗСКОЙ
                        РЕСПУБЛИКИ
                    </p>
                    <p className={styles.heroMoto}>
                        ДОВЕРЯЙТЕ УПРАВЛЕНИЕ ПРОФЕССИОНАЛАМ
                    </p>
                </div>
                <video src={videoBg} loop muted ref={videoRef}></video>
            </div>
            <button onClick={handleScrollDown} className={styles.scrollButton}>
                <img src={scrollButton} alt="btnImg" />
            </button>
        </div>
    );
};

export default VideoHero;
