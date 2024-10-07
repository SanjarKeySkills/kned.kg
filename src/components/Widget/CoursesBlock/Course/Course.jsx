import React from "react";
import styles from "./course.module.scss";
import imageLeft from "../../../../assets/courseLeft.svg";
import imageRight from "../../../../assets/courseRight.svg";
import Button from "../../../UI/Button/button.jsx";

const Course = () => {
    return (
        <div className={styles.course}>
            <div className={styles.courseInfo}>
                <img
                    className={styles.image}
                    src={imageLeft}
                    alt="img_of_course_IFC"
                />
                <h2 className={styles.courseTitle}>
                    СЕРТИФИКАЦИОННЫЙ КУРС <br /> КОРПОРАТИВНЫЙ ДИРЕКТОР
                </h2>
                <div className={styles.courseTitleButton}>
                    <Button size="course" variant="outlined">
                        ЗАПИСАТЬСЯ НА КУРС
                    </Button>
                </div>
            </div>
            <div className={styles.courseInfo}>
                <img
                    className={styles.image}
                    src={imageRight}
                    alt="img_of_course_IFC"
                />
                <h2 className={styles.courseTitle}>
                    СЕРТИФИКАЦИОННЫЙ КУРС <br /> КОРПОРАТИВНЫЙ СЕКРЕТАРЬ
                </h2>
                <div className={styles.courseTitleButton}>
                    <Button size="course" variant="outlined">
                        ЗАПИСАТЬСЯ НА КУРС
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Course;
