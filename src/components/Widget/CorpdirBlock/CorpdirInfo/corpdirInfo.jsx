import React from "react";
import styles from "./corpdirInfo.module.scss";
import imgInfo_1 from "../../../../assets/courses/assets cources/imgInfo_1.svg";
import imgInfo_2 from "../../../../assets/courses/assets cources/imgInfo_2.svg";
import imgInfo_3 from "../../../../assets/courses/assets cources/imgInfo_3.svg";
import imgInfo_4 from "../../../../assets/courses/assets cources/imgInfo_4.svg";

const CorpdirInfo = () => {
    return (
        <div className={styles.corpdirInfo}>
            <div className={styles.infoItem}>
                <img src={imgInfo_1} alt="infoImginfoImg" />
                <h3>Высокое качество</h3>
                <p>
                    Программа подготовлена в соответствии с методологией IFC в
                    рамках Интегрированной программы IFC по развитию практик ESG
                    в Центральной Азии
                </p>
            </div>
            <div className={styles.infoItem}>
                <img src={imgInfo_2} alt="infoImg" />
                <h3>Сообщество профессионалов</h3>
                <p>
                    Образовательная программа - место формирования
                    профессионального комьюните из слушателей и экспертов
                    программы
                </p>
            </div>
            <div className={styles.infoItem}>
                <img src={imgInfo_3} alt="infoImg" />
                <h3>г. Бишкек, Отель «Evropa»</h3>
                <p>
                    Программа пройдёт в очном формате комфортабельном деловом
                    пространсте
                </p>
            </div>
            <div className={styles.infoItem}>
                <img src={imgInfo_4} alt="infoImg" />
                <h3>Сертификат</h3>
                <p>
                    Участникам, успешно прошедшим обучение и аттестацию, будет
                    выдан сертификат, подтверждающий их квалификацию в качестве
                    сертифицированного корпоративного директора
                </p>
            </div>
        </div>
    );
};

export default CorpdirInfo;
