import React from "react";
import styles from "./galleryGenerator.module.scss";
import { Link } from "react-router-dom";

function GalleryGenerator({ data, type }) {
    return (
        <div className={styles.eventList}>
            {data.map((event) => (
                <div key={event.id} className={styles.eventContainer}>
                    <div className={styles.eventText}>
                        <a href={`/event/${type}/${event.id}`}>
                            <h2 className={styles.eventName}>{event.name}</h2>
                        </a>
                        <p className={styles.eventAnnotationName}>
                            {event.annotation}
                        </p>
                        <a href={`/event/${type}/${event.id}`}>
                            <img
                                className={styles.eventImg}
                                src={event.image}
                                alt={event.name}
                            />
                        </a>
                        <Link to={`/event/${type}/${event.id}`}>Открыть</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GalleryGenerator;
