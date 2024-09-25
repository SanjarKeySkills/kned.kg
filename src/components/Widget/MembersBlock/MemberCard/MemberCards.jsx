import React from "react";
import styles from "./memberCards.module.scss";
import MembersGenerator from "../membersGenerator/membersGenerator.jsx";
import membersData from "./HonorMembersData.jsx";
// import ActiveMembersData from "./ActiveMembersData.jsx";
// import AssociatedMembersData from "./AssociatedMembersData.jsx";

function MemberCards() {
    return (
        <>
            <div className={styles.membersItem}>
                <h4 className={styles.membersItemWrapper}>
                    ПОЧЕТНЫЕ ЧЛЕНЫ ПАЛАТЫ
                </h4>
                <div className={styles.cardList}>
                    <MembersGenerator props={membersData} />
                </div>
            </div>
            {/* <div className={styles.membersItem}>
                <h4 className={styles.membersItemWrapper}>
                    действительные члены палаты
                </h4>
                <div className={styles.cardList}>
                    <MembersGenerator props={ActiveMembersData} />
                </div>
            </div>
            <div className={styles.membersItem}>
                <h4 className={styles.membersItemWrapper}>
                    Ассоциированные члены палаты
                </h4>
                <div className={styles.cardList}>
                    <MembersGenerator props={AssociatedMembersData} />
                </div>
            </div> */}
        </>
    );
}

export default MemberCards;

//  <MemberItem
//      key={member.id}
//      name={member.name}
//      annotation={member.annotation}
//      image={member.image}
//      id={member.id}
//  />;
