import React from "react";
import styles from "./infoTableBlock.module.scss";

const infoTableBlock = () => {
    return (
        <div className={styles.infoTableBlock}>
            <div className={styles.infoList}>
                <div className={styles.infoCard}>
                    <h3 className={styles.headList}>
                        ДЕЯТЕЛЬНОСТЬ <br /> ЭКСПЕРТОВ ПАЛАТЫ В ИНДУСТРИЯХ
                    </h3>
                    <div className={styles.industryBlock}>
                        <ul>
                            <li>Финансовый сектор</li>
                            <li>Транспорт и логистика</li>
                            <li>Юриспруденция</li>
                            <li>СМИ и медиа</li>
                            <li>Стротельство</li>
                            <li>IT сектор</li>
                            <li>Здравоохранение</li>
                            <li>Строительство</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <h4 className={styles.headList}>
                        КОМПЕТЕНЦИИ <br /> ЭКСПЕРТОВ ПАЛАТЫ
                    </h4>
                    <div className={styles.industryBlock}>
                        <ul>
                            <li>Корпоративное управление</li>
                            <li>IT и Финтех</li>
                            <li>Технологии искусственного интеллекта</li>
                            <li>Финансы и инвестиции</li>
                            <li>Продажи</li>
                            <li>Аудит</li>
                            <li>Коммуникации и PR</li>
                            <li>HR</li>
                            <li>Бухгалтерский учет</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <h4 className={styles.headList}>
                        ВЫПУСКНИКИ
                        <br />
                        СЕРТИФИКАЦИОННЫХ ПРОГРАММ
                    </h4>
                    <div className={styles.alumnyBlock}>
                        <ul>
                            <li>
                                Программа "Независимый директор. Успешная
                                карьера."
                            </li>
                            <li>
                                Сертификационный курс программы ПНД и IFC
                                "Корпоративный директор."
                            </li>
                            <li>
                                Сертификационный курс программы ПНД и IFC
                                "Корпоративный секретарь."
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default infoTableBlock;
