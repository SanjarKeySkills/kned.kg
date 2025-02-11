import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout, { ContentFallback } from "./layout/DefaultLayout";
import { MainPage } from "./pages/MainPage/MainPage.async.jsx";
import { MemberPage } from "./pages/MemberPage/MemberPage.async.jsx";
import { MembersPage } from "./pages/MembersPage/MembersPage.async.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.async.jsx";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage.async.jsx";
import { CoursePage } from "./pages/CoursePage/CoursePage.async.jsx";
import { GovernancePage } from "./pages/GovernancePage/GovernancePage.async.jsx";
import { ContactPage } from "./pages/ContactPage/ContactPage.async.jsx";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage.async.jsx";
import { ImageCollectionPage } from "./pages/ImageCollectionPage/ImageCollectionPage.async.jsx";
import { NewsPage } from "./pages/NewsPage/NewsPage.async.jsx";
import { BulletinPage } from "./pages/BulletinPage/BulletinPage.async.jsx";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage.async.jsx";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage.async.jsx";
import { CharterPage } from "./pages/CharterPage/CharterPage.async.jsx";
import { MembershipRegulationsPage } from "./pages/MembershipRegulationsPage/MembershipRegulationsPage.async.jsx";
import { GovernRegulationsPage } from "./pages/GovernRegulationsPage/GovernRegulationsPage.async.jsx";
import { CorpdirPage } from "./pages/CorpdirPage/CorpdirPage.async.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.async.jsx";

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
                            <Suspense fallback={<ContentFallback />}>
                                <NewsPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/bulletin/:type/:id"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <BulletinPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/articles"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ArticlesPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/article/:type/:id"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ArticlePage />
                            </Suspense>
                        }
                    />
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
                        path="/charter"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <CharterPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/membershipRegulations"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <MembershipRegulationsPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/governRegulations"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <GovernRegulationsPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/corpdir"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <CorpdirPage />
                            </Suspense>
                        }
                    />
                </Route>
                <Route
                    path="*"
                    element={
                        // <Suspense fallback={<div>Loading...</div>}>
                        <ErrorPage />
                        // </Suspense>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
