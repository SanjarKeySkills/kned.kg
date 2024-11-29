import React from "react";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import Schedulle from "../../components/Widget/CoursesBlock/Schedulle/Schedulle.jsx";
import SliderCourse from "../../components/Widget/MainBlock/SliderCourse/sliderCourse.jsx";
import Course from "../../components/Widget/CoursesBlock/Course/Course.jsx";
import CourseProgram from "../../components/Widget/CoursesBlock/CourseProgram/CourseProgram.jsx";
// import CourseSlider from "../../components/Widget/CoursesBlock/CourseSlider/CourseSlider.jsx";

const CoursePage = () => {
    return (
        <div>
            <HeroHeader />
            <Schedulle />
            <SliderCourse />
            <Course />
            <CourseProgram />
            {/* <CourseSlider /> */}
        </div>
    );
};

export default CoursePage;
