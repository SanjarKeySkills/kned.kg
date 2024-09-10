import React from "react";
import Header from "../../components/Widget/LayoutsComponentsBlock/Header/index.jsx";
import Footer from "../../components/Widget/LayoutsComponentsBlock/Footer/index.jsx";
import Hero from "../../components/Widget/LayoutsComponentsBlock/Hero/index.jsx";
import MemberButton from "../../components/Widget/LayoutsComponentsBlock/MemberButton/index.jsx";
import { Outlet } from "react-router-dom";

const LayoutWithHero = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Outlet />
            <MemberButton />
            <Footer />
        </div>
    );
};

export default LayoutWithHero;
