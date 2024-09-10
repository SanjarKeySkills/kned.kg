import React from "react";
import styles from "./index.module.scss";
import photo1 from "../../../assets/council1.svg";
import photo2 from "../../../assets/council2.svg";
import photo3 from "../../../assets/council3.svg";
import photo4 from "../../../assets/council4.svg";
import photo5 from "../../../assets/council5.svg";
import photo6 from "../../../assets/auditor1.svg";
import photo7 from "../../../assets/executive1.svg";
import photo8 from "../../../assets/executive2.svg";
import photo9 from "../../../assets/vacant.svg";
import photo10 from "../../../assets/corpSec.svg";

const governance = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.councilTitle}>СОВЕТ ПАЛАТЫ</h1>
            <div className={styles.boardWrappper}>
                <div>
                    <a href="#">
                        <img src={photo1} alt="Zhanna Toktosunova" />
                    </a>
                    <h1>Жанна Токтосунова</h1>
                    <span>Председатель Совета Палаты</span>
                </div>
                <div>
                    <a href="#">
                        <img src={photo2} alt="Kubanych Abdraimov" />
                    </a>
                    <h1>Кубаныч Абдраимов</h1>
                    <span>Член Совета Палаты</span>
                </div>
                <div>
                    <a href="#">
                        <img src={photo3} alt="Aaly Umankulov" />
                    </a>
                    <h1>Аалы Уманкулов</h1>
                    <span>Член Совета Палаты</span>
                </div>
                <div>
                    <a href="#">
                        <img src={photo5} alt="Chinara Moldazhanova" />
                    </a>
                    <h1>Чинара Молдажанова</h1>
                    <span>Член Совета Палаты</span>
                </div>
                <div>
                    <a href="#">
                        <img src={photo4} alt="Meerim Askarbekova" />
                    </a>
                    <h1>Мээрим Аскарбекова</h1>
                    <span>Член Совета Палаты</span>
                </div>
            </div>
            <h1 className={styles.councilTitle}>РЕВИЗОР ПАЛАТЫ</h1>
            <div className={styles.boardWrappper}>
                <div>
                    <a href="#">
                        <img src={photo6} alt="Gulnara Arymkulova" />
                    </a>
                    <h1>Гульнара Арымкулова</h1>
                    <span>Ревизор Палаты</span>
                </div>
            </div>
            <h1 className={styles.councilTitle}>ПРЕЗИДИУМ ПАЛАТЫ</h1>
            <div className={styles.boardWrappper}>
                <div>
                    <a href="#">
                        <img src={photo7} alt="Seitek Dushenaliev" />
                    </a>
                    <h1>Сейтек Душеналиев</h1>
                    <span>Президент Палаты</span>
                </div>
                <div>
                    <a href="#">
                        <img src={photo8} alt="Ayzhan Mambetova" />
                    </a>
                    <h1>Айжан Мамбеталиева</h1>
                    <span>Вице-Президент Палаты</span>
                </div>
                <div>
                    <a href="#">
                        <img src={photo9} alt="vacant" />
                    </a>
                    <h1>Должность вакантна</h1>
                    <span>Вице-Президент Палаты</span>
                </div>
            </div>
            <h1 className={styles.councilTitle}>
                КОРПОРАТИВНЫЙ СЕКРЕТАРЬ ПАЛАТЫ
            </h1>
            <div>
                <a href="#">
                    <img src={photo10} alt="Cholponbay uulu Nursultan" />
                </a>
                <h1>Чолпондай уулу Нурсултан</h1>
                <span>Корпоративный секретарь Палаты</span>
            </div>
        </div>
    );
};

export default governance;
