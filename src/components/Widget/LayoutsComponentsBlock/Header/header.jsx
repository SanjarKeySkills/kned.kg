import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../../assets/imageMainHeader.png";
import burgerButton from "../../../../assets/burgerButton.svg";
import arrowPopUp from "../../../../assets/arrowPopUp.svg";

const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState("none"); //burger
    const [isPndMenuOpen, setPndMenuOpen] = useState(false);

    // const togglePopUp = () => {
    //     setOpenPopUp((prev) => (prev === "none" ? "block" : "none"));
    // };

    const togglePndMenu = () => {
        setPndMenuOpen((prev) => !prev);
    };

    //burger
    const changeStyle = () => {
        if (isOpenPopUp === "none") {
            setOpenPopUp("block");
        } else setOpenPopUp("none");
    };

    // Функция для закрытия меню при клике на ссылку
    const handleLinkClick = () => {
        setPndMenuOpen(false); // Закрывает выпадающее меню "О ПАЛАТЕ"
        // setOpenPopUp("none"); // Закрывает адаптивное меню popUp
    };
    // Функция для закрытия адаптивного popUp меню при клике на ссылку
    // const handlePopUpLinkClick = () => {
    //     setOpenPopUp("none"); // Закрытие адаптивного popUp меню
    // };

    return (
        <div className={styles.header}>
            <div className={styles.headerBottom}>
                <div className={styles.headerBottomWrapper}>
                    <Link to="/">
                        <img src={logo} alt="main" />
                    </Link>
                    <div className={styles.wrapperBottom}>
                        <li className={styles.dropdown}>
                            <Link className={styles.dropdownButton}>
                                О ПАЛАТЕ
                            </Link>
                            <div className={styles.dropdownContent}>
                                <Link to="/services" className={styles.navLink}>
                                    УСЛУГИ
                                </Link>
                                <Link to="/news" className={styles.navLink}>
                                    НОВОСТИ
                                </Link>
                                <Link to="/articles" className={styles.navLink}>
                                    ПУБЛИКАЦИИ
                                </Link>
                                <Link to="/gallery" className={styles.navLink}>
                                    ГАЛЕРЕЯ
                                </Link>
                            </div>
                        </li>
                        <ul className={styles.listBottom}>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={handleLinkClick}
                                    className={styles.navLink}>
                                    МИССИЯ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/members"
                                    onClick={handleLinkClick}
                                    className={styles.navLink}>
                                    НАШИ ЭКСПЕРТЫ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/board"
                                    onClick={handleLinkClick}
                                    className={styles.navLink}>
                                    ОРГАНЫ УПРАВЛЕНИЯ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses"
                                    onClick={handleLinkClick}
                                    className={styles.navLink}>
                                    КУРСЫ И ТРЕНИНГИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={handleLinkClick}
                                    className={styles.navLink}>
                                    КОНТАКТЫ
                                </Link>
                            </li>
                        </ul>
                        <Link
                            onClick={handleLinkClick}
                            className={styles.heroButton}
                            to="/contact">
                            ВСТУПИТЬ В ПАЛАТУ
                        </Link>
                        <div className={styles.lanBtnWraper}>
                            <Link to="/" className={styles.lan}>
                                RU
                            </Link>
                            <Link to="#" className={styles.lan}>
                                EN
                            </Link>
                            <Link to="#" className={styles.lan}>
                                KG
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.headerMobile}>
                <Link to="/">
                    <img src={logo} alt="main" />
                </Link>
                {/* <img src={burgerButton} alt="burger" onClick={changeStyle} /> */}
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
                                <Link
                                    to="/"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    НА ГЛАВНУЮ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    КУРСЫ И ТРЕНИНГИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    НОВОСТИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/articles"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    ПУБЛИКАЦИИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/gallery"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    ГАЛЕРЕЯ
                                </Link>
                            </li>
                            {/* <li>
                                <a to="#" className={styles.linkBottom}>
                                    ВИДЕОРОЛИКИ
                                </a>
                            </li> */}
                        </ul>
                        {/* <Link
                            onClick={changeStyle}
                            className={styles.heroButton}
                            to="/contact">
                            ВСТУПИТЬ В ПАЛАТУ
                        </Link> */}
                    </div>
                    <div className={styles.headerBottomPopUp}>
                        <ul className={styles.listBottomPopUp}>
                            <li>
                                <Link
                                    to="/members"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    НАШИ ЭКСПЕРТЫ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    О ПАЛАТЕ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/board"
                                    onClick={changeStyle}
                                    className={styles.linkTop}>
                                    ОРГАНЫ УПРАВЛЕНИЯ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    УСЛУГИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={changeStyle}
                                    className={styles.link}>
                                    КОНТАКТЫ
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.lanBtnWraper}>
                            <Link to="#" className={styles.lan}>
                                RU
                            </Link>
                            <Link to="#" className={styles.lan}>
                                EN
                            </Link>
                            <Link to="#" className={styles.lan}>
                                KG
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
