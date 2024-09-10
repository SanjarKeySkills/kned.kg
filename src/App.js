import React, { Suspense } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import LayoutWithHero from "./layout/LayoutWithHero";
import { MainPage } from "./pages/MainPage/MainPage.async";
import { Routes, Route } from "react-router-dom";
import { MemberPage } from "./pages/MemberPage/MemberPage.async";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.async";
import { AboutPage } from "./pages/AboutPage/AboutPage.async";
import { CoursePage } from "./pages/CoursePage/CoursePage.async";
import { GovernancePage } from "./pages/GovernancePage/GovernancePage.async";
import { MembershipPage } from "./pages/MembershipPage/MembershipPage.async";

const App = () => {
    return (
        <div>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/members/:id" element={<MemberPage />} />
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ErrorPage />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<LayoutWithHero />}>
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <AboutPage />
                            </Suspense>
                        }
                    />
                    <Route path="/courses" element={<CoursePage />} />
                    <Route path="/board" element={<GovernancePage />} />
                    <Route path="/members" element={<MembershipPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
