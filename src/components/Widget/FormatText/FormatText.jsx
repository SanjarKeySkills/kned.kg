import React from "react";
import styles from "./formatText.module.scss";

const FormatText = ({ text }) => {
    return (
        <div>
            {text.split("\n").map((line, index) => (
                <p key={index} className={styles.additionalSpace}>
                    {line.trim()}
                </p>
            ))}
        </div>
    );
};

export default FormatText;
