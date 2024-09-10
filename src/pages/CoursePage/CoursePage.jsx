import React from "react";
import Course from "../../components/Widget/CoursesBlock/Course/index.jsx";
import Trainings from "../../components/Widget/CoursesBlock/Trainings/index.jsx";
import Schedulle from "../../components/Widget/CoursesBlock/Schedulle/index.jsx";
import BannerCourse from "../../components/Widget/CoursesBlock/BannerCourse/index.jsx";

const CoursePage = () => {
    return (
        <div>
            <Schedulle />
            <BannerCourse />
            <Course />
            <Trainings />
        </div>
    );
};

export default CoursePage;
