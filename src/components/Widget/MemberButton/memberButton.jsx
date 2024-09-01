import React from "react";
import Button from "../Button/Button.jsx";
import styles from "../MemberButton/memberButton.module.scss";

const memberButton = () => {
    return (
        <div className={styles.container}>
            <Button
                size="m"
                variant="mOutlined"
                children="СТАТЬ ЧЛЕНОМ ПАЛАТЫ"
            />
        </div>
    );
};

export default memberButton;
