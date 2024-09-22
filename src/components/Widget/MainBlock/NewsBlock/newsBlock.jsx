import React from "react";
import styles from "./newsBlock.module.scss";
// import Button from "../../LayoutsComponentsBlock/Button/index.jsx";
// import image from "../../../../assets/imgNews.svg";

const newsBlock = () => {
    return (
        <div className={styles.newsBlock}>
            <div className={styles.newsWrapper}>
                <h2>Статьи и новости</h2>
                <div className={styles.newsCards}>
                    <div className={styles.newsCard}>
                        <div className={styles.imgNews}></div>
                        <p className={styles.newsText}>
                            Размышления о корпоративном секретаре. Градислава
                            Ахметова, МА, MBA, к. э. н. Генеральный директор
                            Governance & Management Consulting. Казахстан.
                        </p>
                        <a href="#" className={styles.buttonReadNews}>
                            Читать дальше
                        </a>
                    </div>
                    <div className={styles.newsCard}>
                        <div className={styles.imgNews}></div>
                        <p className={styles.newsText}>
                            Размышления о корпоративном секретаре. Градислава
                            Ахметова, МА, MBA, к. э. н. Генеральный директор
                            Governance & Management Consulting. Казахстан.
                        </p>
                        <Button
                            size="s"
                            variant="outlined"
                            children="Читать дальше"
                        />
                    </div>
                    <div className={styles.newsCard}>
                        <div className={styles.imgNews}></div>
                        <p className={styles.newsText}>
                            Размышления о корпоративном секретаре. Градислава
                            Ахметова, МА, MBA, к. э. н. Генеральный директор
                            Governance & Management Consulting. Казахстан.
                        </p>
                        <Button
                            size="s"
                            variant="outlined"
                            children="Читать дальше"
                        />
                    </div>
                </div>
                <a href="#" className={styles.buttomAllNews}>
                    ПЕРЕЙТИ К НОВОСТЯМ ❯
                </a>
            </div>
        </div>
    );
};

export default newsBlock;
