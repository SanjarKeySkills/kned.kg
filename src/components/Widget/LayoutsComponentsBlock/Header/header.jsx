import React from "react";
import styles from "./header.module.scss";
import logo from "../../../../assets/imageMainHeader.png";
import burgerButton from "../../../../assets/burgerButton.svg";
import arrowPopUp from "../../../../assets/arrowPopUp.svg";
import { useState } from "react";

const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState("none");

    const [isPndMenuOpen, setPndMenuOpen] = useState(false);
    const togglePopUp = () => {
        setOpenPopUp((prev) => (prev === "none" ? "block" : "none"));
    };

    const togglePndMenu = () => {
        setPndMenuOpen((prev) => !prev);
    };

    const changeStyle = () => {
        if (isOpenPopUp === "none") {
            setOpenPopUp("block");
        } else setOpenPopUp("none");
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerTop}>
                <ul className={styles.listTop}>
                    <li>
                        <a href="/members" className={styles.linkTop}>
                            НАШИ ЭКСПЕРТЫ
                        </a>
                    </li>

                    {/* Кнопка ПНД с выпадающим меню */}
                    <li className={styles.dropdown}>
                        <button
                            className={styles.dropdownButton}
                            onClick={togglePndMenu}>
                            ПНД
                        </button>
                        {isPndMenuOpen && (
                            <ul className={styles.dropdownMenu}>
                                <li>
                                    <a href="/about" className={styles.linkTop}>
                                        О ПАЛАТЕ
                                    </a>
                                </li>
                                <li>
                                    <a href="/board" className={styles.linkTop}>
                                        ОРГАНЫ УПРАВЛЕНИЯ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services"
                                        className={styles.linkTop}>
                                        УСЛУГИ
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* <li>
                        <a href="/about" className={styles.linkTop}>
                            О ПАЛАТЕ
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="/board" className={styles.linkTop}>
                            ОРГАНЫ УПРАВЛЕНИЯ
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="/services" className={styles.linkTop}>
                            УСЛУГИ
                        </a>
                    </li> */}
                    <li>
                        <a href="/contact" className={styles.linkTop}>
                            КОНТАКТЫ
                        </a>
                    </li>
                </ul>
                <div>
                    <a href="#" className={styles.lanRu}>
                        RU
                    </a>
                    <a href="#" className={(styles.lanBlock, styles.lanEn)}>
                        EN
                    </a>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <div className={styles.headerBottomWrapper}>
                    <a href="/">
                        <img src={logo} alt="main" />
                    </a>
                    <div className={styles.wrapperBottom}>
                        <ul className={styles.listBottom}>
                            <li>
                                <a
                                    href="/courses"
                                    className={styles.linkBottom}>
                                    КУРСЫ И ТРЕНИНГИ
                                </a>
                            </li>
                            <li>
                                <a href="/news" className={styles.linkBottom}>
                                    НОВОСТИ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/articles"
                                    className={styles.linkBottom}>
                                    СТАТЬИ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/gallery"
                                    className={styles.linkBottom}>
                                    ГАЛЛЕРЕЯ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/gallery"
                                    className={styles.linkBottom}>
                                    ВИДЕОРОЛИКИ
                                </a>
                            </li>
                        </ul>
                        <a className={styles.buttonHero} href="/contact">
                            ВСТУПИТЬ В ПАЛАТУ
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.headerMobile}>
                <a href="/">
                    <img src={logo} alt="main" />
                </a>

                <img src={burgerButton} alt="burger" onClick={changeStyle} />

                <div
                    className={styles.containerPopUp}
                    style={{ display: isOpenPopUp }}>
                    <div className={styles.wrapperTopPopUp}>
                        <div className={styles.arrowWrapper}>
                            <img
                                src={arrowPopUp}
                                alt="arrow"
                                onClick={changeStyle}
                            />
                        </div>
                        <ul className={styles.listTopPopUp}>
                            <li>
                                <a href="/courses">КУРСЫ И ТРЕНИНГИ</a>
                            </li>
                            <li>
                                <a href="/news" className={styles.link}>
                                    НОВОСТИ
                                </a>
                            </li>
                            <li>
                                <a href="/articles" className={styles.link}>
                                    СТАТЬИ
                                </a>
                            </li>
                            <li>
                                <a href="/gallery" className={styles.link}>
                                    ГАЛЛЕРЕЯ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/gallery"
                                    className={styles.linkBottom}>
                                    ВИДЕОРОЛИКИ
                                </a>
                            </li>
                        </ul>
                        <a className={styles.buttonHero} href="/contact">
                            ВСТУПИТЬ В ПАЛАТУ
                        </a>
                    </div>
                    <div className={styles.headerBottomPopUp}>
                        <ul className={styles.listBottomPopUp}>
                            <li>
                                <a href="/members" className={styles.link}>
                                    НАШИ ЭКСПЕРТЫ
                                </a>
                            </li>
                            <li>
                                <a href="/about" className={styles.link}>
                                    О ПАЛАТЕ
                                </a>
                            </li>
                            <li>
                                <a href="/board" className={styles.linkTop}>
                                    ОРГАНЫ УПРАВЛЕНИЯ
                                </a>
                            </li>
                            <li>
                                <a href="/services" className={styles.link}>
                                    УСЛУГИ
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className={styles.link}>
                                    КОНТАКТЫ
                                </a>
                            </li>
                        </ul>
                        <div>
                            <a href="#" className={styles.lanRu}>
                                RU
                            </a>
                            <a
                                href="#"
                                className={(styles.lanBlock, styles.lanEn)}>
                                EN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
