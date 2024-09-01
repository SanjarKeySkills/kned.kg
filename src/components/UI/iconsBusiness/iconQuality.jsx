import React from "react";
import styles from "./icon.module.scss";
import logo_quality from "../../../assets/icon_quality.svg";

const iconQuality = () => {
    return (
        <img className={styles.icon} src={logo_quality} alt="icon_quality" />
    );
};

export default iconQuality;
