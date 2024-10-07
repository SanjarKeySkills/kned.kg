import React, { useEffect } from "react";
import styles from "./memberPage.module.scss";
import { useParams } from "react-router-dom";
import honorMembersData from "../../components/Widget/MembersBlock/MemberCard/honorMembersData.js";
import activeMembersData from "../../components/Widget/MembersBlock/MemberCard/activeMembersData.js";
import associatedMembersData from "../../components/Widget/MembersBlock/MemberCard/associatedMembersData.js";

const MemberPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id, type } = useParams();
    // возвращает объект в к-р есть информация из УРЛ, там id,
    // по id будет тот, придет id того мембера на кого кликнули

    const mapData = {
        honor: honorMembersData,
        active: activeMembersData,
        associated: associatedMembersData,
    };
    // создали об. чтоб получить нудный массив
    // теперь нужно найти нужного мембера

    const member = mapData[type].find((member) => member.id === id);
    // получаем того мембера, у кого такой id тот и мембер придет в нашу константу.
    // вместо type -  встанет один из трех

    return (
        <div className={styles.memberPage}>
            <div className={styles.memberPageWrapper}>
                <div className={styles.memberTitle}>
                    <img src={member.image} alt="memberPageImage" />
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
