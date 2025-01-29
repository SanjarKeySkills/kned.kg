import React, { useEffect } from "react";
import About from "../../components/Widget/AboutBlock/AboutBlock.jsx";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeroHeader />
            <About />
        </div>
    );
};

export default AboutPage;
