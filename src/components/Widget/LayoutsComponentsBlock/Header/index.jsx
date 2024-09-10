import React from "react";
import AppLink from "../AppLink/index.jsx";
import Button from "../Button/index.jsx";
import styles from "./index.module.scss";
import MainLogo from "../../../UI/MainLogo/index.jsx";
import LineDecor from "../../../UI/LineDecor/index.jsx";

const Header = () => {
    return (
        <div>
            <div className={styles.headerTop}>
                <AppLink to="/membership">ЧЛЕНЫ ПАЛАТЫ</AppLink>
                <AppLink to="/about">"О ПАЛАТЕ"</AppLink>
                <AppLink to="/about">УСЛУГИ</AppLink>
                <AppLink to="/about">КОНТАКТЫ</AppLink>
                <Button size="lanRu" variant="lanRuOutlined">
                    RU
                </Button>
                <Button size="lanEn" variant="lanEnOutlined">
                    EN
                </Button>
            </div>
            <div className={styles.headerBottom}>
                <MainLogo />
                <div>
                    <div>
                        <AppLink position="headerBottom">
                            КУРСЫ И ТРЕНИНГИ
                        </AppLink>
                        <AppLink position="headerBottom">НОВОСТИ</AppLink>
                        <AppLink position="headerBottom">СТАТЬИ</AppLink>
                        <AppLink position="headerBottom">ГАЛЛЕРЕЯ</AppLink>
                        <Button size="s" variant="outlined">
                            Стать членом
                        </Button>
                    </div>
                    <div>
                        <LineDecor />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
