import React from "react";
import styles from "../imgSlideResponcive.module.scss";
import logo_1 from "../../../../assets/partnersLogo/birtop.png";
import logo_2 from "../../../../assets/partnersLogo/cabgroup.png";
import logo_3 from "../../../../assets/partnersLogo/caks.png";

const ImgPartnersSlide = () => {
    return (
        <div>
            <div className={styles.imgPartnerSlide}>
                <div className={styles.imgPartnerSlideWrapper}>
                    <div className={styles.logoContaner}>
                        <a
                            href="https://www.facebook.com/birtop.kg/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_1}
                                alt="logo_1"
                                className={styles.partnerslogo}
                            />
                        </a>
                        <a href="#" className={styles.partnersLogoLink}>
                            <img
                                src={logo_2}
                                alt="logo_2"
                                className={styles.partnerslogo}
                            />
                            <span>
                                ЦЕНТРАЛЬНАЯ АЗИАТСКАЯ СТРОИТЕЛЬНАЯ ГРУППА
                            </span>
                        </a>
                        <a
                            href="https://caacs.pro/ru"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_3}
                                alt="logo_3"
                                className={styles.partnerslogo}
                            />
                            <span>
                                центрально азиатская ассоциация корпоративных
                                секретарей
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgPartnersSlide;
