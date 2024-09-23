import React from "react";
import styles from "./memberItem.module.scss";

function MemberItem(props) {
    return (
        <>
            {/* <div>
                <h1>ЧЛЕНЫ ПАЛАТЫ</h1>
                <p>
                    Используя лучшие практики корпоративного управления, члены
                    Палаты повышают эффективность деятельности предприятий,
                    улучшают коммерческие, финансовые и производственные
                    показатели компаний, способствуют росту их стоимости в целях
                    привлечения инвесторов, а также защиты прав и интересов
                    акционеров.
                </p>
                <h1>ПОЧЕТНЫЕ ЧЛЕНЫ ПАЛАТЫ</h1>
                <h1>ДЕЙСТВИТЕЛЬНЫЕ ЧЛЕНЫ ПАЛАТЫ</h1>
                <h1>АССОЦИАТИВНЫЕ ЧЛЕНЫ ПАЛАТЫ</h1>
            </div> */}

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
