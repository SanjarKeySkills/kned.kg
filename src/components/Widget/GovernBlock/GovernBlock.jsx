import React from "react";
import styles from "./governBlock.module.scss";
import { Link } from "react-router-dom";
import zhannaToktosunova from "../../../assets/active_members/zhanna_toktosunova.png";
import kubanychAbdraimov from "../../../assets/active_members/kubanych_abdraimov.png";
import aalyUmankulov from "../../../assets/active_members/aaly_umakulov.png";
import chinaraMoldazhanova from "../../../assets/active_members/chynara_moldazhanova.png";
import meerimAskarbekova from "../../../assets/active_members/meerim_askarbekova.png";
import gulnaraArymkulova from "../../../assets/active_members/gulnara_arymkulova.png";
import seitekDushenaliev from "../../../assets/active_members/seitek_dushenaliev.png";
import nurdinSultanbaev from "../../../assets/active_members/nurdin_sultanbaev.png";
import chynaraIbraimova from "../../../assets/active_members/chynara_ibraimova.png";
import chUnursultan from "../../../assets/chUnursultan_ready.png";

const governance = () => {
    return (
        <div className={styles.governBlock}>
            <div className={styles.governBlockContainer}>
                <h2>СОВЕТ ПАЛАТЫ</h2>
                <div>
                    <div className={styles.councilWrapper}>
                        <div className={styles.div1}>
                            <Link to="#">
                                <img
                                    src={zhannaToktosunova}
                                    alt="Zhanna Toktosunova"
                                />
                            </Link>
                            <div>
                                <h3>Жанна Токтосунова</h3>
                                <p>Председатель Совета Палаты</p>
                            </div>
                        </div>
                        <div className={styles.governMember}>
                            <Link to="#">
                                <img
                                    src={kubanychAbdraimov}
                                    alt="Kubanych Abdraimov"
                                />
                            </Link>
                            <div>
                                <h3>Кубаныч Абдраимов</h3>
                                <p>Член Совета Палаты</p>
                            </div>
                        </div>
                        <div className={styles.governMember}>
                            <Link to="#">
                                <img src={aalyUmankulov} alt="Aaly Umankulov" />
                            </Link>
                            <div>
                                <h3>Аалы Уманкулов</h3>
                                <p>Член Совета Палаты</p>
                            </div>
                        </div>
                        <div className={styles.governMember}>
                            <Link to="#">
                                <img
                                    src={chinaraMoldazhanova}
                                    alt="Chinara Moldazhanova"
                                />
                            </Link>
                            <div>
                                <h3>Чинара Молдажанова</h3>
                                <p>Член Совета Палаты</p>
                            </div>
                        </div>
                        <div className={styles.governMember}>
                            <Link to="#">
                                <img
                                    src={meerimAskarbekova}
                                    alt="Meerim Askarbekova"
                                />
                            </Link>
                            <div>
                                <h3>Мээрим Аскарбекова</h3>
                                <p>Член Совета Палаты</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.corpsecAndAuditorWrapper}>
                    <div className={styles.governMember}>
                        <Link to="#">
                            <img
                                src={gulnaraArymkulova}
                                alt="Gulnara Arymkulova"
                            />
                        </Link>
                        <div>
                            <h3>Гульнара Арымкулова</h3>
                            <p>Ревизор Палаты</p>
                        </div>
                    </div>
                    <div className={styles.governMember}>
                        <Link to="#">
                            <img
                                src={chUnursultan}
                                alt="Cholponbay uulu Nursultan"
                            />
                        </Link>
                        <h3>Чолпонбай уулу Нурсултан</h3>
                        <p>Корпоративный секретарь Палаты</p>
                    </div>
                </div>
                <h2>ПРЕЗИДИУМ ПАЛАТЫ</h2>
                <div className={styles.presidiumWrapper}>
                    <div className={styles.governMember}>
                        <Link to="#">
                            <img
                                src={seitekDushenaliev}
                                alt="Seitek Dushenaliev"
                            />
                        </Link>
                        <div>
                            <h3>Сейтек Душеналиев</h3>
                            <p>Президент Палаты</p>
                        </div>
                    </div>
                    <div className={styles.governMember}>
                        <Link to="#">
                            <img
                                src={nurdinSultanbaev}
                                alt="Nurdin Sultanbaev"
                            />
                        </Link>
                        <h3>Нурдин Султанбаев</h3>
                        <p>Вице-Президент Палаты</p>
                    </div>
                    <div className={styles.governMember}>
                        <Link to="#">
                            <img
                                src={chynaraIbraimova}
                                alt="Chynara Ibraimova"
                            />
                        </Link>
                        <h3>Чынара Ибраимова</h3>
                        <p>Вице-Президент Палаты</p>
                    </div>
                </div>
                <h2>УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ</h2>
                <div className={styles.constituentDdocuments}>
                    <ul>
                        <li>
                            <Link to="/charter">
                                УСТАВ <br /> ОБЩЕСТВЕННОГО ОБЪЕДИНЕНИЯ <br />
                                «ПАЛАТА НЕЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ
                                РЕСПУБЛИКИ»
                            </Link>
                        </li>
                        <li>
                            <Link to="/membershipRegulations">
                                ПОЛОЖЕНИЕ
                                <br /> О ЧЛЕНСТВЕ ОБЩЕСТВЕННОГО ОБЪЕДИНЕНИЯ
                                <br />
                                «ПАЛАТА НЕЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ
                                РЕСПУБЛИКИ»
                            </Link>
                        </li>
                        <li>
                            <Link to="/governRegulations">
                                ПОЛОЖЕНИЕ
                                <br /> ОБ ОРГАНАХ УПРАВЛЕНИЯ <br />
                                ОБЩЕСТВЕННОГО ОБЪЕДИНЕНИЯ <br /> «ПАЛАТА
                                НЕЗАВИСИМЫХ ДИРЕКТОРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ»
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default governance;
