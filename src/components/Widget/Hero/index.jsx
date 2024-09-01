import React from "react";
// import img from "../../../assets/heroPic1.png";
import styles from "./hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroTop}>
                <h1 className={styles.heroText}>
                    Палата Независимых Директоров
                </h1>
                <h1 className={styles.heroText}>Кыргызской Республики</h1>
            </div>
            <div className={styles.heroBottom}></div>
        </div>
    );
};

export default Hero;
