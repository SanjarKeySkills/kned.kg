import React, { useEffect, useState, useRef } from "react";
import styles from "./bulletinPage.module.scss";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import newsData from "../../components/Widget/NewsBlock/NewsCards/newsData.js";
import FormatText from "../../components/Widget/FormatText/FormatText.jsx";
import img1 from "../../assets/businessSaturdayData/bs_280924/volynetz_1_11zon.png";
import img2 from "../../assets/businessSaturdayData/bs_280924/volynetz_2_11zon.png";
import img3 from "../../assets/businessSaturdayData/bs_280924/volynetz_3_11zon.png";
import img4 from "../../assets/businessSaturdayData/bs_280924/volynetz_4_11zon.png";
import img5 from "../../assets/businessSaturdayData/bs_280924/volynetz_5_11zon.png";

const images = [img1, img2, img3, img4, img5];

const BulletinPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const bulletin = newsData.find((bulletin) => bulletin.id === id);
    // получаем ту news с такой id и ту новость приводим на нашу константу
    // вместо type -  встанет массив newsData

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
        <>
            <HeroHeader />
            <div className={styles.newsPage}>
                <div className={styles.newsPageContainer}>
                    <div className={styles.titleNewsWrapper}>
                        <h2 className={styles.newsTitle}>
                            <FormatText text={bulletin.title} />
                        </h2>
                        <p className={styles.newsDate}>{bulletin.date}</p>
                    </div>
                    <ul className={styles.newsAnnotationList}>
                        <li>{bulletin.annotation}</li>
                        <li>{bulletin.annotation2}</li>
                        <li>{bulletin.annotation3}</li>
                    </ul>
                    <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information} />
                    </p>

                    <div
                        className={styles.bulletinSlider}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
                        <img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex}`}
                            className={styles.newsImg}
                        />
                        <span className={styles.newsInscript}>
                            <FormatText text={bulletin.inscript} />
                        </span>
                        <div className={styles.buttonWrapper}>
                            <button
                                onClick={prevSlide}
                                className={styles.leftArrow}>
                                ❮
                            </button>
                            <button
                                onClick={nextSlide}
                                className={styles.rightArrow}>
                                ❯
                            </button>
                        </div>
                    </div>
                    <div className={styles.inlineList}></div>
                    <div className={styles.line_grey}></div>
                    <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information2} />
                    </p>
                    <div className={styles.line_gold}></div>
                    <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information3} />
                    </p>
                </div>
            </div>
        </>
    );
};

export default BulletinPage;
