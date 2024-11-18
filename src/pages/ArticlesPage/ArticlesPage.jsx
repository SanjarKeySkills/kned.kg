import React from "react";
import styles from "./articlesPage.module.scss";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import ArticlesCards from "../../components/Widget/ArticlesBlock/ArticlesCard/ArticleCard.jsx";

const MembersPage = () => {
    return (
        <>
            <HeroHeader />
            <ArticlesCards />
        </>
    );
};

export default MembersPage;
