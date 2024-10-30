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

    const mapEventData = {
        breakfast: businessBreakfastData,
        saturday: businessSaturdayData,
        happening: BusinessEventData,
    };

    const event = mapEventData[type].find((item) => item.id === id);
    if (!event) {
        return <p>Альбом не найден</p>;
    }
    console.log(event.images);

    return (
        <div className={styles.imageCollectionPage}>
            <div className={styles.imageCollectionPageWrapper}>
                <div className={styles.imgWrapper}>
                    {event.images.map((image, index) => (
                        <img
                            key={index}
                            src={image.url}
                            alt={image.title || "Pictire"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCollectionPage;

// -------------------

{
    /* <div
                    className={styles.slider}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>
                    <button onClick={prevSlide} className={styles.leftArrow}>
                        ❮
                    </button>
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className={styles.slide}
                    />
                    <button onClick={nextSlide} className={styles.rightArrow}>
                        ❯
                    </button>
                </div> */
}

// --------------------

// const [currentIndex, setCurrentIndex] = useState(0);
// const touchStartX = useRef(0);
// const touchEndX = useRef(0);

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
// src={`${process.env.PUBLIC_URL}/GalleryImages/${image.url}`}
