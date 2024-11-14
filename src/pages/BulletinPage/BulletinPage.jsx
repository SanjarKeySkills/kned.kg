import React, { useEffect } from "react";
import styles from "./bulletinPage.module.scss";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import newsData from "../../components/Widget/NewsBlock/NewsCards/newsData.js";

const BulletinPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id, type } = useParams();

    // const mapData = {
    //     type: type,
    // };

    // const bulletin = newsData.find(
    //     (bulletin) => bulletin.id === id && bulletin.type === type
    // );

    // if (!bulletin) {
    //     return <p>News absent</p>;
    // }

    const bulletin = newsData.find((bulletin) => bulletin.id === id);
    // получаем тe новость с такой id и ту новость приводим на нашу константу
    // вместо type -  встанет массив newsData

    const formatText = (text) => {
        return text
            .split("\n")
            .map((line, index) => <p key={index}>{line.trim()}</p>);
    };

    return (
        <>
            <HeroHeader />
            <div className={styles.newsPage}>
                <div className={styles.newsPageContainer}>123</div>
                <img
                    src={bulletin.image}
                    alt="newsImg"
                    className={styles.newsImg}
                />
                <div className={styles.newsInfo}>
                    <h2 className={styles.newsTitle}>
                        {formatText(bulletin.title)}
                    </h2>
                    <p className={styles.newsAnnotation}>
                        {formatText(bulletin.annotation)}
                    </p>
                    <p className={styles.newsInformation}>
                        {formatText(bulletin.information)}
                    </p>
                </div>
            </div>
        </>
    );
};

export default BulletinPage;
