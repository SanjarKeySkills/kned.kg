import React from "react";
import DefaultLayout from "./layout/DefaultLayout";
import LayoutWithHero from "./layout/LayoutWithHero";
import { MainPage } from "./pages/MainPage/MainPage.async";
import { Routes, Route } from "react-router-dom";
import { MemberPage } from "./pages/MemberPage/MemberPage.async";
import { Mistake404 } from "./pages/Mistake404/Mistake404.async";
import { AboutPage } from "./pages/AboutPage/AboutPage.async";
import { CoursePage } from "./pages/CoursePage/CoursePage.async";

const App = () => {
    return (
        <div>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/member/:id" element={<MemberPage />} />
                    <Route path="*" element={<Mistake404 />} />
                </Route>
                <Route element={<LayoutWithHero />}>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/courses" element={<CoursePage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
