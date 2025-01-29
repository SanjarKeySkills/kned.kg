import React, { useEffect } from "react";
import styles from "./MembersPage.module.scss";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import MemberCards from "../../components/Widget/MembersBlock/MemberCards.jsx";

const MembersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroHeader />
            <div className={styles.welcome}>
                <div className={styles.welcomeWrapper}>
                    <h4>ЭКСПЕРТЫ ПАЛАТЫ</h4>
                    <p>
                        Используя лучшие практики корпоративного управления,
                        члены Палаты повышают эффективность деятельности
                        компаний, улучшают коммерческие, финансовые и
                        производственные показатели компаний, способствуют росту
                        их стоимости в целях привлечения инвесторов, а также
                        защиты прав и интересов акционеров.
                    </p>
                </div>
            </div>

            <MemberCards />
        </>
    );
};

export default MembersPage;
