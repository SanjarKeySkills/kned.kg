import React, { useEffect, useRef } from "react";
import styles from "./mainHero.module.scss";
import videoBg from "../../../../assets/Business _ stock video footage by FINDSTORY.mp4";

const VideoHero = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className={styles.mainHero}>
            <div className={styles.mainHeroWrapper}>
                <div className={styles.mainHeroContent}>
                    <h3>
                        ПАЛАТА НЕЗАВИСИМЫХ ДИРЕКТОРОВ <br /> КЫРГЫЗСКОЙ
                        РЕСПУБЛИКИ
                    </h3>
                    {/* <a className={styles.mainHeroButton} href="/members">
                        ЧЛЕНЫ ПАЛАТЫ
                    </a> */}
                    <span>ДОВЕРЯЙТЕ УПРАВЛЕНИЕ ПРОФЕССИОНАЛАМ</span>
                </div>
                <video src={videoBg} loop muted ref={videoRef}></video>
            </div>
        </div>
    );
};

export default VideoHero;
