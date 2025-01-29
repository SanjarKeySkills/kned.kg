import React, { useEffect } from "react";
import HeroCourse from "../../components/Widget/CorpdirBlock/HeroCourse/HeroCourse.jsx";
import Accordion from "../../components/Widget/CorpdirBlock/Accordion/Accordion.jsx";

const CorpdirPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeroCourse />
            <Accordion />
        </div>
    );
};

export default CorpdirPage;
