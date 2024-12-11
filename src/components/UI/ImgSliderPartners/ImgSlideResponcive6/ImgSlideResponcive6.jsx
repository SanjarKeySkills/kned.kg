import React from "react";
import styles from "../imgSlideResponcive.module.scss";
import logo_1 from "../../../../assets/partnersLogo/qid.png";
import logo_2 from "../../../../assets/partnersLogo/sbk.png";
import logo_3 from "../../../../assets/partnersLogo/blank.png";

const ImgPartnersSlide = () => {
    return (
        <div>
            <div className={styles.imgPartnerSlide}>
                <div className={styles.imgPartnerSlideWrapper}>
                    <div className={styles.logoContaner}>
                        <a
                            href="https://main.qid.kz/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_1}
                                alt="logo_1"
                                className={styles.partnerslogo}
                            />
                        </a>
                        <a
                            href="https://ub.kg/en/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_2}
                                alt="logo_2"
                                className={styles.partnerslogo}
                            />
                        </a>
                        <a href="#" className={styles.partnersLogoLink}>
                            <img
                                src={logo_3}
                                alt="logo_3"
                                className={styles.partnerslogo}
                            />
                            <span>ПАЛЛАДИУМ ИНТЕРНЭШНЛ</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgPartnersSlide;
