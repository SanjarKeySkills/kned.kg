import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
    const { size = "m", variant = "outlined", children } = props;

    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
            {children}
        </button>
    );
};

export default Button;
