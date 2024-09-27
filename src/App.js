import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import { MainPage } from "./pages/MainPage/MainPage.async";
import MembersPage from "./pages/MembersPage/MembersPage.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.async";
// import { AboutPage } from "./pages/AboutPage/AboutPage.async";
// import { CoursePage } from "./pages/CoursePage/CoursePage.async";
// import { GovernancePage } from "./pages/GovernancePage/GovernancePage.async";
import { MemberPage } from "./pages/MemberPage/MemberPage.async.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route
                        index
                        element={
                            <MainPage />
                            // <Suspense fallback={<div>Loading...</div>}>
                            //     <MainPage />
                            // </Suspense>
                        }
                    />
                    <Route
                        path="/members"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <MembersPage />
                            </Suspense>
                        }
                    />

                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ErrorPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/member/:id"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <MemberPage />
                            </Suspense>
                        }
                    />
                </Route>
                {/* <Route element={<LayoutWithHero />}>
					<Route path="/members/:id" element={<MemberPage />} />
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
                </Route> */}
            </Routes>
        </>
    );
};

export default App;
