import React from "react";
import styles from "./navLink.module.scss";

const navLink = (props) => {
    const {
        position = "headerTop",
        variant = "activatedHeader",
        children,
    } = props;

    return (
        <div
            className={`${styles.link} ${styles[variant]} ${styles[position]}`}>
            {children}
        </div>
    );
};

export default navLink;
