import React from "react";
import AppLink from "../AppLink/index.jsx";
import Button from "../Button/index.jsx";
import styles from "./header.module.scss";
import MainLogo from "../../../UI/MainLogo/index.jsx";
import LineDecor from "../../../UI/LineDecor/index.jsx";

const Header = () => {
    return (
        <>
            <div className={styles.headerTop}>
                <ul className={styles.listTop}>
                    <li>
                        <a href="#" className={styles.link}>
                            ЧЛЕНЫ ПАЛАТЫ
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.link}>
                            О ПАЛАТЕ
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.link}>
                            УСЛУГИ
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.link}>
                            КОНТАКТЫ
                        </a>
                    </li>
                </ul>
                <div>
                    <a
                        href="#"
                        className={styles.lanRu}>
                        RU
                    </a>
                    <a href="#" className={(styles.lanBlock, styles.lanEn)}>
                        EN
                    </a>
                </div>
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
        </>
    );
};

export default Header;
