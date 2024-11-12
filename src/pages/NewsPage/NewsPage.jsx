import React from "react";
import styles from "./newsPage.module.scss";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import NewsCard from "../../components/Widget/NewsBlock/NewsCards/NewsCards.jsx";

const NewsPage = () => {
    return (
        <>
            <HeroHeader />
            <NewsCard />
        </>
    );
};

export default NewsPage;
