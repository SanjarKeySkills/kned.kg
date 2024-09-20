import React from "react";
import Button from "../Button/index.jsx";
import styles from "./membersButton.module.scss";

const memberButton = () => {
    return (
        <div className={styles.container}>
            <Button size="m" variant="mOutlined">
                СТАТЬ ЧЛЕНОМ ПАЛАТЫ
            </Button>
        </div>
    );
};

export default memberButton;
