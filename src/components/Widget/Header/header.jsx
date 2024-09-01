import React from "react";
import NavLink from "../NavLink/navLink";
import Button from "../Button/Button";
import styles from "./header.module.scss";
import MainLogo from "../../UI/mainLogo/mainLogo";
import LineDecor from "../../UI/lineDecor/index.jsx";

const Header = () => {
    return (
        <div>
            <div className={styles.headerTop}>
                <NavLink children="ЧЛЕНЫ ПАЛАТЫ" />
                <NavLink children="О ПАЛАТЕ" />
                <NavLink children="УСЛУГИ" />
                <NavLink children="КОНТАКТЫ" />
                <Button size="lanRu" variant="lanRuOutlined" children="RU" />
                <Button size="lanEn" variant="lanEnOutlined" children="EN" />
            </div>
            <div className={styles.headerBottom}>
                <MainLogo />
                <div>
                    <div>
                        <NavLink
                            position="headerBottom"
                            children="КУРСЫ И ТРЕНИНГИ"
                        />
                        <NavLink position="headerBottom" children="НОВОСТИ" />
                        <NavLink position="headerBottom" children="СТАТЬИ" />
                        <NavLink position="headerBottom" children="ГАЛЛЕРЕЯ" />
                        <Button
                            size="s"
                            variant="outlined"
                            children="Стать членом"
                        />
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
