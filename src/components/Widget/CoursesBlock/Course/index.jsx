import React from "react";
import styles from "./index.module.scss";
import Button from "../../LayoutsComponentsBlock/Button/index.jsx";
import imageLeft from "../../../../assets/courseLeft.svg";
import imageRight from "../../../../assets/courseRight.svg";

const Course = () => {
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
                <div className={styles.courseTitleButton}>
                    <h2 className={styles.courseTitle}>
                        СЕРТИФИКАЦИОННЫЙ КУРС КОРПОРАТИВНЫЙ СЕКРЕТАРЬ
                    </h2>
                    <Button size="course" variant="outlined">
                        ЗАПИСАТЬСЯ НА КУРС
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Course;
