import React from "react";
import styles from "./imgSliderPartnes.module.scss";

const ImgPartnersSlide = () => {
    return (
        <div>
            <div className={styles.imgPartnerSlide}>
                <div className={styles.imgPartnerSlideWrapper}>
                    <a href="https://www.ifc.org/en/home">
                        <img
                            src={ifc_logo}
                            alt="ifcLogo"
                            className={styles.ifc_logo}
                        />
                    </a>
                    <a href="https://www.ifc.org/en/home">
                        <img
                            src={ifc_logo}
                            alt="ifcLogo"
                            className={styles.ifc_logo}
                        />
                    </a>
                    <a href="https://www.ifc.org/en/home">
                        <img
                            src={ifc_logo}
                            alt="ifcLogo"
                            className={styles.ifc_logo}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImgPartnersSlide;
