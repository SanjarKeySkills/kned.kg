import React from "react";
import styles from "./galleryCards.module.scss";
import GalleryGenerator from "../GalleryGenerator/GalleryGenerator.jsx";
import BusinessSaturdayData from "./businessSaturdayData.js";
import BusinessBreakfastData from "./businessBreakfastData.js";
import BusinessEventData from "./businessEventData.js";

const GalleryCards = () => {
    return (
        <>
            <div className={styles.galleryItem}>
                <h4 className={styles.galleryItemWrapper}>Деловые субботы</h4>
                <div className={styles.eventList}>
                    <GalleryGenerator
                        data={BusinessSaturdayData}
                        type="saturday"
                    />
                </div>
            </div>
            <div className={styles.galleryItem}>
                <h4 className={styles.galleryItemWrapper}>Деловые завтраки</h4>
                <div className={styles.eventList}>
                    <GalleryGenerator
                        data={BusinessBreakfastData}
                        type="breakfast"
                    />
                </div>
            </div>
            <div className={styles.galleryItem}>
                <h4 className={styles.galleryItemWrapper}>Мероприятия</h4>
                <div className={styles.eventList}>
                    <GalleryGenerator
                        data={BusinessEventData}
                        type="happening"
                    />
                </div>
            </div>
        </>
    );
};

export default GalleryCards;
