import React from "react";
import styles from "./galleryGenerator.module.scss";
import { Link } from "react-router-dom";

function GalleryGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props
    // - и его ключи data, и type.
    console.log(data);
    return (
        <div className={styles.eventList}>
            {data.map((event) => (
                <div key={event.id} className={styles.eventContainer}>
                    <div className={styles.eventInfo}>
                        <h2 className={styles.eventName}>{event.name}</h2>
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
                        <Link to={`/event/${type}/${event.id}`}>
                            ОТКРЫТЬ АЛЬБОМ
                        </Link>
                        {/* при клике перекидвает сначала на event потом на type 
						потом по id и после этого вся информция записывается в URL
						и после этого начинается подгружаться компонент 
						ImageCollectionPage
						*/}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GalleryGenerator;
