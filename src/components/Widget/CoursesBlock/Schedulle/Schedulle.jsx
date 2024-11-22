import React from "react";
import styles from "./schedulle.module.scss";

const Schedulle = () => {
    return (
        <div className={styles.schedulle}>
            <div className={styles.titleSchedulle}>
                <h2>курсы и тренинги палаты</h2>
                <p>
                    Палата независимых директоров Кыргызской Республики проводит
                    и организует профессиональные сертификационые
                    образовательные курсы в области корпоративного управления и
                    сопутствующих дисциплин. Передовые знания и новейшие
                    практики корпоративного управления преподаются эффективными
                    тренерами с обширным международным опытом в области
                    корпоративного управления.
                </p>
            </div>
            <div className={styles.wrapperSchdulle}>
                <h2>РАСПИСАНИЕ КУРСОВ</h2>
                <span>2025</span>
                <div>
                    <h2>
                        Календарный план проведения модулей <br /> программы ПНД
                        и IFC "Корпоративный директор" <br />
                        Бишкек, Кыргызская Республика
                    </h2>
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
                        <div className={styles.div5}>
                            <p>Апрель</p>
                        </div>
                        <div className={styles.div6}>
                            <p>Роль совета директоров в управлении финансами</p>
                        </div>
                        <div className={styles.div7}>
                            <p>Май</p>
                        </div>
                        <div className={styles.div8}>
                            <p>
                                Роль совета директоров в управлении рисками и
                                обеспечении внутреннего контроля
                            </p>
                        </div>
                        <div className={styles.div9}>
                            <p>Июнь</p>
                        </div>
                        <div className={styles.div10}>
                            <p>
                                Роль совета директоров в управлении человеческим
                                капиталом
                            </p>
                        </div>
                        <div className={styles.div7}>
                            <p>Июнь</p>
                        </div>
                        <div className={styles.div8}>
                            <p>Тестирование</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedulle;
