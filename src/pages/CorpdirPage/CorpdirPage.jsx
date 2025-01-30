import React, { useEffect } from "react";
import HeroCourse from "../../components/Widget/CorpdirBlock/HeroCourse/HeroCourse.jsx";

// import Accordion from "../../components/Widget/CorpdirBlock/Accordion/Accordion.jsx";
// import CorpdirAbout from "../../components/Widget/CorpdirBlock/CorpdirAbout/CorpdirAbout.jsx";
import Participants from "../../components/Widget/CorpdirBlock/Participants/Participants.jsx";
import CorpdirInfo from "../../components/Widget/CorpdirBlock/CorpdirInfo/corpdirInfo.jsx";
import CorpdirAnnotation from "../../components/Widget/CorpdirBlock/CorpdirAnnotation/CorpdirAnnotation.jsx";

const CorpdirPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeroCourse />
            <CorpdirInfo />
            <CorpdirAnnotation />
            <Participants />
            {/* <CorpdirAbout /> */}
            {/* <Accordion /> */}
        </div>
    );
};

export default CorpdirPage;
