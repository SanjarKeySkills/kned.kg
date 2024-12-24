import React from "react";
import styles from "./course.module.scss";
import { Link } from "react-router-dom";
import imageLeft from "../../../../assets/courseLeft.svg";
import imageRight from "../../../../assets/courseRight.svg";

const Course = () => {
    return (
        <div className={styles.course}>
            <div className={styles.courseWrapper}>
                <div className={styles.courseInfo}>
                    <img src={imageLeft} alt="img_of_course_IFC1" />
                    <h2>
                        СЕРТИФИКАЦИОННЫЙ КУРС <br /> КОРПОРАТИВНЫЙ ДИРЕКТОР
                    </h2>
                    <Link to="/contact" className={styles.courseBtn}>
                        ЗАПИСАТЬСЯ НА КУРС
                    </Link>
                </div>
                <div className={styles.courseInfo}>
                    <img src={imageRight} alt="img_of_course_IFC2" />
                    <h2>
                        СЕРТИФИКАЦИОННЫЙ КУРС <br /> КОРПОРАТИВНЫЙ СЕКРЕТАРЬ
                    </h2>
                    <Link to="/contact" className={styles.courseBtn}>
                        ЗАПИСАТЬСЯ НА КУРС
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;
