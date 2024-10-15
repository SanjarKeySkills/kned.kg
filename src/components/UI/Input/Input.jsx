import React from "react";
import styles from "./input.module.scss";

const Input = (props) => {
    const { type = "text" } = props;

    return <input type={type} className={styles.active} />;
};
export { Input };
