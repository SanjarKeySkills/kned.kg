import React from "react";
import styles from "./governBlock.module.scss";
import zhannaToktosunova from "../../../assets/board/zh.toktosunova_ready.png";
import kubanychAbdraimov from "../../../assets/board/k.abdraimov_ready.png";
import aalyUmankulov from "../../../assets/board/a.umankulov_ready.png";
import chinaraMoldazhanova from "../../../assets/board/ch.moldazhanova_ready.png";
import meerimAskarbekova from "../../../assets/board/m.askarbekova_ready.png";
import gulnaraArymkulova from "../../../assets/board/g.arymkulova_ready.png";
import seitekDushenaliev from "../../../assets/board/s.dushenaliev_ready.png";
import aizhanMambetalieva from "../../../assets/board/a.mambetalieva_ready.png";
import vacant from "../../../assets/board/vacant.png";
import chUnursultan from "../../../assets/board/chUnursultan_ready.png";

const governance = () => {
    return (
        <div className={styles.governBlock}>
            <div className={styles.governBlockContainer}>
                <h2>СОВЕТ ПАЛАТЫ</h2>
                <div>
                    <div className={styles.councilWrapper}>
                        <div className={styles.div1}>
                            <a href="#">
                                <img
                                    src={zhannaToktosunova}
                                    alt="Zhanna Toktosunova"
                                />
                            </a>
                            <div>
                                <h3>Жанна Токтосунова</h3>
                                <p>Председатель Совета Палаты</p>
                            </div>
                        </div>
                        <div className={styles.governMember}>
                            <a href="#">
                                <img
                                    src={kubanychAbdraimov}
                                    alt="Kubanych Abdraimov"
                                />
                            </a>
                            <div>
                                <h3>Кубаныч Абдраимов</h3>
                                <p>Член Совета Палаты</p>
                            </div>
                        </div>
                        <div className={styles.governMember}>
                            <a href="#">
                                <img src={aalyUmankulov} alt="Aaly Umankulov" />
                            </a>
                            <div>
                                <h3>Аалы Уманкулов</h3>
                                <p>Член Совета Палаты</p>
                            </div>
                        </div>
                        <div className={styles.governMember}>
                            <a href="#">
                                <img
                                    src={chinaraMoldazhanova}
                                    alt="Chinara Moldazhanova"
                                />
                            </a>
                            <div>
                                <h3>Чинара Молдажанова</h3>
                                <p>Член Совета Палаты</p>
                            </div>
                        </div>
                        <div className={styles.governMember}>
                            <a href="#">
                                <img
                                    src={meerimAskarbekova}
                                    alt="Meerim Askarbekova"
                                />
                            </a>
                            <div>
                                <h3>Мээрим Аскарбекова</h3>
                                <p>Член Совета Палаты</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.corpsecAndAuditorWrapper}>
                    <div className={styles.governMember}>
                        <a href="#">
                            <img
                                src={gulnaraArymkulova}
                                alt="Gulnara Arymkulova"
                            />
                        </a>
                        <div>
                            <h3>Гульнара Арымкулова</h3>
                            <p>Ревизор Палаты</p>
                        </div>
                    </div>
                    <div className={styles.governMember}>
                        <a href="#">
                            <img
                                src={chUnursultan}
                                alt="Cholponbay uulu Nursultan"
                            />
                        </a>
                        <h3>Чолпонбай уулу Нурсултан</h3>
                        <p>Корпоративный секретарь Палаты</p>
                    </div>
                </div>
                <h2>ПРЕЗИДИУМ ПАЛАТЫ</h2>
                <div className={styles.presidiumWrapper}>
                    <div className={styles.governMember}>
                        <a href="#">
                            <img
                                src={seitekDushenaliev}
                                alt="Seitek Dushenaliev"
                            />
                        </a>
                        <div>
                            <h3>Сейтек Душеналиев</h3>
                            <p>Президент Палаты</p>
                        </div>
                    </div>
                    <div className={styles.governMember}>
                        <a href="#">
                            <img
                                src={aizhanMambetalieva}
                                alt="Ayzhan Mambetova"
                            />
                        </a>
                        <h3>Айжан Мамбеталиева</h3>
                        <p>Вице-Президент Палаты</p>
                    </div>
                    <div className={styles.governMember}>
                        <a href="#">
                            <img src={vacant} alt="vacant" />
                        </a>
                        <h3>Должность вакантна</h3>
                        <p>Вице-Президент Палаты</p>
                    </div>
                </div>
                <h2>УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ</h2>
                <div className={styles.constituentDdocuments}>
                    <ul>
                        <li>
                            <a href="/charter">
                                УСТАВ <br /> ОБЩЕСТВЕННОГО ОБЪЕДИНЕНИЯ <br />
                                «ПАЛАТА НЕЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ
                                РЕСПУБЛИКИ»
                            </a>
                        </li>
                        <li>
                            <a href="/membershipRegulations">
                                ПОЛОЖЕНИЕ
                                <br /> О ЧЛЕНСТВЕ ОБЩЕСТВЕННОГО ОБЪЕДИНЕНИЯ
                                <br />
                                «ПАЛАТА НЕЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ
                                РЕСПУБЛИКИ»
                            </a>
                        </li>
                        <li>
                            <a href="/governRegulations">
                                ПОЛОЖЕНИЕ
                                <br /> ОБ ОРГАНАХ УПРАВЛЕНИЯ <br />
                                ОБЩЕСТВЕННОГО ОБЪЕДИНЕНИЯ <br /> «ПАЛАТА
                                НЕЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ»
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default governance;
