import React, { useEffect, useState, useRef } from "react";
import styles from "./bulletinPage.module.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import newsData from "../../components/Widget/NewsBlock/NewsCards/newsData.js";
import FormatText from "../../components/Widget/FormatText/FormatText.jsx";
import businessBreakfastData from "../../components/Widget/GalleryBlock/GalleryCards/businessBreakfastData.js";
import businessSaturdayData from "../../components/Widget/GalleryBlock/GalleryCards/businessSaturdayData.js";
import businessEventData from "../../components/Widget/GalleryBlock/GalleryCards/businessEventData.js";

const BulletinPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id, type } = useParams();
    // вызов хуков
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const mapEventData = {
        breakfast: businessBreakfastData,
        saturday: businessSaturdayData,
        happening: businessEventData,
    };

    const event = mapEventData[type]?.find((item) => item.id === id);
    // ? - проверка корректного существования данных
    // Проверка на длину массива до рендеринга изображений
    if (!event || !event.images || event.images.length === 0) {
        // Проверка существования images[currentIndex] при рендере:
        // Предотвращает попытку доступа к несуществующим элементам,
        // если currentIndex случайно выходит за пределы массива.
        return <p>Альбом не найден</p>;
    }

    const images = event.images;
    console.log(event.images);

    // if (images.length === 0) {
    // const images = [
    //     bulletin.image1,
    //     bulletin.image2,
    //     bulletin.image3,
    //     bulletin.image4,
    //     bulletin.image5,
    // ].filter((image) => image); //удаляем пустые значения
    // Проверка на пустой массив изображений.
    // return <p>Альбом не найден</p>;
    // }
    // Функции для слайдера
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

    const bulletin = newsData.find((bulletinItem) => bulletinItem.id === id);
    // получаем ту bulletin с такой id и ту новость приводим на нашу константу
    // вместо type -  встанет массив newsData

    return (
        <>
            <HeroHeader />
            <div className={styles.newsPage}>
                <div className={styles.newsPageContainer}>
                    <Link to="/news" className={styles.backToNewsBtn}>
                        Вернуться к новостям
                    </Link>
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

                    {/* Рендерим слайдер, если есть хотя бы одно изображение */}

                    <div
                        className={styles.bulletinSlider}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
                        {images[currentIndex] ? (
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex}`}
                                className={styles.newsImg}
                            />
                        ) : (
                            <p>Изображение не доступно</p>
                        )}
                        <span className={styles.newsInscript}>
                            <FormatText text={bulletin.inscript} />
                        </span>
                        {/* Отображаем кнопки, если изображений больше одного */}
                        <div className={styles.buttonWrapper}>
                            {images.length > 1 && (
                                // чтобы избежать рендеринга пустого элемента
                                <button
                                    onClick={prevSlide}
                                    className={styles.leftArrow}>
                                    ❮
                                </button>
                            )}
                            {images.length > 1 && (
                                // чтобы избежать рендеринга пустого элемента.
                                <button
                                    onClick={nextSlide}
                                    className={styles.rightArrow}>
                                    ❯
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={styles.inlineList}></div>
                    {/* <div className={styles.line_grey}></div> */}
                    <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information2} />
                    </p>
                    {/* <div className={styles.line_gold}></div> */}
                    <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information3} />
                    </p>
                    <Link to="/news" className={styles.backToNewsBtn}>
                        Вернуться к новостям
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BulletinPage;
