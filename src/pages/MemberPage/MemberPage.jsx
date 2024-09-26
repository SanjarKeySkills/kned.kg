import React from "react";
import styles from "./memberPage.module.scss";
import memberImage from "../../assets/seitek_dushenaliev.png";

const MemberPage = () => {
    return (
        <div className={styles.memberPage}>
            <div className={styles.memberPageWrapper}>
                <div className={styles.memberTitle}>
                    <img src={memberImage} alt="memberPageImage" />
                    <h2 className={styles.memberName}>Сейтек Душеналиев</h2>
                </div>

                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Опыт работы</div>
                    <div className={styles.memberDataDescription}>
                        Более 10 лет опыта в банковской сфере и 17 лет - в
                        газотранспортной отрасли. С 2007 по 2008 год -
                        заместитель генерального директора по экономике и
                        финансам СП ОсОО «КырКазГаз». С 2014 по 2017 год -
                        независимый член совета директоров, член комитета по
                        аудиту ОАО «Бакай Банк». С 2018 по 2021 год -
                        независимый член совета директоров, председатель совета
                        директоров, председатель комитета по аудиту и комитета
                        по назначениям и вознаграждениям, член комитета по
                        управлению рисками и комитета по проблемным кредитам ОАО
                        «Керемет Банк». С 2010 года - представитель АО
                        «КазТрансГаз» в КР.
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Образование</div>
                    <div className={styles.memberDataDescription}>
                        Кыргызский государственный университет строительства,
                        транспорта и архитектуры, специальность - «международные
                        экономические отношения» (1998).  Московская
                        международная высшая школа бизнеса МИРБИС,
                        Кыргызско-Российский Славянский университет,
                        квалификация «мастер делового администрирования» со
                        специализацией «управление нефтегазовым бизнесом»
                        (2008).
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Компетенции</div>
                    <div className={styles.memberDataDescription}>
                        Финансы  Внутренний аудит  Стратегическое планирование 
                        Внедрение систем корпоративного управления и внутреннего
                        контроля.
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Сертификаты</div>
                    <div className={styles.memberDataDescription}>
                        Пока пусто )))
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberPage;
