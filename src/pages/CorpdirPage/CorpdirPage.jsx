import React, { useEffect } from "react";
import HeroCourse from "../../components/Widget/CorpdirBlock/HeroCourse/HeroCourse.jsx";
import Accordion from "../../components/Widget/CorpdirBlock/Accordion/Accordion.jsx";
import CorpdirInfo from "../../components/Widget/CorpdirBlock/CorpdirInfo/corpdirInfo.jsx";
import CorpdirAbout from "../../components/Widget/CorpdirBlock/CorpdirAbout/CorpdirAbout.jsx";

const CorpdirPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeroCourse />
            <CorpdirInfo />
            <CorpdirAbout />
            <Accordion />
        </div>
    );
};

export default CorpdirPage;
