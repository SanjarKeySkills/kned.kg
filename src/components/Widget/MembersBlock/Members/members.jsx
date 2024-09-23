import React from "react";
import MemberItem from "../MembersItem/membersItem.jsx";
import styles from "./members.module.scss";

function Members(props) {
    return (
        <div className={styles.container}>
            {props.membersData.map((member) => (
                <MemberItem
                    key={member.id}
                    name={member.name}
                    annotation={member.annotation}
                    image={member.image}
                    id={member.id}
                />
            ))}
        </div>
    );
}
export default Members;
