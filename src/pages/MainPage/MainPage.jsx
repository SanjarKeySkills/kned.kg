import React from "react";
import MainHero from "../../components/Widget/MainBlock/MainHero/mainHero.jsx";
import WelcomeBlock from "../../components/Widget/MainBlock/WelcomeBlock/welcomeBlock.jsx";
import SliderCourseIfcBtn from "../../components/Widget/SliderCourseIfcBtn/SliderCourseIfcBtn.jsx";
import InfoTableBlock from "../../components/Widget/MainBlock/InfoTableBlock/infoTableBlock.jsx";
import NewsBlock from "../../components/Widget/MainBlock/NewsBlock/newsBlock.jsx";
import CriteriaMember from "../../components/Widget/MainBlock/CriteriaMember/criteriaMembers.jsx";
import PartnersSlider from "../../components/Widget/MainBlock/PartnersSlider/partnersSlider.jsx";
//
//
//
// import ImgSlideResponcive1 from "../../components/UI/ImgSliderPartners/ImgSlideResponcive1/ImgSlideResponcive1.jsx";
// import ImgSlideResponcive2 from "../../components/UI/ImgSliderPartners/ImgSlideResponcive2/ImgSlideResponcive2.jsx";
// import ImgSlideResponcive3 from "../../components/UI/ImgSliderPartners/ImgSlideResponcive3/ImgSlideResponcive3.jsx";
// import ImgSlideResponcive4 from "../../components/UI/ImgSliderPartners/ImgSlideResponcive4/ImgSlideResponcive4.jsx";
// import ImgSlideResponcive5 from "../../components/UI/ImgSliderPartners/ImgSlideResponcive5/ImgSlideResponcive5.jsx";
// import ImgSlideResponcive6 from "../../components/UI/ImgSliderPartners/ImgSlideResponcive6/ImgSlideResponcive6.jsx";

const MainPage = () => {
    return (
        <>
            <MainHero />
            <WelcomeBlock />
            <SliderCourseIfcBtn />
            <InfoTableBlock />
            <NewsBlock />
            <PartnersSlider />
            <CriteriaMember />
            {/*  */}
            {/* <ImgSlideResponcive1 />
            <ImgSlideResponcive2 />
            <ImgSlideResponcive3 />
            <ImgSlideResponcive4 />
            <ImgSlideResponcive5 />
            <ImgSlideResponcive6 /> */}
        </>
    );
};

export default MainPage;
