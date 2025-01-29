import React, { useEffect } from "react";
import errorImage from "../../assets/404.png";
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.errorPageWrapper}>
            <div className={styles.errorImg}>
                <img src={errorImage} alt="errorImage" />
            </div>
        </div>
    );
};

export default ErrorPage;
