import React from "react";
import styles from "./imgSliderCourseResponciveKs.module.scss";
import ifc_logo from "../../../../assets/ifc-approbved_logo_horizontal.svg";

const ImgSliderCourseResponciveKs = () => {
    return (
        <>
            <div className={styles.ImgSliderCourseResponciveKs}>
                <div className={styles.ImgSliderCourseResponciveKsWrapper}>
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

export default ImgSliderCourseResponciveKs;
