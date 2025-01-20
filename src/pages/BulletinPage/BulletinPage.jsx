import React, { useState, useEffect, useRef } from "react";
import styles from "./bulletinPage.module.scss";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import FormatText from "../../components/Widget/FormatText/FormatText.jsx";
import newsData from "../../components/Widget/NewsBlock/NewsCards/newsData.js";
import { getGalleryPathById } from "../../server/api/galleries/id";

const BulletinPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams(); // Receive id from URL parameters
    const [currentIndex, setCurrentIndex] = useState(0); // the index of current img
    const [galleryImages, setGalleryImages] = useState([]); // the array of img for slider
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // hiding the obj of the news by id
    const newsItem = newsData.find((item) => item.id === id);

    // if news was founded - initializing slider with img
    useEffect(() => {
        if (newsItem && newsItem.images) {
            setGalleryImages(newsItem.images);
        }
    }, [newsItem]);

    // slider functions
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };
    // Оператор остатка от деления % используется, чтобы обеспечить цикличность. Когда индекс доходит до конца массива, он снова "перезапускается" с 0.

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + galleryImages.length) % galleryImages.length
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
            nextImage();
        } else if (touchStartX.current - touchEndX.current < -50) {
            prevImage();
        }
    };

    return (
        <>
            <HeroHeader />
            <div className={styles.newsPage}>
                <div className={styles.newsPageContainer}>
                    <div className={styles.titleNewsWrapper}>
                        <h2 className={styles.newsTitle}>
                            <FormatText text={newsItem.title} />
                        </h2>
                        <p className={styles.newsDate}>{newsItem.date}</p>
                    </div>
                    <p className={styles.newsAnnotationList}>
                        <FormatText text={newsItem.annotation} />
                    </p>
                    <p className={styles.newsInformation}>
                        <FormatText text={newsItem.information} />
                    </p>

                    {/* Слайдер */}

                    <div
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className={styles.bulletinSlider}>
                        {galleryImages.length > 0 && (
                            <div>
                                <img
                                    src={getGalleryPathById(
                                        galleryImages[currentIndex].id
                                    )}
                                    alt="gallery"
                                    className={styles.newsImg}
                                />
                            </div>
                        )}

                        {/* Only show the buttons if there are more than one image */}
                        <div className={styles.buttonWrapper}>
                            {galleryImages.length > 2 && (
                                <button
                                    onClick={prevImage}
                                    className={styles.leftArrow}>
                                    ❮
                                </button>
                            )}
                            {galleryImages.length > 2 && (
                                <button
                                    onClick={nextImage}
                                    className={styles.rightArrow}>
                                    ❯
                                </button>
                            )}
                        </div>
                    </div>

                    <p className={styles.newsInformation}>
                        <FormatText text={newsItem.information1} />
                    </p>
                </div>
            </div>
        </>
    );
};

export default BulletinPage;
