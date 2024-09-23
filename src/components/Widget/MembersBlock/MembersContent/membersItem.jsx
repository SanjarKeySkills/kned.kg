import React from "react";
import styles from "./membersItem.module.scss";
import image from "../../../../assets/kozhoshev.png";

function MemberItem(props) {
    return (
        <div className={styles.membersItem}>
            <h4 className={styles.membersItemWrapper}>ПОЧЕТНЫЕ ЧЛЕНЫ ПАЛАТЫ</h4>

            {/* <a href="#" to={`/members/${props.id}`}> */}
            <div className={styles.cardList}>
                <div className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <h2 className={styles.memberName}>
                            {/* {props.name} */}
                            Арзыбек Кожошев
                        </h2>
                        <p className={styles.annotationName}>
                            {/* {props.annotation} */}
                            Член Коллегии (министр) по энергетике и
                            инфраструктуре Евразийской экономической комиссии
                        </p>
                        <a href="#">РЕЗЮМЕ</a>
                    </div>
                    <img
                        className={styles.memberImg}
                        src={image}
                        // {props.image}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <h2 className={styles.memberName}>
                            {/* {props.name} */}
                            Арзыбек Кожошев
                        </h2>
                        <p className={styles.annotationName}>
                            {/* {props.annotation} */}
                            Член Коллегии (министр) по энергетике и
                            инфраструктуре Евразийской экономической комиссии
                        </p>
                        <a href="#">РЕЗЮМЕ</a>
                    </div>
                    <img
                        className={styles.memberImg}
                        src={image}
                        // {props.image}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <h2 className={styles.memberName}>
                            {/* {props.name} */}
                            Арзыбек Кожошев
                        </h2>
                        <p className={styles.annotationName}>
                            {/* {props.annotation} */}
                            Член Коллегии (министр) по энергетике и
                            инфраструктуре Евразийской экономической комиссии
                        </p>
                        <a href="#">РЕЗЮМЕ</a>
                    </div>

                    <img
                        className={styles.memberImg}
                        src={image}

                        // {props.image}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <h2 className={styles.memberName}>
                            {/* {props.name} */}
                            Арзыбек Кожошев
                        </h2>
                        <p className={styles.annotationName}>
                            {/* {props.annotation} */}
                            Член Коллегии (министр) по энергетике и
                            инфраструктуре Евразийской экономической комиссии
                        </p>
                        <a href="#">РЕЗЮМЕ</a>
                    </div>

                    <img
                        className={styles.memberImg}
                        src={image}

                        // {props.image}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardText}>
                        <h2 className={styles.memberName}>
                            {/* {props.name} */}
                            Арзыбек Кожошев
                        </h2>
                        <p className={styles.annotationName}>
                            {/* {props.annotation} */}
                            Член Коллегии (министр) по энергетике и
                            инфраструктуре Евразийской экономической комиссии
                        </p>
                        <a href="#">РЕЗЮМЕ</a>
                    </div>

                    <img
                        className={styles.memberImg}
                        src={image}

                        // {props.image}
                    />
                </div>
            </div>

            {/* </a> */}
        </div>
    );
}

export default MemberItem;
