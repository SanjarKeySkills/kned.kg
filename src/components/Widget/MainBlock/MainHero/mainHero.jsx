import React from "react";
import Button from "../../LayoutsComponentsBlock/Button/index.jsx";
import styles from "./mainHero.module.scss";

const videoHero = () => {
    return (
        <div className={styles.mainHeroWrapper}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    ПАЛАТА НЕЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ
                </h1>
                <Button size="heroButton" variant="heroOutlined">
                    ЧЛЕНЫ ПАЛАТЫ
                </Button>
            </div>
        </div>
    );
};

export default videoHero;
