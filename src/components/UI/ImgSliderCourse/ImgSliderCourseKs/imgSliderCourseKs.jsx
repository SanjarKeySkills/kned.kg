import React from "react";
import styles from "./imgSliderCourseKs.module.scss";
import ifc_logo from "../../../../assets/ifc-approved_logo.svg";

const imgSliderCourseKs = () => {
    return (
        <>
            <div className={styles.imgSliderCourse}>
                <div className={styles.imgSliderCourseWrapper}>
                    <a href="https://www.ifc.org/en/home">
                        <img
                            src={ifc_logo}
                            alt="ifcLogo"
                            className={styles.ifc_logo}
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default imgSliderCourseKs;
