import React from "react";
import MainHero from "../../components/Widget/MainBlock/MainHero/mainHero.jsx";
import WelcomeBlock from "../../components/Widget/MainBlock/WelcomeBlock/welcomeBlock.jsx";
import SliderCourse from "../../components/Widget/MainBlock/SliderCourse/sliderCourse.jsx";
import InfoTableBlock from "../../components/Widget/MainBlock/InfoTableBlock/infoTableBlock.jsx";
import NewsBlock from "../../components/Widget/MainBlock/NewsBlock/newsBlock.jsx";
import PartnersSlider from "../../components/Widget/MainBlock/PartnersSlider/partnersSlider.jsx";
import CriteriaMember from "../../components/Widget/MainBlock/CriteriaMember/criteriaMembers.jsx";

const MainPage = () => {
    return (
        <div>
            <MainHero />
            <WelcomeBlock />
            <SliderCourse />
            <InfoTableBlock />
            <NewsBlock />
            <PartnersSlider />
            <CriteriaMember />
        </div>
    );
};

export default MainPage;
