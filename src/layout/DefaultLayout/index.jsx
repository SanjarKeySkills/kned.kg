import React from "react";
import Header from "../../components/Widget/Header/header";
import { Outlet } from "react-router-dom";
import MemberButton from "../../components/Widget/MemberButton/memberButton.jsx";
import Footer from "../../components/Widget/Footer/footer";

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
