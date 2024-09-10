import React from "react";
import AppLink from "../../LayoutsComponentsBlock/AppLink/index.jsx";
import styles from "./index.module.scss";
import MainLogo from "../../../UI/MainLogo/index.jsx";
import Instagram from "../../../UI/SocialLogo/InstLogo/index.jsx";
import Facebook from "../../../UI/SocialLogo/FaceLogo/index.jsx";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerTop}>
                <div className={styles.info}>
                    <MainLogo />
                    <div className={styles.infoLeft}>
                        <p>
                            Кыргызская Республика г.Бишкек ул.Исанова 105/1, 6
                            этаж, кабинет 2
                        </p>
                        <p>
                            +996 509 425 995
                            <tr />
                            <AppLink
                                position="footer"
                                variant="activatedFooter">
                                kned.org@gmail.com
                            </AppLink>
                        </p>
                    </div>
                </div>
                <div className={styles.linkContainer}>
                    <div className={styles.links}>
                        <AppLink position="footer" variant="activatedFooter">
                            О ПАЛАТЕ
                        </AppLink>
                        <AppLink position="footer" variant="activatedFooter">
                            ЧЛЕНЫ ПАЛАТЫ
                        </AppLink>
                        <AppLink position="footer" variant="activatedFooter">
                            УСЛУГИ
                        </AppLink>
                        <AppLink position="footer" variant="activatedFooter">
                            КОНТАКТЫ
                        </AppLink>
                    </div>
                    <div className={styles.links}>
                        <AppLink position="footer" variant="activatedFooter">
                            КУРСЫ И ТРЕНИНГИ
                        </AppLink>
                        <AppLink position="footer" variant="activatedFooter">
                            НОВОСТИ
                        </AppLink>
                        <AppLink position="footer" variant="activatedFooter">
                            СТАТЬИ
                        </AppLink>
                        <AppLink position="footer" variant="activatedFooter">
                            ГАЛЛЕРЕЯ
                        </AppLink>
                    </div>
                </div>
                <div className={styles.infoRightContainer}>
                    <p className={styles.infoRight}>
                        ПНД КР является профессиональной организацией,
                        добровольно объединяющей физических лиц, в лице
                        национальных и международных независимых директоров и
                        экспертов в области корпоративного управления.
                    </p>
                    <div className={styles.socialLogoContainer}>
                        <Instagram />
                        <Facebook />
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}></div>
        </div>
    );
};

export default Footer;
