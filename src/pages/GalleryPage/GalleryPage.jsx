import React from "react";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import GalleryCards from "../../components/Widget/GalleryBlock/GalleryCards/GalleryCards.jsx";
import styles from "../../pages/GalleryPage/galleryPage.module.scss";

const GalleryPage = () => {
    return (
        <>
            <HeroHeader />
            <div className={styles.galleryPage}>
                <div className={styles.galleryPageWrapper}>
                    <h3>
                        Фотогаллерея Палаты Независимых Директоров Кыргызской
                        Республики
                    </h3>
                    <p>
                        Палата на регулярной основе проводит деловые субботы,
                        деловые завтраки, а также иные тематические мероприятия,
                        посвященные вопросам развития корпоартвиного управления
                    </p>
                </div>
            </div>
            <GalleryCards />
        </>
    );
};

export default GalleryPage;
