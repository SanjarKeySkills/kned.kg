import React, { useEffect } from "react";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import NewsCard from "../../components/Widget/NewsBlock/NewsCards/NewsCards.jsx";

const NewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroHeader />
            <NewsCard />
        </>
    );
};

export default NewsPage;
