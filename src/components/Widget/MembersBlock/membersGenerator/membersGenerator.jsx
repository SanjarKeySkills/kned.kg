import React from "react";
import styles from "./membersGenerator.module.scss";
import membersData from "./MembersData.jsx";

function MembersGenerator() {
    return (
        <div className={styles.cardList}>
            {membersData.map((member) => (
                <div key={member.id} className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <h2 className={styles.memberName}>{member.name}</h2>
                        <p className={styles.annotationName}>
                            {member.annotation}
                        </p>
                        <a href="#">РЕЗЮМЕ</a>
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

// ----

// <div className={styles.cardContainer}>
//     <div className={styles.cardText}>
//         <h2 className={styles.memberName}>
//             {/* {props.name} */}
//             Арзыбек Кожошев
//         </h2>
//         <p className={styles.annotationName}>
//             {/* {props.annotation} */}
//             Член Коллегии (министр) по энергетике и инфраструктуре Евразийской
//             экономической комиссии
//         </p>
//         <a href="#">РЕЗЮМЕ</a>
//     </div>
//     <img
//         className={styles.memberImg}
//         src={image}
//         // {props.image}
//     />
// </div>;
