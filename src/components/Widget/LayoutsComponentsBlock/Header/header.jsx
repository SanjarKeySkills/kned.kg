import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../../../assets/imageMainHeader.png";
import burgerButton from "../../../../assets/burgerButton.svg";
import arrowPopUp from "../../../../assets/arrowPopUp.svg";

const firstLinks = [
    { to: "/", label: "НА ГЛАВНУЮ" },
    { to: "/courses", label: "КУРСЫ И ТРЕНИНГИ" },
    { to: "/members", label: "НАШИ ЭКСПЕРТЫ" },
    { to: "/news", label: "НОВОСТИ" },
    { to: "/gallery", label: "ГАЛЕРЕЯ" },
];

const secondLinks = [
    { to: "/about", label: "О ПАЛАТЕ", className: styles.link },
    { to: "/board", label: "ОРГАНЫ УПРАВЛЕНИЯ", className: styles.link },
    { to: "/articles", label: "ПУБЛИКАЦИИ", className: styles.link },
    { to: "/services", label: "УСЛУГИ", className: styles.link },
    { to: "/contact", label: "КОНТАКТЫ", className: styles.link },
];

const HeaderMobileMenu = (props) => {
    const { isOpenPopUp, togglePopup } = props;

    const handlePopUpLinkClick = () => togglePopup(); // Закрытие адаптивного popUp меню

    return (
        <div
            className={styles.containerPopUp}
            style={{ display: isOpenPopUp ? "block" : "none" }}>
            <div className={styles.wrapperTopPopUp}>
                <div className={styles.arrowWrapper}>
                    <img src={arrowPopUp} alt="arrow" onClick={togglePopup} />
                </div>
                <ul className={styles.listTopPopUp}>
                    {firstLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                onClick={handlePopUpLinkClick}
                                className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.wrapperBottomPopUp}>
                <ul className={styles.listBottomPopUp}>
                    {secondLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                onClick={handlePopUpLinkClick}
                                className={link.className}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
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
    );
};

const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState(false);
    const [isPndMenuOpen, setPndMenuOpen] = useState(false);
    const togglePopup = () => setOpenPopUp(!isOpenPopUp);

    // Функция для закрытия меню при клике на ссылку
    const handleLinkClick = () => {
        setPndMenuOpen(false); // Закрывает выпадающее меню "О ПАЛАТЕ"
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to="/">
                    <img src={logo} alt="main" />
                </Link>
                <div className={styles.wrapperHeaderDesktop}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropdownButton}>
                            О ПАЛАТЕ
                        </button>
                        <div className={styles.dropdownContent}>
                            <Link on to="/services" className={styles.navLink}>
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
                    </div>
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

            <div className={styles.headerMobile}>
                <Link to="/">
                    <img src={logo} alt="main" />
                </Link>
                <img src={burgerButton} alt="burger" onClick={togglePopup} />
                <HeaderMobileMenu
                    isOpenPopUp={isOpenPopUp}
                    togglePopup={togglePopup}
                />
            </div>
        </div>
    );
};

export default Header;
