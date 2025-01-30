import React from "react";
import styles from "./participants.module.scss";
import course_1 from "../../../../assets/courses/assets cources/course_1.svg";
import course_2 from "../../../../assets/courses/assets cources/course_2.svg";
import course_3 from "../../../../assets/courses/assets cources/course_3.svg";
import course_4 from "../../../../assets/courses/assets cources/course_4.svg";

const Participants = () => {
    return (
        <div className={styles.participants}>
            <div className={styles.participantsContainer}>
                <h2 className={styles.participantsTitle}>
                    Кому подойдёт этот курс:
                </h2>
                <div className={styles.itemWrapper}>
                    <div className={styles.participantsItem}>
                        <img
                            src={course_1}
                            alt="imgItem"
                            className={styles.participantsImg}
                        />
                        <h3 className={styles.itemAnnotation}>
                            ЧЛЕНАМ НАБЛЮДАТЕЛЬНЫХ СОВЕТОВ / СОВЕТОВ ДИРЕКТОРОВ
                        </h3>
                    </div>
                    <div className={styles.participantsItem}>
                        <img
                            src={course_2}
                            alt="imgItem"
                            className={styles.participantsImg}
                        />
                        <h3 className={styles.itemAnnotation}>
                            ЧЛЕНАМ ПРАВЛЕНИЯ, КОТОРЫЕ ХОТЯТ УЛУЧШАТЬ СИСТЕМУ
                            КОРПОРАТИВНОГО УПРАВЛЕНИЯ В КОМПАНИИ
                        </h3>
                    </div>
                    <div className={styles.participantsItem}>
                        <img
                            src={course_3}
                            alt="imgItem"
                            className={styles.participantsImg}
                        />
                        <h3 className={styles.itemAnnotation}>
                            СОБСТВЕННИКАМ БИЗНЕСА И ТОП-МЕНЕДЖЕРАМ КОМПАНИЙ
                        </h3>
                    </div>
                    <div className={styles.participantsItem}>
                        <img
                            src={course_4}
                            alt="imgItem"
                            className={styles.participantsImg}
                        />
                        <h3 className={styles.itemAnnotation}>
                            ТОП-МЕНЕДЖМЕНТУ УПРАВЛЕНЦАМ, КТО ХОЧЕТ ПЕРЕЙТИ В
                            СОВЕТ ДИРЕКТОРОВ
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Participants;
