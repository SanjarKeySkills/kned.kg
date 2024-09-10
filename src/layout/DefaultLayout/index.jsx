import React from "react";
import Header from "../../components/Widget/LayoutsComponentsBlock/Header/index.jsx";
import { Outlet } from "react-router-dom";
import MemberButton from "../../components/Widget/LayoutsComponentsBlock/MemberButton/index.jsx";
import Footer from "../../components/Widget/LayoutsComponentsBlock/Footer/index.jsx";

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <MemberButton />
            <Footer />
        </div>
    );
};

export default DefaultLayout;
