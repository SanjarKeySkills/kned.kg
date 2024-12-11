import React from "react";
import styles from "../imgSlideResponcive.module.scss";
import logo_1 from "../../../../assets/partnersLogo/gfnkr.png";
import logo_2 from "../../../../assets/partnersLogo/ibc.png";
import logo_3 from "../../../../assets/partnersLogo/ifc.png";

const ImgPartnersSlide = () => {
    return (
        <div>
            <div className={styles.imgPartnerSlide}>
                <div className={styles.imgPartnerSlideWrapper}>
                    <div className={styles.logoContaner}>
                        <a
                            href="https://fsa.gov.kg/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_1}
                                alt="logo_1"
                                className={styles.partnerslogo}
                            />
                        </a>
                        <a
                            href="https://www.ibc.kg/"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_2}
                                alt="logo_2"
                                className={styles.partnerslogo}
                            />
                        </a>
                        <a
                            href="https://www.ifc.org/en/home"
                            className={styles.partnersLogoLink}>
                            <img
                                src={logo_3}
                                alt="logo_3"
                                className={styles.partnerslogo}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgPartnersSlide;
