import React, { useEffect, useState, useRef } from "react";
import styles from "./bulletinPage.module.scss";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
// import FormatText from "../../components/Widget/FormatText/FormatText.jsx";
import newsData from "../../components/Widget/NewsBlock/NewsCards/newsData.js";

const BulletinPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const news = newsData.find((item) => item.id === id);
    if (!news || !news.images || news.images.length === 0) {
        return <p>Альбом не найден</p>;
    }

    const images = news.images;

    // для перехода к следующему изображению
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // для перехода к предыдущему изображению
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
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
        <>
            <HeroHeader />
            <div className={styles.newsPage}>
                <div className={styles.newsPageContainer}>
                    <div
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
                        <div>
                            {images[currentIndex] ? (
                                <img
                                    src={news.images[currentIndex].path}
                                    alt={
                                        news.images[currentIndex].title ||
                                        "Album"
                                    }
                                />
                            ) : (
                                <p>Изображение не доступно</p>
                            )}
                        </div>
                    </div>
                    <div className={styles.buttonWrapper}>
                        {images.length > 1 && (
                            <button
                                onClick={prevSlide}
                                className={styles.leftArrow}>
                                ❮
                            </button>
                        )}
                        {images.length > 1 && (
                            <button
                                onClick={nextSlide}
                                className={styles.rightArrow}>
                                ❯
                            </button>
                        )}
                    </div>

                    {/* <div className={styles.titleNewsWrapper}>
                        <h2 className={styles.newsTitle}>
                            <FormatText text={bulletin.title} />
                        </h2>
                        <p className={styles.newsDate}>{bulletin.date}</p>
                    </div> */}
                    {/* <p className={styles.newsAnnotationList}>
                        <FormatText text={bulletin.annotation} />
                    </p> */}
                    {/* <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information} />
                    </p> */}
                    {/* Слайдер */}

                    {/* <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information1} />
                    </p> */}
                </div>
            </div>
        </>
    );
};

export default BulletinPage;
