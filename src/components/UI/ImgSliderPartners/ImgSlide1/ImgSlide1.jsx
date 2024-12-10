import React from "react";
import styles from "../imgSliderPartnes.module.scss";
import logo_1 from "../../../../assets/partnersLogo/amicrofino.png";
import logo_2 from "../../../../assets/partnersLogo/apkr.png";
import logo_3 from "../../../../assets/partnersLogo/auci.png";

const ImgPartnersSlide = () => {
    return (
        <div>
            <div className={styles.imgPartnerSlide}>
                <div className={styles.imgPartnerSlideWrapper}>
                    <div className={styles.logoContaner}>
                        <a
                            href="https://amfi.kg"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_1}
                                alt="logo_1"
                                className={styles.partnerslogo}
                            />
                            {/* <span>
                               Ассоциация Микрофинансовых организаций
                            </span> */}
                        </a>
                        <a
                            href="http://www.apap.kg"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_2}
                                alt="logo_2"
                                className={styles.partnerslogo}
                            />
                            {/* <span>
                                Академия государственного управления при
                                Президенте Кыргызской Республики
                            </span> */}
                        </a>
                        <a
                            href="https://auci.kg/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_3}
                                alt="logo_3"
                                className={styles.partnerslogo}
                            />
                            <span>
                                Ассоциация Пользователей Кредитной Информацией
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgPartnersSlide;
