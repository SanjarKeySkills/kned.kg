import React, { useEffect } from "react";
import styles from "./charterPage.module.scss";

const CharterPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={styles.charterPage}>
                <div className={styles.charterPageWrapper}>
                    <span></span>
                    <h1>ПОЛОЖЕНИЕ О ЧЛЕНСТВЕ</h1>
                    <h2>
                        ОБЩЕСТВЕННОГО ОБЪЕДИНЕНИЯ <br /> «ПАЛАТА НЕЗАВИСИМЫХ
                        ДИРЕКТОРОВ <br /> КЫРГЫЗСКОЙ РЕСПУБЛИКИ»
                    </h2>
                    <p>г. БИШКЕК – 2024 год</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <span></span>
                </div>
            </div>
            ;
        </>
    );
};

export default CharterPage;
