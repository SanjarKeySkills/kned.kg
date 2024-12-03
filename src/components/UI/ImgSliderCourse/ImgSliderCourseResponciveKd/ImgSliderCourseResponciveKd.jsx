import React from "react";
import styles from "./imgSliderCourseResponciveKd.module.scss";
import ifc_logo from "../../../../assets/ifc-approbved_logo_horizontal.svg";

const ImgSliderCourseResponciveKd = () => {
    return (
        <>
            <div className={styles.ImgSliderCourseResponciveKd}>
                <div className={styles.ImgSliderCourseResponciveKdWrapper}>
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

export default ImgSliderCourseResponciveKd;
