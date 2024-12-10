import React from "react";
import MainHero from "../../components/Widget/MainBlock/MainHero/mainHero.jsx";
// import WelcomeBlock from "../../components/Widget/MainBlock/WelcomeBlock/welcomeBlock.jsx";
// import SliderCourseIfcBtn from "../../components/Widget/SliderCourseIfcBtn/SliderCourseIfcBtn.jsx";
// import InfoTableBlock from "../../components/Widget/MainBlock/InfoTableBlock/infoTableBlock.jsx";
// import NewsBlock from "../../components/Widget/MainBlock/NewsBlock/newsBlock.jsx";
// import CriteriaMember from "../../components/Widget/MainBlock/CriteriaMember/criteriaMembers.jsx";
// import PartnersSlider from "../../components/Widget/MainBlock/PartnersSlider/partnersSlider.jsx";
import ImgSlide1 from "../../components/UI/ImgSliderPartners/ImgSlide1/ImgSlide1.jsx";
import ImgSlide2 from "../../components/UI/ImgSliderPartners/ImgSlide2/ImgSlide2.jsx";
import ImgSlide3 from "../../components/UI/ImgSliderPartners/ImgSlide3/ImgSlide3.jsx";
import ImgSlide4 from "../../components/UI/ImgSliderPartners/ImgSlide4/ImgSlide4.jsx";
import ImgSlide5 from "../../components/UI/ImgSliderPartners/ImgSlide5/ImgSlide5.jsx";
import ImgSlide6 from "../../components/UI/ImgSliderPartners/ImgSlide6/ImgSlide6.jsx";

const MainPage = () => {
    return (
        <>
            <MainHero />
            {/* <WelcomeBlock /> */}
            {/* <SliderCourseIfcBtn /> */}
            {/* <InfoTableBlock /> */}
            {/* <NewsBlock /> */}
            {/* <PartnersSlider /> */}
            <ImgSlide1 />
            <ImgSlide2 />
            <ImgSlide3 />
            <ImgSlide4 />
            <ImgSlide5 />
            <ImgSlide6 />
            {/* <CriteriaMember /> */}
        </>
    );
};

export default MainPage;
