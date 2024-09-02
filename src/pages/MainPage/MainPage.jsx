import React from "react";
import VideoHero from "../../components/Widget/VideoHero/videoHero.jsx";
import BannerCourse from "../../components/Widget/BannerCourse/bannerCourse.jsx";
import WelcomeBlock from "../../components/Widget/WelcomeBlock/index.jsx";
import InfoTableBlock from "../../components/Widget/InfoTableBlock/infoTableBlock.jsx";
import NewsBlock from "../../components/Widget/NewsBlock/newsBlock.jsx";
import CriteriaMember from "../../components/Widget/CriteriaMember/criteriaMember.jsx";
import PartnersSlider from "../../components/Widget/ParnersSlider/partnersSlider.jsx";

const MainPage = () => {
    return (
        <div>
            <VideoHero />
            <WelcomeBlock />
            <BannerCourse />
            <InfoTableBlock />
            <NewsBlock />
            <PartnersSlider />
            <CriteriaMember />
        </div>
    );
};

export default MainPage;
