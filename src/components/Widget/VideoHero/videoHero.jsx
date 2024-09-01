import React from "react";
import Button from "../Button/Button";
import styles from "./videoHero.module.scss";

const videoHero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    ПАЛАТА НЕЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ
                </h1>
                <Button
                    size="heroButton"
                    variant="heroOutlined"
                    children="ЧЛЕНЫ ПАЛАТЫ"
                />
            </div>
        </div>
    );
};

export default videoHero;
