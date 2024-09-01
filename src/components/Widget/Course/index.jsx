import React from "react";
import styles from "./course.module.scss";
import Button from "../Button/Button";
import imageLeft from "../../../assets/courseLeft.svg";
import imageRight from "../../../assets/courseRight.svg";

const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.courseInfo}>
                <img
                    className={styles.image}
                    src={imageLeft}
                    alt="img_of_course_IFC"
                />
                <div className={styles.courseTitleButton}>
                    <h2 className={styles.courseTitle}>
                        СЕРТИФИКАЦИОННЫЙ КУРС КОРПОРАТИВНЫЙ ДИРЕКТОР
                    </h2>
                    <Button
                        size="course"
                        variant="outlined"
                        children="ЗАПИСАТЬСЯ НА КУРС"
                    />
                </div>
            </div>
            <div className={styles.courseInfo}>
                <img
                    className={styles.image}
                    src={imageRight}
                    alt="img_of_course_IFC"
                />
                <div className={styles.courseTitleButton}>
                    <h2 className={styles.courseTitle}>
                        СЕРТИФИКАЦИОННЫЙ КУРС КОРПОРАТИВНЫЙ СЕКРЕТАРЬ
                    </h2>
                    <Button
                        size="course"
                        variant="outlined"
                        children="ЗАПИСАТЬСЯ НА КУРС"
                    />
                </div>
            </div>
        </div>
    );
};

export default index;
