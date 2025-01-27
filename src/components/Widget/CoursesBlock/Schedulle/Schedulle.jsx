import React from "react";
import styles from "./schedulle.module.scss";

const Schedulle = () => {
    return (
        <div className={styles.schedulle}>
            <div className={styles.wrapperSchdulle}>
                <h2>РАСПИСАНИЕ КУРСОВ</h2>
                <span>2025 год</span>
                <div>
                    <p className={styles.titleSchedulleWrapper}>
                        <b> Ориентировочный план </b> <br /> проведения модулей
                        программы ПНД и IFC <br /> "Корпоративный директор"
                        Бишкек, Кыргызская Республика
                    </p>
                    <div className={styles.infoSchedulle}>
                        <div className={styles.div1}>
                            <p>Февраль - Март</p>
                        </div>
                        <div className={styles.div2}>
                            <p>
                                Основы корпоративного управления и принципы ESG
                            </p>
                        </div>
                        <div className={styles.div3}>
                            <p>Март</p>
                        </div>
                        <div className={styles.div4}>
                            <p>Стратегическая роль Совета директоров</p>
                        </div>
                        <div className={styles.div1}>
                            <p>Апрель</p>
                        </div>
                        <div className={styles.div2}>
                            <p>Роль совета директоров в управлении финансами</p>
                        </div>
                        <div className={styles.div3}>
                            <p>Май</p>
                        </div>
                        <div className={styles.div4}>
                            <p>
                                Роль совета директоров в управлении рисками и
                                обеспечении внутреннего контроля
                            </p>
                        </div>
                        <div className={styles.div1}>
                            <p>Июнь</p>
                        </div>
                        <div className={styles.div2}>
                            <p>
                                Роль совета директоров в управлении человеческим
                                капиталом
                            </p>
                        </div>
                        <div className={styles.div3}>
                            <p>Июнь</p>
                        </div>
                        <div className={styles.div4}>
                            <p>Тестирование</p>
                        </div>
                    </div>
                    <p className={styles.titleSchedulleWrapper}>
                        <b> Календарный план </b> <br /> проведения модулей
                        программы ПНД и IFC <br /> "Корпоративный секретарь"
                        Бишкек, Кыргызская Республика
                    </p>
                    <div className={styles.infoSchedulle}>
                        <div className={styles.div1}>
                            <p>Сентябрь</p>
                        </div>
                        <div className={styles.div2}>
                            <p>Корпоративный секретарь: основы профессии. </p>
                        </div>
                        <div className={styles.div3}>
                            <p>Сентябрь</p>
                        </div>
                        <div className={styles.div4}>
                            <p>Правовые основы корпоративного управления</p>
                        </div>
                        <div className={styles.div1}>
                            <p>Октябрь</p>
                        </div>
                        <div className={styles.div2}>
                            <p>Финансы для нефинансовых менеджеров</p>
                        </div>
                        <div className={styles.div3}>
                            <p>Октябрь</p>
                        </div>
                        <div className={styles.div4}>
                            <p>
                                Коммуникативные компетенции корпоративного
                                секретаря
                            </p>
                        </div>
                        <div className={styles.div1}>
                            <p>Октябрь</p>
                        </div>
                        <div className={styles.div2}>
                            <p>Тестирование</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedulle;
