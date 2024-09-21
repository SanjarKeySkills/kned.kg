import React from "react";
import Button from "../../LayoutsComponentsBlock/Button/index.jsx";
import styles from "./mainHero.module.scss";
import videoBg from "../../../../assets/Business _ stock video footage by FINDSTORY.mp4";

const videoHero = () => {
    return (
        <div className={styles.mainHero}>
            <div className={styles.mainHeroWrapper}>
                <div className={styles.mainHeroContent}>
                    <h1>ПАЛАТАНЕ ЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h1>
                    <Button size="heroButton" variant="heroOutlined">
                        ЧЛЕНЫ ПАЛАТЫ
                    </Button>
                </div>
                <video src={videoBg} autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default videoHero;
