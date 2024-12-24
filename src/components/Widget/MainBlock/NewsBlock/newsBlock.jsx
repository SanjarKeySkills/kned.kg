import React from "react";
import { Link } from "react-router-dom";
import styles from "./newsBlock.module.scss";

const newsBlock = () => {
    return (
        <div className={styles.newsBlock}>
            <div className={styles.newsWrapper}>
                <h2>НОВОСТИ</h2>
                <div className={styles.newsCards}>
                    <div className={styles.newsCard}>
                        <div className={styles.imgNews1}></div>
                        <p className={styles.newsText}>
                            ПНД КР провела Деловую субботу на тему "Управление
                            конфликтами и спорами в советах директоров".
                            Спикером выступил Алексей Волонец.
                        </p>
                        <Link
                            to="/bulletin/type/1"
                            className={styles.buttonReadNews}>
                            Читать дальше
                        </Link>
                    </div>
                    <div className={styles.newsCard}>
                        <div className={styles.imgNews2}></div>
                        <p className={styles.newsText}>
                            ПНД КР провела Деловой завтрак на тему "ESG
                            отчетность как инструмент стратегического анализа
                            компании" Спикером выступила Ирина Иванова - эксперт
                            по устойчивым инструментам финансирования и
                            нефинансовой отчётности в Кыргызской Республике.
                        </p>
                        <Link
                            to="/bulletin/type/3"
                            className={styles.buttonReadNews}>
                            Читать дальше
                        </Link>
                    </div>
                    <div className={styles.newsCard}>
                        <div className={styles.imgNews3}></div>
                        <p className={styles.newsText}>
                            ПНД КР провела Деловой завтрак на тему "ESG в
                            структуре и функциях Совета директоров. Оценка
                            готовности СД к ESG". Спикеромы выступила Гульнара
                            Арымкулова - учредитель и руководитель
                            консультационной компании FNT Consultants
                        </p>
                        <Link
                            to="/bulletin/type/2"
                            className={styles.buttonReadNews}>
                            Читать дальше
                        </Link>
                    </div>
                </div>
                <Link to="/news" className={styles.buttomAllNews}>
                    ПЕРЕЙТИ К НОВОСТЯМ
                </Link>
            </div>
        </div>
    );
};

export default newsBlock;
