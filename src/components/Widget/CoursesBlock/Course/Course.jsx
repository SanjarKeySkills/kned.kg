import React from "react";
import styles from "./course.module.scss";
import imageLeft from "../../../../assets/courseLeft.svg";
import imageRight from "../../../../assets/courseRight.svg";
import Button from "../../../UI/Button/button.jsx";

const Course = () => {
    return (
        <div className={styles.course}>
            <div className={styles.courseWrapper}>
                <div className={styles.courseInfo}>
                    <img src={imageLeft} alt="img_of_course_IFC1" />
                    <h2>
                        СЕРТИФИКАЦИОННЫЙ КУРС <br /> КОРПОРАТИВНЫЙ ДИРЕКТОР
                    </h2>
                    <Button size="course" variant="outlined">
                        ЗАПИСАТЬСЯ НА КУРС
                    </Button>
                </div>
                <div className={styles.courseInfo}>
                    <img src={imageRight} alt="img_of_course_IFC2" />
                    <h2>
                        СЕРТИФИКАЦИОННЫЙ КУРС <br /> КОРПОРАТИВНЫЙ СЕКРЕТАРЬ
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
