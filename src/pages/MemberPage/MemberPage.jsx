import React from "react";
import styles from "./memberPage.module.scss";
import memberImage from "../../assets/seitek_dushenaliev.png";
import { useParams } from "react-router-dom";
import honorMembersData from "../../components/Widget/MembersBlock/MemberCard/honorMembersData.js";

const MemberPage = () => {
    const { id } = useParams();
    const member = honorMembersData.find((member) => member.id === id);

    return (
        <div className={styles.memberPage}>
            <div className={styles.memberPageWrapper}>
                <div className={styles.memberTitle}>
                    <img src={memberImage} alt="memberPageImage" />
                    <h2 className={styles.memberName}>{member.name}</h2>
                </div>

                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Опыт работы</div>
                    <div className={styles.memberDataDescription}>
                        {member.annotation}
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Образование</div>
                    <div className={styles.memberDataDescription}>
                        {member.edu}
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Компетенции</div>
                    <div className={styles.memberDataDescription}>
                        {member.competence}
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Сертификаты</div>
                    <div className={styles.memberDataDescription}>
                        {member.sertif}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberPage;
