import React from "react";
import Header from "../../components/Widget/LayoutsComponentsBlock/Header/header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Widget/LayoutsComponentsBlock/Footer/footer.jsx";

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default DefaultLayout;
