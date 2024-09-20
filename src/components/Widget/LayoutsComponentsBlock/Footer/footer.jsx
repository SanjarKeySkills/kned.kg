import React from "react";
import styles from "./footer.module.scss";
import footerLogo from "../../../../assets/footerLogo.svg";
import instLogo from "../../../../assets/instagram-logo.svg";
import facebookLogo from "../../../../assets/facebook-logo.svg";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContacts}>
                    <img
                        src={footerLogo}
                        alt="Footer Logo"
                        className={styles.footerLogo}
                    />
                    <p>
                        Кыргызская Республика г.Бишкек ул.Исанова 105/1, 6 этаж,
                        кабинет 2
                    </p>
                    <p>
                        +996 509 425 995
                        <tr />
                        <a href="#">kned.org@gmail.com</a>
                    </p>
                </div>
                <div className={styles.footerList}>
                    <ul>
                        <li>
                            <a href="#">О ПАЛАТЕ</a>
                        </li>
                        <li>
                            <a href="#">ЧЛЕНЫ ПАЛАТЫ</a>
                        </li>
                        <li>
                            <a href="#">УСЛУГИ</a>
                        </li>
                        <li>
                            <a href="#">КОНТАКТЫ</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">КУРСЫ И ТРЕНИНГИ</a>
                        </li>
                        <li>
                            <a href="#">НОВОСТИ</a>
                        </li>
                        <li>
                            <a href="#">СТАТЬИ</a>
                        </li>
                        <li>
                            <a href="#">ГАЛЛЕРЕЯ</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerInfo}>
                    <p>
                        ПНД КР является профессиональной организацией,
                        добровольно объединяющей физических лиц, в лице
                        национальных и международных независимых директоров и
                        экспертов в области корпоративного управления.
                    </p>
                    <div className={styles.footerSocial}>
                        <a href="#">
                            <img
                                src={instLogo}
                                alt="Instagram"
                                className={styles.socialLogo}
                            />
                        </a>
                        <a href="#">
                            <img
                                src={facebookLogo}
                                alt="Facebook"
                                className={styles.socialLogo}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
