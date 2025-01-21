import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../../assets/imageMainHeader.png";
import burgerButton from "../../../../assets/burgerButton.svg";
import arrowPopUp from "../../../../assets/arrowPopUp.svg";

const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState("none");
    const [isPndMenuOpen, setPndMenuOpen] = useState(false);

    // const togglePopUp = () => {
    //     setOpenPopUp((prev) => (prev === "none" ? "block" : "none"));
    // };

    const togglePndMenu = () => {
        setPndMenuOpen((prev) => !prev);
    };

    const changeStyle = () => {
        if (isOpenPopUp === "none") {
            setOpenPopUp("block");
        } else setOpenPopUp("none");
    };

    // Функция для закрытия меню при клике на ссылку
    const handleLinkClick = () => {
        setPndMenuOpen(false); // Закрывает выпадающее меню "О ПАЛАТЕ"
        setOpenPopUp("none"); // Закрывает адаптивное меню popUp
    };
    // Функция для закрытия адаптивного popUp меню при клике на ссылку
    const handlePopUpLinkClick = () => {
        setOpenPopUp("none"); // Закрытие адаптивного popUp меню
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerBottom}>
                <div className={styles.headerBottomWrapper}>
                    <Link to="/">
                        <img src={logo} alt="main" />
                    </Link>
                    <div className={styles.wrapperBottom}>
                        <li className={styles.dropdown}>
                            <button
                                className={styles.dropdownButton}
                                onClick={togglePndMenu}>
                                О ПАЛАТЕ
                            </button>
                            {isPndMenuOpen && (
                                <ul className={styles.dropdownMenu}>
                                    <li>
                                        <Link
                                            to="/services"
                                            className={styles.navLink}
                                            onClick={handleLinkClick} // Закрытие меню при клике
                                        >
                                            УСЛУГИ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/news"
                                            className={styles.navLink}
                                            onClick={handleLinkClick} // Закрытие меню при клике
                                        >
                                            НОВОСТИ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/articles"
                                            className={styles.navLink}
                                            onClick={handleLinkClick} // Закрытие меню при клике
                                        >
                                            ПУБЛИКАЦИИ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/gallery"
                                            className={styles.navLink}
                                            onClick={handleLinkClick} // Закрытие меню при клике
                                        >
                                            ГАЛЕРЕЯ
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="#" className={styles.navLink}>
                                            ВИДЕОРОЛИКИ
                                        </Link>
                                    </li> */}
                                </ul>
                            )}
                        </li>
                        <ul className={styles.listBottom}>
                            <li>
                                <Link to="/about" className={styles.navLink}>
                                    МИССИЯ
                                </Link>
                            </li>
                            <li>
                                <Link to="/members" className={styles.navLink}>
                                    НАШИ ЭКСПЕРТЫ
                                </Link>
                            </li>
                            <li>
                                <Link to="/board" className={styles.navLink}>
                                    ОРГАНЫ УПРАВЛЕНИЯ
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className={styles.navLink}>
                                    КУРСЫ И ТРЕНИНГИ
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={styles.navLink}>
                                    КОНТАКТЫ
                                </Link>
                            </li>
                        </ul>
                        <Link className={styles.heroButton} to="/contact">
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
                                    onClick={handlePopUpLinkClick}
                                    className={styles.link}>
                                    НА ГЛАВНУЮ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses"
                                    onClick={handlePopUpLinkClick}
                                    className={styles.link}>
                                    КУРСЫ И ТРЕНИНГИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    onClick={handlePopUpLinkClick}
                                    className={styles.link}>
                                    НОВОСТИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/articles"
                                    onClick={handlePopUpLinkClick}
                                    className={styles.link}>
                                    ПУБЛИКАЦИИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/gallery"
                                    onClick={handlePopUpLinkClick}
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
                        <Link
                            onClick={handlePopUpLinkClick}
                            className={styles.heroButton}
                            to="/contact">
                            ВСТУПИТЬ В ПАЛАТУ
                        </Link>
                    </div>
                    <div className={styles.headerBottomPopUp}>
                        <ul className={styles.listBottomPopUp}>
                            <li>
                                <Link
                                    to="/members"
                                    onClick={handlePopUpLinkClick}
                                    className={styles.link}>
                                    НАШИ ЭКСПЕРТЫ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={handlePopUpLinkClick}
                                    className={styles.link}>
                                    О ПАЛАТЕ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/board"
                                    onClick={handlePopUpLinkClick}
                                    className={styles.linkTop}>
                                    ОРГАНЫ УПРАВЛЕНИЯ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    onClick={handlePopUpLinkClick}
                                    className={styles.link}>
                                    УСЛУГИ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={handlePopUpLinkClick}
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
