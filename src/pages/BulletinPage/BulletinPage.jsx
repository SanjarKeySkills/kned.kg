import React, {
    useEffect,
    //  useState, useRef
} from "react";
import styles from "./bulletinPage.module.scss";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import FormatText from "../../components/Widget/FormatText/FormatText.jsx";
import newsData from "../../components/Widget/NewsBlock/NewsCards/newsData.js";

const BulletinPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();

    // вызов хуков
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const touchStartX = useRef(0);
    // const touchEndX = useRef(0);

    const bulletin = newsData.find((event) => event.id === id);
    // ? - проверка корректного существования данных
    // Проверка на длину массива до рендеринга изображений
    // if (!event || !event.images || event.images.length === 0) {
    //     // Проверка существования images[currentIndex] при рендере:
    //     // Предотвращает попытку доступа к несуществующим элементам,
    //     // если currentIndex случайно выходит за пределы массива.
    //     return <p>Альбом не найден</p>;
    // }

    // const images = event.images;

    // // Функции для слайдера
    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };
    // const prevSlide = () => {
    //     setCurrentIndex(
    //         (prevIndex) => (prevIndex - 1 + images.length) % images.length
    //     );
    // };
    // const handleTouchStart = (e) => {
    //     touchStartX.current = e.touches[0].clientX;
    // };
    // const handleTouchMove = (e) => {
    //     touchEndX.current = e.touches[0].clientX;
    // };
    // const handleTouchEnd = () => {
    //     if (touchStartX.current - touchEndX.current > 50) {
    //         nextSlide();
    //     } else if (touchStartX.current - touchEndX.current < -50) {
    //         prevSlide();
    //     }
    // };

    // const bulletin = newsData.find((bulletinItem) => bulletinItem.id === id);
    // // получаем ту bulletin с такой id и ту новость приводим на нашу константу
    // // вместо type -  встанет массив newsData

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
                    <p className={styles.newsAnnotationList}>
                        <FormatText text={bulletin.annotation} />
                    </p>
                    <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information} />
                    </p>
                    {/* Рендерим слайдер, если есть хотя бы одно изображение */}
                    {/* <div
                        className={styles.bulletinSlider}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}> */}
                    {/* {images[currentIndex] ? (
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex}`}
                                className={styles.newsImg}
                            />
                        ) : (
                            <p>Изображение не доступно</p>
                        )} */}

                    <img
                        src={bulletin.image}
                        alt="img"
                        className={styles.newsImg}
                    />

                    {/* Отображаем кнопки, если изображений больше одного */}
                    {/* <div className={styles.buttonWrapper}> */}
                    {/* {images.length > 1 && (
                                // чтобы избежать рендеринга пустого элемента
                                <button
                                    onClick={prevSlide}
                                    className={styles.leftArrow}>
                                    ❮
                                </button>
                            )} */}
                    {/* {images.length > 1 && (
                                // чтобы избежать рендеринга пустого элемента.
                                <button
                                    onClick={nextSlide}
                                    className={styles.rightArrow}>
                                    ❯
                                </button>
                            )} */}
                    {/* </div> */}
                    {/* </div> */}

                    <div className={styles.inlineList}></div>
                    <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information1} />
                    </p>
                </div>
            </div>
        </>
    );
};

export default BulletinPage;
