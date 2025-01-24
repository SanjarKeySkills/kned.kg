import React from "react";
import styles from "./corpdirBlock.module.scss";
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
            <div className={styles.courseStudy}>
                <h1 className={styles.courseTitle}>
                    Обучение на курсе "Корпоративный директор", это:
                </h1>
                {/* list */}
                <ul className={styles.studyList}>
                    <li className={styles.listItem}>
                        <div className={styles.numbers}>1</div>
                        <p className={styles.itemContent}>
                            <b>Передовые знания</b> о роли и функциях совета
                            директоров / директоров в современной компании.
                        </p>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.numbers}>2</div>
                        <p className={styles.itemContent}>
                            <b>Развитие карьерного потенциала.</b>
                        </p>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.numbers}>3</div>
                        <p className={styles.itemContent}>
                            <b>Доступ в эксклюзивное сообщество выпускников</b>
                            программ по корпоративному управлению Палаты
                            независимых директоров Кыргызской Республики, что
                            предоставляет возможности для сетевого
                            взаимодействия, обмена опытом и профессионального
                            развития.
                        </p>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.numbers}>4</div>
                        <p className={styles.itemContent}>
                            <b>Сертификат</b> Палаты независимых директоров
                            Кыргызской Республики, подтверждающий квалификацию в
                            качестве сертифицированного корпоративного
                            директора, что является признанием профессионального
                            уровня и готовности к выполнению соответствующих
                            функций.
                        </p>
                    </li>
                </ul>
            </div>
			<div>


				
			</div>
        </div>
    );
}
