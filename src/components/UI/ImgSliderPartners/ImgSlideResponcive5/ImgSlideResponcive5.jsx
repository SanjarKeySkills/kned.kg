import React from "react";
import styles from "../imgSlideResponcive.module.scss";
import logo_1 from "../../../../assets/partnersLogo/ipaa.png";
import logo_2 from "../../../../assets/partnersLogo/logo_KSE.png";
import logo_3 from "../../../../assets/partnersLogo/noks.png";

const ImgPartnersSlide = () => {
    return (
        <div>
            <div className={styles.imgPartnerSlide}>
                <div className={styles.imgPartnerSlideWrapper}>
                    <div className={styles.logoContaner}>
                        <a
                            href="https://uchet.kg/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_1}
                                alt="logo_1"
                                className={styles.partnerslogo}
                            />
                        </a>
                        <a
                            href="https://www.kse.kg/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_2}
                                alt="logo_2"
                                className={styles.partnerslogo}
                            />
                        </a>
                        <a
                            href="https://nokc.org.ru/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_3}
                                alt="logo_3"
                                className={styles.partnerslogo}
                            />
                            <span>
                                Национальное объединение корпоративных
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
