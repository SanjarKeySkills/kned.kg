import React, { useEffect } from "react";
import styles from "./NewsPage.module.scss";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import newsData from "../../components/Widget/NewsBlock/NewsCards/newsData.js";

const BulletinPage = () => {
    return (
        <div>
            {/* 
 useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id, type } = useParams();

    const bulletin = newsData[type].find((bulletin) => bulletin.id === id);

    const formatText = (text) => {
        return text
            .split("\n")
            .map((line, index) => <p key={index}>{line.trim()}</p>);
    };

    return (
        <>
            <HeroHeader />
            <div className={styles.newPage}>
                <img src={bulletin.image} alt="bulletinImage" />
                <div className={styles.newsPageWrapper}>
                    <div className={styles.newsInfo}>
                        <div>{bulletin.name}</div>
                        <div>{formatText(bulletin.information)}</div>
                    </div>
                </div>
            </div>
        </>
    ); */}
        </div>
    );
};

export default BulletinPage;
