import React, { useEffect, useState, useRef } from "react";
import styles from "./imageCollectionPage.module.scss";
import { useParams } from "react-router-dom";
import businessBreakfastData from "../../components/Widget/GalleryBlock/GalleryCards/businessBreakfastData.js";
import businessSaturdayData from "../../components/Widget/GalleryBlock/GalleryCards/businessSaturdayData.js";
import BusinessEventData from "../../components/Widget/GalleryBlock/GalleryCards/businessEventData.js";

const ImageCollectionPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id, type } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const mapEventData = {
        breakfast: businessBreakfastData,
        saturday: businessSaturdayData,
        happening: BusinessEventData,
    };

    const event = mapEventData[type]?.find((item) => item.id === id);
    // ? - проверка корректного существования данных
    // Мы добавим проверку на длину массива перед тем, как рендерить изображение.
    if (!event || !event.images || event.images.length === 0) {
        // Проверка существования images[currentIndex] при рендере: Это предотвращает попытку доступа к несуществующим элементам, если currentIndex случайно выходит за пределы массива.
        return <p>Альбом не найден</p>;
    }

    console.log(event.images);

    const images = event.images;

    // для перехода к следующему изображению
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % images.length;
            console.log("Next slide index", newIndex);
            return newIndex;
        });
    };

    // для перехода к предыдущему изображению
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + images.length) % images.length;
            console.log("Previous slide index", newIndex);
            return newIndex;
        });
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
    console.log(
        "Current Index:",
        currentIndex,
        "Image URL:",
        images[currentIndex]?.url
    );

    return (
        <div className={styles.imageCollectionPage}>
            <div className={styles.imageCollectionPageWrapper}>
                <div className={styles.imgWrapper}>
                    <div
                        className={styles.slider}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
                        {images.length > 1 && (
                            <button
                                onClick={prevSlide}
                                className={styles.leftArrow}>
                                ❮
                            </button>
                        )}

                        <div className={styles.slide}>
                            {images[currentIndex] ? (
                                <img
                                    src={images[currentIndex].url}
                                    alt={images[currentIndex].title || "Album"}
                                />
                            ) : (
                                <p>Error</p>
                            )}
                        </div>

                        {images.length > 1 && (
                            <button
                                onClick={nextSlide}
                                className={styles.rightArrow}>
                                ❯
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCollectionPage;

// -------------------
// const prevSlide = () => {
//     setCurrentIndex(
//         (prevIndex) =>
//             (prevIndex - 1 + event.images.length) % event.images.length
//     );
// };
// const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % event.images.length);
// };

// -------------------------
// setCurrentIndex((prevIndex) =>
//     prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
// );
// setCurrentIndex((prevIndex) =>
//     prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
// );
// ------------------------
{
    /* {event.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt={image.title || "Album"}
                                />
                            ))} */
}
// ---------------------------------------
// setCurrentIndex((prevIndex) =>
//     prevIndex === 0 ? images.length - 1 : prevIndex - 1)
// setCurrentIndex((prevIndex) =>
//     prevIndex === images.length - 1 ? 0 : prevIndex + 1
// );
