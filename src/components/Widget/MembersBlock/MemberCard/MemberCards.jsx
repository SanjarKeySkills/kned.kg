import React from "react";
import styles from "./memberCards.module.scss";
import MembersGenerator from "./MembersGenerator.jsx";
import HonorMembersData from "./honorMembersData.js";
import ActiveMembersData from "./activeMembersData.js";
import AssociatedMembersData from "./associatedMembersData.js";

function MemberCards() {
    return (
        <>
            <div className={styles.membersItem}>
                <h4 className={styles.membersItemWrapper}>ДЕЙСТВИТЕЛЬНЫЕ</h4>
                <div className={styles.cardList}>
                    <MembersGenerator data={ActiveMembersData} type="active" />
                </div>
            </div>
            <div className={styles.membersItem}>
                <h4 className={styles.membersItemWrapper}>АССОЦИИРОВАННЫЕ</h4>
                <div className={styles.cardList}>
                    <MembersGenerator
                        data={AssociatedMembersData}
                        type="associated"
                    />
                </div>
            </div>
            <div className={styles.membersItem}>
                <h4 className={styles.membersItemWrapper}>ПОЧЕТНЫЕ</h4>
                <div className={styles.cardList}>
                    <MembersGenerator data={HonorMembersData} type="honor" />
                </div>
            </div>
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
