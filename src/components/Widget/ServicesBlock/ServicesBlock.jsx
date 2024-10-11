import React from "react";
import styles from "./servicesBlock.module.scss";
import activityImg1 from "../../../assets/activityImg1.svg";
import activityImg2 from "../../../assets/activityImg2.svg";
import activityImg3 from "../../../assets/activityImg3.svg";

const Services = () => {
    return (
        <>
            <div className={styles.serviceBlock}>
                <div className={styles.serviceBlockWrapper}>
                    <h1>
                        ПАЛАТА ОКАЗЫВАЕТ СОДЕЙСТВИЕ В РАЗВИТИИ КОРПОРАТИВНОГО
                        УПРАВЛЕНИЯ
                    </h1>
                    <div className={styles.serviceBlockItem}>
                        <img src={activityImg1} alt="activityImg" />
                        <div className={styles.serviceBlockInfo}>
                            <h3>
                                ПОВЫШЕНИЕ КВАЛИФИКАЦИИ ПО КОРПОРАТИВНОМУ
                                УПРАВЛЕНИЮ
                            </h3>
                            <p>
                                Пройдите курсы повышения квалификации в области
                                корпоративного управления. Чтобы понять,
                                насколько вам необходимы наши курсы, вы можете
                                пройти онлайн-анкетирование, которое скоро
                                появится на нашем сайте.
                                <br />
                                <br />
                                Основная задача Палаты - стандартизация знаний о
                                корпоративном управлении с выдачей сертификатов
                                соответствия различным видам деятельности
                                корпоративного управления.
                            </p>
                        </div>
                    </div>
                    <div className={styles.serviceBlockItem_middle}>
                        <div className={styles.serviceBlockInfo}>
                            <h3>
                                ПОВЫШЕНИЕ КАЧЕСТВА КОРПОРАТИВНОГО УПРАВЛЕНИЯ
                            </h3>
                            <p>
                                Получите бесплатную консультацию и
                                экспресс-диагностику вашего предприятия на
                                соответствие принципам и рекомендуемым практикам
                                корпоративного управления ОЭСР.
                                <br />
                                <br />
                                Разработка и внедрение корпоративного кодекса
                                нашими экспертами - верный шаг к обеспечению
                                ответственного, прозрачного и эффективного
                                менеджмента.
                            </p>
                        </div>
                        <img src={activityImg2} alt="activityImg" />
                    </div>
                    <div className={styles.serviceBlockItem}>
                        <img src={activityImg3} alt="activityImg" />
                        <div className={styles.serviceBlockInfo}>
                            <h3>ПРОДВИЖЕНИЕ РЕЗИДЕНТОВ ПАЛАТЫ</h3>
                            <p>
                                Выдвижение и представление компетентных
                                профессионалов с хорошей репутацией на позиции
                                независимых директоров, членов правления и
                                других органов управления компаний. ​
                                <br />
                                <br />
                                Резиденты Палаты выступают в СМИ как эксперты по
                                корпоративному управлению и дают свои ценные
                                рекомендации по развитию компаний.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
