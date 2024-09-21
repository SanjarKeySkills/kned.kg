import React from "react";
import styles from "./welcomeBlock.module.scss";
import iconCertificate from "../../../../assets/icon_certificate.svg";
import iconQuality from "../../../../assets/icon_quality.svg";
import iconMembers from "../../../../assets/icon_member.svg";
import iconConsult from "../../../../assets/icon_consult.svg";

const index = () => {
    return (
        <div className={styles.wrapperWelcome}>
            <div className={styles.welcomeWrapper}>
                <h4>ДОБРО ПОЖАЛОВАТЬ В ПАЛАТУ НЕЗАВИСИМЫХ ДИРЕКТОРОВ</h4>
                <p>
                    <b>Палата Независимых Директоров Кыргызской Республики</b> -
                    это экспертное сообщество, объединение руководителей и
                    экспертов, наленное на развитие национальной экономики через
                    реализацию потенциала системы корпоративного управления.
                    <tr />
                    Члены палаты применяют лучшие стандарты и парктики
                    корпоративного управления для повышения эффективности
                    детельности компаний, роста стоимости компаний, защиты прав
                    и интересов акционеров.
                </p>
            </div>
            <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                    <img src={iconCertificate} alt="IconCertificate" />
                    <h3>
                        ПОВЫШЕНИЕ КВАЛИФИКАЦИИ В ОБЛАСТИ КОРПОРАТИВНОГО
                        УПРАВЛЕНИЯ
                    </h3>
                    <p>
                        Предлагаем стандартизировать знания о корпоративном
                        управлении с выдачей сертификатов соответствия.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={iconQuality} alt="IconQuality" />
                    <h3>ПОВЫШЕНИЕ КАЧЕСТВА КОРПОРАТИВНОГО УПРАВЛЕНИЯ</h3>
                    <p>
                        Консультации собственников компаний на соответствие
                        принципам и рекомендуемым практикам корпоративного
                        управления ОЭСР.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={iconMembers} alt="IconMembers" />
                    <h3>ПРОДВИЖЕНИЕ РЕЗИДЕНТОВ ПАЛАТЫ</h3>
                    <p>
                        Выдвижение и представление компетентных профессионалов с
                        хорошей репутацией на позиции независимых директоров,
                        членов правления и других органов управления компаний.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={iconConsult} alt="IconConsult" />
                    <h3>КОНСУЛЬТАЦИИ ДЛЯ СОБСТВЕННИКОВ БИЗНЕСА</h3>
                    <p>
                        Консультируем собствеников компаний, советы директоров и
                        их членов по различным вопросам в области корпоративного
                        управления.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default index;
