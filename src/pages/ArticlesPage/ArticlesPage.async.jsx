import { lazy } from "react";

const ArticlesPageAsync = lazy(() => import("./ArticlesPage.jsx"));

export { ArticlesPageAsync as ArticlesPage };
