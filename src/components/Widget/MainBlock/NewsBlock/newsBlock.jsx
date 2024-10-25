import React from "react";
import styles from "./newsBlock.module.scss";

const newsBlock = () => {
    return (
        <div className={styles.newsBlock}>
            <div className={styles.newsWrapper}>
                <h2>Статьи и новости</h2>
                <div className={styles.newsCards}>
                    <div className={styles.newsCard}>
                        <div className={styles.imgNews1}></div>
                        <p className={styles.newsText}>
                            ПНД КР провела Деловую субботу на тему "Управление
                            конфликтами и спорами в советах директоров".
                            Спикером выступил Алексей Волонец.
                        </p>
                        <a href="#" className={styles.buttonReadNews}>
                            Читать дальше
                        </a>
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
                        <a href="#" className={styles.buttonReadNews}>
                            Читать дальше
                        </a>
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
                        <a href="#" className={styles.buttonReadNews}>
                            Читать дальше
                        </a>
                    </div>
                </div>
                <a href="#" className={styles.buttomAllNews}>
                    ПЕРЕЙТИ К НОВОСТЯМ ❯
                </a>
            </div>
        </div>
    );
};

export default newsBlock;
