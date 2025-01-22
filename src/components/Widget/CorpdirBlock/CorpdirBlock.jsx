import React from "react";
import styles from "./corpdirBlock.module.scss";
import { Link } from "react-router-dom";

export default function Corpdir() {
    return (
        <div className={styles.corpdirBlock}>
            <div className={styles.heroCorpdirBlock}>
                <h1>Корпоративный директор</h1>
                <p>
                    Профессиональный сертификационный образовательный курс
                    <br />
                    Начало обучения - 28 февраля 2025 г.
                </p>
                <div className={styles.heroCorpdirBlockBtnWrapper}>
                    <Link
                        className={styles.headerBtnApply}
                        to="https://forms.gle/SpiszP9pbvSdBGQF8">
                        ПОДАТЬ ЗАЯВКУ НА ОБУЧЕНИЕ
                    </Link>
                    <Link onClick={"#"} className={styles.headerBtnInfo}>
                        Узнать подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
}
