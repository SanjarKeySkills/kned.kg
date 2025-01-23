import React from "react";
import styles from "./corpdirBlock.module.scss";
import { Link } from "react-router-dom";
import studyScale from "../../../assets/courses/corpdir_hero_studySkale.png";

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
            <div className={styles.corpdirStudy}>
                <h1 className={styles.corpdirStudyTitle}>
                    Обучение на курсе "Корпоративный директор", это:
                </h1>
                <div className={styles.studyListItemWrapper}>
                    <div className={styles.studyListItemLeft}>
                        <p className={styles.studyListContent}>
                            <b>Передовые знания</b> о роли и функциях совета
                            директоров / директоров в современной компании.
                        </p>
                    </div>
                    <div className={styles.studyListItemRight}>
                        <p className={styles.studyListContent}>
                            <b>Развитие карьерного потенциала.</b>
                        </p>
                    </div>
                    <div className={styles.studyListItemLeft}>
                        <p className={styles.studyListContent}>
                            <b>Доступ в эксклюзивное сообщество выпускников</b>
                            программ по корпоративному управлению Палаты
                            независимых директоров Кыргызской Республики, что
                            предоставляет возможности для сетевого
                            взаимодействия, обмена опытом и профессионального
                            развития.
                        </p>
                    </div>
                    <div className={styles.studyListItemRight}>
                        <p className={styles.studyListContent}>
                            <b>Сертификат</b> Палаты независимых директоров
                            Кыргызской Республики, подтверждающий квалификацию в
                            качестве сертифицированного корпоративного
                            директора, что является признанием профессионального
                            уровня и готовности к выполнению соответствующих
                            функций.
                        </p>
                    </div>
                    <img
                        src={studyScale}
                        alt="scale"
                        className={styles.listScaleBackground}
                    />
                </div>
            </div>
        </div>
    );
}
