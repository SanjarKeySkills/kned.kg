import React from "react";
import styles from "./membersGenerator.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

function MembersGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props
    // - и его ключи data, и type.
    return (
        <div className={styles.cardList}>
            {/* // <div className={clsx(styles.cardList, styles.img, { [styles.active]: true })}> */}
            {data.map((member) => (
                <div key={member.id} className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <h2 className={styles.memberName}>{member.name}</h2>
                        <p className={styles.annotationName}>
                            {member.annotation}
                        </p>
                        <Link to={`/member/${type}/${member.id}`}>РЕЗЮМЕ</Link>
                        {/* при клике перекидвает сначала на member потом на type 
						потом по id и после этого вся информция записывается в URL
						и после этого начинается подгружаться компонент memberPage
						*/}
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
