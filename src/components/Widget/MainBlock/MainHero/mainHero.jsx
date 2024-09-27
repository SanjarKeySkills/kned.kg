import React, { useEffect, useRef } from "react";
import Button from "../../LayoutsComponentsBlock/Button/index.jsx";
import styles from "./mainHero.module.scss";
import videoBg from "../../../../assets/Business _ stock video footage by FINDSTORY.mp4";

const VideoHero = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.play();
    }, []);
    // нативно запускает видео

    return (
        <div className={styles.mainHero}>
            <div className={styles.mainHeroWrapper}>
                <div className={styles.mainHeroContent}>
                    <h1>ПАЛАТАНЕ ЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h1>
                    <Button size="heroButton" variant="heroOutlined">
                        ЧЛЕНЫ ПАЛАТЫ
                    </Button>
                </div>
                <video src={videoBg} loop muted ref={videoRef}></video>
            </div>
        </div>
    );
};

export default VideoHero;
