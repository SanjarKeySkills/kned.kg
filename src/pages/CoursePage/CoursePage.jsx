import React from "react";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import Annotation from "../../components/Widget/CoursesBlock/Annotation/Annotation.jsx";
import Course from "../../components/Widget/CoursesBlock/Course/Course.jsx";
import SliderCourseIfcBtn from "../../components/Widget/SliderCourseIfcBtn/SliderCourseIfcBtn.jsx";
import CourseProgram from "../../components/Widget/CoursesBlock/CourseProgram/CourseProgram.jsx";

// import Schedulle from "../../components/Widget/CoursesBlock/Schedulle/Schedulle.jsx";

const CoursePage = () => {
    return (
        <div>
            <HeroHeader />
            <Annotation />
            <Course />
            <SliderCourseIfcBtn />
            <CourseProgram />
            {/* <CourseSliderMooze /> */}
            {/* <Schedulle /> */}
        </div>
    );
};

export default CoursePage;
