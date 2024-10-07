import React from "react";
import styles from "./courseProgram.module.scss";
import Button from "../../../UI/Button/button.jsx";

const trainings = () => {
    return (
        <div className={styles.courseProgram}>
            <div className={styles.wrapper}>
                <h1>ПРОГРАММА КУРСОВ</h1>
                <div className={styles.corpsec}>
                    <div className={styles.corpsecWrapper}>
                        <h2>Программа курса Корпоративный секретарь</h2>
                        <div className={styles.corpsecList}>
                            <p>
                                <b>1. Модуль. </b> Корпоративный секретарь:
                                основы профессии.
                                <br />
                                <b>2. Модуль. </b> Финансы для нефинансовых
                                менеджеров.
                                <br />
                                <b>3. Модуль. </b> Правовые основы
                                корпоративного управления.
                            </p>
                            <p>
                                <b>Место:</b> Кыргызская Республика, г. Бишкек,
                                бульвар Эркиндик 21.
                            </p>
                        </div>

                        <div className={styles.courseTrainers}>
                            <h2>Преподаватели курса</h2>
                            <div>
                                <div>
                                    <p>
                                        <b>Градислава Ахметова</b> <br />
                                        Генеральный директор компании Governance
                                        & Management Consulting.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <br />
                                        <b>Фархад Карагусов</b> <br />
                                        Главный научный сотрудник Института
                                        частного права и профессор ВШП «Әділет»
                                        Каспийского университета (г. Алматы,
                                        Казахстан).
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <br />
                                        <b>Хуршид Зайнутдинов</b> <br />
                                        Независимый директор, член
                                        Наблюдательного Совета Агробанка
                                        (Узбекистан), председатель Комитета по
                                        управлению рисками и комлпаенс-контролю.
                                    </p>
                                    <p>
                                        <br />
                                        <b>Стоимость:</b> В зависимости от
                                        экономических условий.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button size="course" variant="outlined">
                        ЗАПИСАТЬСЯ НА КУРС
                    </Button>
                </div>

                <div className={styles.corpdir}>
                    <div className={styles.corpdirWrapper}>
                        <h2>Программа курса Корпоративный директор</h2>
                        <div className={styles.corpdirList}>
                            <p>
                                <b>1. Модуль. </b>Основы корпоративного
                                управления и принципы ESG.
                                <br />
                                <b>2. Модуль. </b> Стратегическая роль Совета
                                директоров в управлении финансами.
                                <br />
                                <b>3. Модуль. </b> Роль советника директоров в
                                управлении финансами.
                                <br />
                                <b>4. Модуль. </b> Роль совета директоров в
                                управлении рисками и обеспечении внутреннего
                                контроля.
                                <br />
                                <b>5. Модуль. </b> Роль Совета директоров в
                                управлении человеческим капиталом.
                            </p>
                            <p>
                                <b>Место:</b> Кыргызская Республика, г. Бишкек,
                                бульвар Эркиндик 21.
                            </p>
                        </div>

                        <div className={styles.courseTrainers}>
                            <h2>Преподаватели курса</h2>
                            <p>
                                <b>Михаил Кузнецов</b> <br />
                                Партнер консалтинговой компании ESG Strategy
                                Lab. Основатель и Генеральный директор
                                «Топкомпетенс». <br />
                                <br />
                                <b>Мария Никишова</b> <br />
                                Партнер консалтинговой компании ESG Straеуgy
                                Lab. Директор по корпоративному управлению и
                                стратегии Центра корпоративного развития
                                TopCompetence.
                                <br />
                                <br />
                                <b>Хуршид Зайнутдинов</b> <br />
                                Независимый директор, член Наблюдательного
                                Совета Агробанка (Узбекистан), председатель
                                Комитета по управлению рисками и
                                комлпаенс-контролю. <br />
                                <br />
                                <b>Стоимость:</b> В зависимости от экономических
                                условий.
                            </p>
                        </div>
                    </div>
                    <Button size="course" variant="outlined">
                        ЗАПИСАТЬСЯ НА КУРС
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default trainings;
