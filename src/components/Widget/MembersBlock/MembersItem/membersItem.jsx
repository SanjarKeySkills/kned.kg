import React from "react";
import styles from "./membersItem.module.scss";

function MemberItem(props) {
    return (
        <>
            <a href="#" to={`/members/${props.id}`}>
                <div className={styles.containerт}>
                    <h2 className={styles.memberName}>{props.name}</h2>
                    <p className={styles.annotationName}>{props.annotation}</p>
                    <img className={styles.memberImg} src={props.image} />
                    <a href="#">РЕЗЮМЕ</a>
                </div>
            </a>
        </>
    );
}

export default MemberItem;
