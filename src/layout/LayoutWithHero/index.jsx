import React from "react";
import Header from "../../components/Widget/Header/header.jsx";
import Footer from "../../components/Widget/Footer/footer.jsx";
import Hero from "../../components/Widget/Hero";
// import { Outlet } from "react-router-dom";

const LayoutWithHero = () => {
    return (
        <div>
            <Header />
            <Hero />
            {/* <Outlet /> */}
            <Footer />
        </div>
    );
};

export default LayoutWithHero;
