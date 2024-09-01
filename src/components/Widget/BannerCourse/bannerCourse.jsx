import React from "react";
import banner from "../../../assets/bannerKd.svg";
import styles from "./bannerCourse.module.scss";
import Button from "../../Widget/Button/Button.jsx";

const bannerCourse = () => {
    return (
        <div className={styles.container}>
            <Button size="arrowLeft" variant="arrowOutlined" />
            <img src={banner} alt="banner_course_IFC" />
            <Button size="arrowRight" variant="arrowOutlined" />
        </div>
    );
};

export default bannerCourse;
