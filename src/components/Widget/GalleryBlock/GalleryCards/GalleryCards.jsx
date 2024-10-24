import React from "react";
import styles from "./galleryCards.module.scss";
import GalleryGenerator from "../GalleryGenerator/GalleryGenerator.jsx";
import eventData from "../GalleryCards/eventData.js";

const GalleryCards = () => {
    return (
        <>
            <div className={styles.galleryItem}>
                <h4 className={styles.galleryItemWrapper}>События и новости</h4>
                <div>
                    <GalleryGenerator data={eventData} type="event" />
                </div>
            </div>
            {/* <div className={styles.galleryItem}>
                <h4 className={styles.galleryItemWrapper}>Деловые завтраки</h4>
                <div className={styles.eventList}>
                    <GalleryGenerator data={BusinessSaturdayData} type='breakfast' />
                </div>
            </div> */}
            {/* <div className={styles.galleryItem}>
                <h4 className={styles.galleryItemWrapper}>
                    Мероприятия Палаты
                </h4>
                <div className={styles.eventList}>
                    <GalleryGenerator data={EventData} type='event' />
                </div>
            </div> */}
        </>
    );
};

export default GalleryCards;
