import React from "react";
import styles from "./membersGenerator.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

function MembersGenerator({ props }) {
    return (
        <div className={styles.cardList}>
            {/* // <div className={clsx(styles.cardList, styles.img, { [styles.active]: true })}> */}
            {props.map((member) => (
                <div key={member.id} className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <h2 className={styles.memberName}>{member.name}</h2>
                        <p className={styles.annotationName}>
                            {member.annotation}
                        </p>
                        <Link to={`/member/${member.id}`}>РЕЗЮМЕ</Link>
                    </div>
                    <img
                        className={styles.memberImg}
                        src={member.image}
                        alt={member.name}
                    />
                </div>
            ))}
        </div>
    );
}

export default MembersGenerator;
