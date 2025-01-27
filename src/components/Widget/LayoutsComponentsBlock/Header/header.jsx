import React, { useState } from "react";
import styles from "./header.module.scss";
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
        // setOpenPopUp("none"); // Закрывает адаптивное меню popUp
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
                            <Link
                                className={styles.dropdownButton}
                                onClick={togglePndMenu}>
                                О ПАЛАТЕ
                            </Link>
                            {isPndMenuOpen && (
                                <ul className={styles.dropdownMenu}>
                                    <li>
                                        <Link
                                            on
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
                                </ul>
                            )}
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
