import React from "react";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import Schedulle from "../../components/Widget/CoursesBlock/Schedulle/Schedulle.jsx";
import Course from "../../components/Widget/CoursesBlock/Course/Course.jsx";
import CourseProgram from "../../components/Widget/CoursesBlock/CourseProgram/CourseProgram.jsx";
import SliderCourseIfcBtn from "../../components/Widget/SliderCourseIfcBtn/SliderCourseIfcBtn.jsx";
// import CourseSliderMooze from "../../components/Widget/CoursesBlock/CourseSlider/CourseSlider.jsx";

const CoursePage = () => {
    return (
        <div>
            <HeroHeader />
            <Schedulle />
            <SliderCourseIfcBtn />
            <Course />
            <CourseProgram />
            {/* <CourseSliderMooze /> */}
        </div>
    );
};

export default CoursePage;
