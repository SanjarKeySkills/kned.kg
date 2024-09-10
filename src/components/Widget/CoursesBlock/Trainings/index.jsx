import React from "react";
import styles from "./index.module.scss";
import Button from "../../LayoutsComponentsBlock/Button/index.jsx";

const trainings = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ПРОГРАММА КУРСОВ</h1>
            <div className={styles.wrapper}>
                <div className={styles.corpsec}>
                    <div>
                        <h2 className={styles.courseTitle}>
                            Программа курса Корпоративный секретарь
                        </h2>
                        <div className={styles.corpsecList}>
                            <ol className={styles.ListLeft}>
                                <li>Модуль.</li>
                                <li>Модуль.</li>
                                <li>Модуль.</li>
                            </ol>
                            <ol className={styles.ListRight}>
                                <li>
                                    Корпоративный секретарь: основы профессии.
                                </li>
                                <li>Финансы для нефинансовых менеджеров.</li>
                                <li>
                                    Правовые основы корпоративного управления.
                                </li>
                            </ol>
                        </div>
                        <p>
                            <span>Место: </span> Кыргызская Республика, г.
                            Бишкек, бульвар Эркиндик 21.
                        </p>
                        <h2>Преподаватели курса</h2>
                        <br />
                        <p>
                            <b>Градислава Ахметова</b> <br />
                            Генеральный директор компании Governance &
                            Management Consulting. <br />
                            <br />
                            <b>Фархад Карагусов</b> <br />
                            Главный научный сотрудник Института частного права и
                            профессор ВШП «Әділет» Каспийского университета (г.
                            Алматы, Казахстан).
                            <br />
                            <br />
                            <b>Хуршид Зайнутдинов</b> <br />
                            Независимый директор, член Наблюдательного Совета
                            Агробанка (Узбекистан), председатель Комитета по
                            управлению рисками и комлпаенс-контролю. <br />
                            <b>Стоимость:</b> В зависимости от экономических
                            условий.
                        </p>
                    </div>
                    <Button size="course" variant="outlined">
                        ЗАПИСАТЬСЯ НА КУРС
                    </Button>
                </div>
                <div className={styles.corpdir}>
                    <div>
                        <h2 className={styles.courseTitle}>
                            Программа курса Корпоративный директор
                        </h2>
                        <div className={styles.corpdirList}>
                            <ol className={styles.ListLeft}>
                                <li>Модуль.</li>
                                <li>Модуль.</li>
                                <li>Модуль.</li>
                                <li>Модуль.</li>
                                <li>Модуль.</li>
                            </ol>
                            <ol className={styles.ListRight}>
                                <li>
                                    Основы корпоративного управления и принципы
                                    ESG.
                                </li>
                                <li>
                                    Стратегическая роль Совета директоров в
                                    управлении финансами.
                                </li>
                                <li>
                                    Роль советника директоров в управлении
                                    финансами.
                                </li>
                                <li>
                                    Роль совета директоров в управлении рисками
                                    и обеспечении внутреннего контроля.
                                </li>
                                <li>
                                    Роль Совета директоров в управлении
                                    человеческим капиталом.
                                </li>
                            </ol>
                        </div>
                        <p>
                            <span>Место:</span> Кыргызская Республика, г.
                            Бишкек, бульвар Эркиндик 21.
                        </p>
                        <h2>Преподаватели курса</h2>
                        <br />
                        <p>
                            <b>Михаил Кузнецов</b> <br />
                            Партнер консалтинговой компании ESG Strategy Lab.
                            Основатель и Генеральный директор «Топкомпетенс».{" "}
                            <br />
                            <br />
                            <b>Мария Никишова</b> <br />
                            Партнер консалтинговой компании ESG Straеуgy Lab.
                            Директор по корпоративному управлению и стратегии
                            Центра корпоративного развития TopCompetence.
                            <br />
                            <br />
                            <b>Хуршид Зайнутдинов</b> <br />
                            Независимый директор, член Наблюдательного Совета
                            Агробанка (Узбекистан), председатель Комитета по
                            управлению рисками и комлпаенс-контролю. <br />
                            <br />
                            <b>Стоимость:</b> В зависимости от экономических
                            условий.
                        </p>
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
