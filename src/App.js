import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import { MainPage } from "./pages/MainPage/MainPage.async";
import { MemberPage } from "./pages/MemberPage/MemberPage.async.jsx";
import { MembersPage } from "./pages/MembersPage/MembersPage.async.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.async";
import { AboutPage } from "./pages/AboutPage/AboutPage.async";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage.async";
import { CoursePage } from "./pages/CoursePage/CoursePage.async";
import { GovernancePage } from "./pages/GovernancePage/GovernancePage.async";
import { ContactPage } from "./pages/ContactPage/ContactPage.async";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage.async";
import { ImageCollectionPage } from "./pages/ImageCollectionPage/ImageCollectionPage.async";
import { NewsPage } from "./pages/NewsPage/NewsPage.async";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <MainPage />
                            </Suspense>
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
                        path="/member/:type/:id"
                        // в таком виде to useParams будет приходить строках в виде
                        // ключа с теми значениями
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <MemberPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <AboutPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/board"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <GovernancePage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ServicesPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContactPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/courses"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <CoursePage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/news"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <NewsPage />
                            </Suspense>
                        }
                    />
                    {/* <Route
                        path="/articles"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <NewsPage />
                            </Suspense>
                        }
                    /> */}
                    <Route
                        path="/gallery"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <GalleryPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/event/:type/:id"
                        // в таком виде to useParams будет приходить строках в виде
                        // ключа с теми значениями
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ImageCollectionPage />
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
                </Route>
            </Routes>
        </>
    );
};

export default App;
