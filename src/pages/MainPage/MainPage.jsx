import React from "react";
import VideoHero from "../../components/Widget/MainBlock/VideoHero/index.jsx";
import WelcomeBlock from "../../components/Widget/MainBlock/WelcomeBlock/index.jsx";
import InfoTableBlock from "../../components/Widget/MainBlock/InfoTableBlock/index.jsx";
import NewsBlock from "../../components/Widget/MainBlock/NewsBlock/index.jsx";
import PartnersSlider from "../../components/Widget/MainBlock/PartnersSlider/index.jsx";
import CriteriaMember from "../../components/Widget/MainBlock/CriteriaMember/index.jsx";

const MainPage = () => {
    return (
        <div>
            <VideoHero />
            <WelcomeBlock />
            <InfoTableBlock />
            <NewsBlock />
            <PartnersSlider />
            <CriteriaMember />
        </div>
    );
};

export default MainPage;
