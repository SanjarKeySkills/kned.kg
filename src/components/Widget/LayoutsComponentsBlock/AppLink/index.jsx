import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const AppLink = (props) => {
    const {
        to = "",
        position = "headerTop",
        variant = "activatedHeader",
        children,
    } = props;

    return (
        <Link
            to={to}
            className={`${styles.link} ${styles[variant]} ${styles[position]}`}>
            {children}
        </Link>
    );
};

export default AppLink;
