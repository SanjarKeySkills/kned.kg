import React from "react";
import styles from "./aboutBlock.module.scss";
import image1 from "../../../assets/aboutImage1.svg";
import image2 from "../../../assets/aboutImage2.svg";
import image3 from "../../../assets/aboutImage3.svg";
import logoKned from "../../../assets/logoKned.svg";

const about = () => {
    return (
        <div className={styles.aboutBlock}>
            <div className={styles.missonWrapper}>
                <h3>Год основания:</h3>
                <p>2021</p>
                <br />
                <br />
                <h3>Миссия:</h3>
                <p>
                    Повышать уровень корпоративного управления, применяя
                    международный опыт и лучшие практики, способствуя развитию
                    экономики Кыргызской Республики.
                </p>
                <br />
                <br />
                <h3>О Палате:</h3>
                <p>
                    Палата Независимых Директоров Кыргызской Республики это
                    сообщество профессионалов имеющих опыт работы в советах
                    директоров, наблюдательных советах или на руководящих
                    позициях национальных или международных компаний. Имеющих
                    положительную профессиональную репутацию.
                    <br />
                    <br />
                    Идея создания Палаты началась с Клуба независимых директоров
                    объединившей инициативную группу профессионалов для обмена
                    опытом и знаниями в области корпоративного управления. В
                    процессе дискуссий и обсуждения между членами Клуба была
                    определена потребность в создании профессиональной
                    организации независимых директоров, которая позволила бы
                    объединить.
                </p>
                <div className={styles.imgAboutWrapper}>
                    <img
                        className={styles.imgAbout}
                        src={image1}
                        alt="imgAbout1"
                    />
                    <img
                        className={styles.imgAbout}
                        src={image2}
                        alt="imgAbout2"
                    />
                    <img
                        className={styles.imgAbout}
                        src={image3}
                        alt="imgAbout3"
                    />
                </div>
            </div>
            <div className={styles.goalsWrapper}>
                <h2>ЦЕЛИ ПАЛАТЫ</h2>
                <div className={styles.goalsItemsWrapper}>
                    <div className={styles.goals}>
                        <div className={styles.goal}>
                            <div className={styles.logoAndTitle}>
                                <img src={logoKned} alt="logoKned" />
                                <h3>ОБМЕН ОПЫТОМ</h3>
                            </div>
                            <p>
                                Обмен опытом, содействие в повышении
                                квалификации в области корпоративного
                                управления, создания условий для
                                профессионального роста членов Палаты.
                            </p>
                        </div>
                        <div className={styles.goal}>
                            <div className={styles.logoAndTitle}>
                                <img src={logoKned} alt="logoKned" />
                                <h3>ПОВЫШЕНИЕ КАЧЕСТВА</h3>
                            </div>
                            <p>
                                Привлечение экспертов Палаты для повышения
                                качества корпоративного управления отечественных
                                компаний в соответствии с лучшими международными
                                стандартами и практиками.
                            </p>
                        </div>
                    </div>
                    <div className={styles.goals}>
                        <div className={styles.goal}>
                            <div className={styles.logoAndTitle}>
                                <img src={logoKned} alt="logoKned" />
                                <h3>ВНЕДРЕНИЕ КОРПОРАТИВНОГО УПРАВЛЕНИЯ</h3>
                            </div>
                            <p>
                                Внедрение системы корпоративного управления в
                                компаниях с частным и государственным капиталом.
                            </p>
                        </div>
                        <div className={styles.goal}>
                            <div className={styles.logoAndTitle}>
                                <img src={logoKned} alt="logoKned" />
                                <h3>ФОРМИРОВАНИЕ СОВЕТОВ</h3>
                            </div>
                            <p>
                                Помощь в формирвоании советов директоров и
                                подборе их членов, формировании наблюдательных,
                                попечительских советов и комитетов.
                            </p>
                        </div>
                    </div>
                    <div className={styles.goals}>
                        <div className={styles.goal}>
                            <div className={styles.logoAndTitle}>
                                <img src={logoKned} alt="logoKned" />
                                <h3>ПРОДВИЖЕНИЕ ЧЛЕНОВ ПАЛАТЫ</h3>
                            </div>
                            <p>
                                Продвижение членов Палаты в качестве независимых
                                директоров в наблюдательных и попечительских
                                советов, советов директоров компаний (в том
                                числе с государственным участием),
                                некоммерческих организаций, благотворительных
                                фондов.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default about;
