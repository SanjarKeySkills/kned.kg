import React from "react";
import styles from "./heroCourse.module.scss";
import { Link } from "react-router-dom";

export default function Corpdir() {
    return (
        <div className={styles.course}>
            <div className={styles.heroCourse}>
                <h1>Корпоративный директор</h1>
                <p>
                    Профессиональный сертификационный образовательный курс
                    <br />
                    Начало обучения - 28 февраля 2025г.
                </p>
                <div className={styles.heroBtnWrapper}>
                    <Link
                        className={styles.heroBtnApply}
                        to="https://forms.gle/SpiszP9pbvSdBGQF8">
                        ПОДАТЬ ЗАЯВКУ НА ОБУЧЕНИЕ
                    </Link>
                    <Link onClick={"/"} className={styles.heroBtnInfo}>
                        Узнать подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
}
