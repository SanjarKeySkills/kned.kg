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
                <span>2024</span>
                <div>
                    <div className={styles.infoSchedulle}>
                        <div className={styles.div1}>
                            <p>3 - 5 июля</p>
                        </div>
                        <div className={styles.div2}>
                            <p>
                                Роль совета директоров в управлении рисками и
                                обеспечении внутреннего контроля. Соорганизатор:
                                IFC
                            </p>
                        </div>
                        <div className={styles.div3}>
                            <p>17 - 19 июля</p>
                        </div>
                        <div className={styles.div4}>
                            <p>
                                Роль совета директоров в управлении человеческим
                                капиталом. Соорганизатор: IFC
                            </p>
                        </div>
                        <div className={styles.div5}>
                            <p>6 - 8 сентября</p>
                        </div>
                        <div className={styles.div6}>
                            <p>
                                Корпоративный секретарь: основы профессии.
                                Коммуникативные компетенции корпоративного
                                секретаря. Соорганизатор: IFC
                            </p>
                        </div>
                        <div className={styles.div7}>
                            <p>21 - 22 сентября</p>
                        </div>
                        <div className={styles.div8}>
                            <p>
                                Роль совета директоров в управлении рисками и
                                обеспечении внутреннего контроля. Соорганизатор:
                                IFC
                            </p>
                        </div>
                        <div className={styles.div9}>
                            <p>28 - 29 сентября</p>
                        </div>
                        <div className={styles.div10}>
                            <p>
                                Правовые основы корпоративного управления.
                                Соорганизатор: IFC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedulle;
