import React from "react";
import Header from "../../components/Widget/LayoutsComponentsBlock/Header/header.jsx";
// import { Outlet } from "react-router-dom";
// import MemberButton from "../../components/Widget/LayoutsComponentsBlock/MemberButton/index.jsx";
import Footer from "../../components/Widget/LayoutsComponentsBlock/Footer/footer.jsx";

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <div style={{ height: "1000px" }}></div>
            {/* <Outlet />
            <MemberButton /> */}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
