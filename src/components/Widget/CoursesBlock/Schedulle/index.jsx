import React from "react";
import styles from "./index.module.scss";

const Schedulle = () => {
    return (
        <div className={styles.container}>
            <h2>РАСПИСАНИЕ КУРСОВ</h2>
            <span>2024</span>
            <div className={styles.wrapper}>
                <ul>
                    <li>3 - 5 июля</li>
                    <li className={styles.li2}>17 - 19 июля</li>
                    <li className={styles.li3}>
                        6 - 8 <br /> сентября
                    </li>
                    <li className={styles.li4}>21 - 22 сентября</li>
                    <li className={styles.li5}>28 - 29 сентября</li>
                </ul>
                <div>
                    <div className={styles.item}>
                        <p>
                            Роль совета директоров в управлении рисками и
                            обеспечении внутреннего контроля. <br />
                            Соорганизаторы: IFC
                        </p>
                    </div>
                    <div className={styles.item2}>
                        <p>
                            Роль совета директоров в управлении человеческим
                            капиталом. <br /> Соорганизаторы: IFC
                        </p>
                    </div>
                    <div className={styles.item3}>
                        <p>
                            Корпоративный секретарь: основы профессии.
                            Коммуникативные компетенции корпоративного
                            секретаря.
                            <br />
                            Соорганизаторы: IFC
                        </p>
                    </div>
                    <div className={styles.item4}>
                        <p>
                            Роль совета директоров в управлении рисками и
                            обеспечении внутреннего контроля. <br />
                            Соорганизаторы: IFC
                        </p>
                    </div>
                    <div className={styles.item5}>
                        <p>
                            Правовые основы корпоративного управления. <br />
                            Соорганизаторы: IFC
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedulle;
