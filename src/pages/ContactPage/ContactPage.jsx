import React, { useEffect } from "react";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader.jsx";
import Contact from "../../components/Widget/ContactBlock/Contact/Contact.jsx";

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeroHeader />
            <Contact />
        </div>
    );
};

export default ContactPage;
