import React, { useEffect } from "react";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import GovernBlock from "../../components/Widget/GovernBlock/GovernBlock.jsx";

const GovernancePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeroHeader />
            <GovernBlock />
        </div>
    );
};

export default GovernancePage;
