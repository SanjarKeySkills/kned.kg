import React from "react";
import styles from "./icon.module.scss";
import logo_member from "../../../assets/icon_member.svg";

const iconMember = () => {
    return <img className={styles.icon} src={logo_member} alt="icon_member" />;
};

export default iconMember;
