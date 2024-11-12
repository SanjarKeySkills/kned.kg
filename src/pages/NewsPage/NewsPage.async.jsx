import { lazy } from "react";

const NewsPageAsync = lazy(() => import("./NewsPage.jsx"));

export { NewsPageAsync as NewsPage };
