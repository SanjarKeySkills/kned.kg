import React, { useEffect } from "react";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import ArticlesCards from "../../components/Widget/ArticlesBlock/ArticlesCard/ArticleCard.jsx";

const MembersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroHeader />
            <ArticlesCards />
        </>
    );
};

export default MembersPage;
