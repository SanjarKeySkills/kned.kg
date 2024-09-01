import React from "react";
import NavLink from "../../Widget/NavLink/navLink.jsx";
import styles from "./footer.module.scss";
import MainLogo from "../../UI/mainLogo/mainLogo";
import Inst from "../../UI/socialLogo/instLogo.jsx";
import Face from "../../UI/socialLogo/faceLogo.jsx";

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
                            <NavLink
                                position="footer"
                                variant="activatedFooter"
                                children="kned.org@gmail.com"
                            />
                        </p>
                    </div>
                </div>
                <div className={styles.linkContainer}>
                    <div className={styles.links}>
                        <NavLink
                            position="footer"
                            variant="activatedFooter"
                            children="О ПАЛАТЕ"
                        />
                        <NavLink
                            position="footer"
                            variant="activatedFooter"
                            children="ЧЛЕНЫ ПАЛАТЫ"
                        />
                        <NavLink
                            position="footer"
                            variant="activatedFooter"
                            children="УСЛУГИ"
                        />
                        <NavLink
                            position="footer"
                            variant="activatedFooter"
                            children="КОНТАКТЫ"
                        />
                    </div>
                    <div className={styles.links}>
                        <NavLink
                            position="footer"
                            variant="activatedFooter"
                            children="КУРСЫ И ТРЕНИНГИ"
                        />
                        <NavLink
                            position="footer"
                            variant="activatedFooter"
                            children="НОВОСТИ"
                        />
                        <NavLink
                            position="footer"
                            variant="activatedFooter"
                            children="СТАТЬИ"
                        />
                        <NavLink
                            position="footer"
                            variant="activatedFooter"
                            children="ГАЛЛЕРЕЯ"
                        />
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
                        <Inst />
                        <Face />
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}></div>
        </div>
    );
};

export default Footer;
