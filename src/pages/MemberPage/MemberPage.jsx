import React from "react";
import styles from "./memberPage.module.scss";
import memberImage from "../../assets/seitek_dushenaliev.png";

const MemberPage = () => {
    return (
        <div className={styles.memberPage}>
            <div className={styles.memberPageWrapper}>
                <div className={styles.memberTitle}>
                    <img src={memberImage} alt="memberPageImage" />
                    <h2 className={styles.memberName}>Сейтек Душеналиев</h2>
                </div>
            </div>
        </div>
    );
};

export default MemberPage;
