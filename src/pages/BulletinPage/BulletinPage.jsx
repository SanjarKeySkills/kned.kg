import React, { useEffect } from "react";
import styles from "./bulletinPage.module.scss";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import newsData from "../../components/Widget/NewsBlock/NewsCards/newsData.js";
import FormatText from "./FormatText.jsx";

const BulletinPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const bulletin = newsData.find((bulletin) => bulletin.id === id);
    // получаем тe новость с такой id и ту новость приводим на нашу константу
    // вместо type -  встанет массив newsData

    return (
        <>
            <HeroHeader />
            <div className={styles.newsPage}>
                <div className={styles.newsPageContainer}>
                    <h2 className={styles.newsTitle}>
                        <FormatText text={bulletin.title} />
                    </h2>
                    <span className={styles.newsDataInf}>{bulletin.date}</span>
                    <img
                        src={bulletin.image}
                        alt="newsImg"
                        className={styles.newsImg}
                    />
                    <p className={styles.newsInformation}>
                        <FormatText text={bulletin.information} />
                    </p>
                </div>
            </div>
        </>
    );
};

export default BulletinPage;

/* {FormatText(bulletin.title)} */
// const formatText = (text) => {
//     return text
//         .split("\n")
//         .map((line, index) => <p key={index}>{line.trim()}</p>);
// };
