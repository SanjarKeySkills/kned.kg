import React, { useEffect } from "react";
import ServicesBlock from "../../components/Widget/ServicesBlock/ServicesBlock.jsx";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroHeader />
            <ServicesBlock />
        </>
    );
};

export default ServicesPage;
