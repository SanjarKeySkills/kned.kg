import React from "react";
import styles from "./heroHeader.module.scss";

const HeroHeader = () => {
    return (
        <div className={styles.heroHeader}>
            <div className={styles.heroTop}>
                <h1 className={styles.heroText}>
                    Палата Независимых Директоров
                </h1>
                <h1 className={styles.heroText}>Кыргызской Республики</h1>
            </div>
        </div>
    );
};

export default HeroHeader;
