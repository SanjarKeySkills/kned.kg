import React from "react";
import styles from "./icon.module.scss";
import logo_certificate from "../../UI/IconsBusiness/iconCertificate.jsx";

const icon_certificate = () => {
    return (
        <img
            className={styles.icon}
            src={logo_certificate}
            alt="icon_certificate"
        />
    );
};

export default icon_certificate;
