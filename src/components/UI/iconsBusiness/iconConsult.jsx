import React from "react";
import styles from "./icon.module.scss";
import logo_consult from "../../../assets/icon_consult.svg";

const iconCosult = () => {
    return (
        <img className={styles.icon} src={logo_consult} alt="icon_consult" />
    );
};

export default iconCosult;
