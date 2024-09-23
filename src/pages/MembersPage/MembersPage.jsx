import React from "react";
import styles from "./MembersPage.module.scss";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import MembersItem from "../../components/Widget/MembersBlock/MembersContent/membersItem.jsx";
// import MemberCard from "../../components/Widget/MembersBlock/MemberCard/memberCard.jsx";
// import Members from "../../components/Widget/MembersBlock/Members/members.jsx";
// import membersData from "./MembersData.jsx";
// import Members from "../../components/Widget/MembersBlock/Members/members.jsx";

const MembersPage = () => {
    return (
        <>
            <HeroHeader />
            <div className={styles.welcome}>
                <div className={styles.welcomeWrapper}>
                    <h4>ЧЛЕНЫ ПАЛАТЫ</h4>
                    <p>
                        Используя лучшие практики корпоративного управления,
                        члены Палаты повышают эффективность деятельности
                        предприятий, улучшают коммерческие, финансовые и
                        производственные показатели компаний, способствуют росту
                        их стоимости в целях привлечения инвесторов, а также
                        защиты прав и интересов акционеров.
                    </p>
                </div>
            </div>

            <MembersItem />
            {/* <MemberCard /> */}
            {/* <Members membersData={membersData} /> */}

            {/* 
                <h4>ДЕЙСТВИТЕЛЬНЫЕ ЧЛЕНЫ ПАЛАТЫ</h4>
                <h4>АССОЦИАТИВНЫЕ ЧЛЕНЫ ПАЛАТЫ</h4> */}
        </>
    );
};

export default MembersPage;
