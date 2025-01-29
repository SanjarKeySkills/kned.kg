import React, { useEffect } from "react";
import MainHero from "../../components/Widget/MainBlock/MainHero/mainHero.jsx";
import WelcomeBlock from "../../components/Widget/MainBlock/WelcomeBlock/welcomeBlock.jsx";
import SliderCourseIfcBtn from "../../components/Widget/SliderCourseIfcBtn/SliderCourseIfcBtn.jsx";
import InfoTableBlock from "../../components/Widget/MainBlock/InfoTableBlock/infoTableBlock.jsx";
import NewsBlock from "../../components/Widget/MainBlock/NewsBlock/newsBlock.jsx";
// import PartnersSlider from "../../components/Widget/MainBlock/PartnersSlider/PartnersSlider.jsx";
import CriteriaMember from "../../components/Widget/MainBlock/CriteriaMember/criteriaMembers.jsx";

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <MainHero />
            <WelcomeBlock />
            <SliderCourseIfcBtn />
            <InfoTableBlock />
            <NewsBlock />
            {/* <PartnersSlider /> */}
            <CriteriaMember />
        </>
    );
};

export default MainPage;
