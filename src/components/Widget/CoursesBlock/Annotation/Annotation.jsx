import React from "react";
import styles from "./annotation.module.scss";

const Annotation = () => {
    return (
        <div className={styles.annotation}>
            <div className={styles.annotationWrapper}>
                <h2>курсы и тренинги палаты</h2>
                <p className={styles.titleAnnotation}>
                    Палата независимых директоров Кыргызской Республики проводит
                    и организует профессиональные сертификационые
                    образовательные курсы в области корпоративного управления и
                    сопутствующих дисциплин. <br /> <br /> Передовые знания и
                    новейшие практики корпоративного управления преподаются
                    эффективными тренерами с обширным международным опытом в
                    области корпоративного управления.
                </p>
            </div>
        </div>
    );
};

export default Annotation;
