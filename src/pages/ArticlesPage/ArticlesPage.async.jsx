import { lazy } from "react";

const ArticlesPageAsync = lazy(() => import("./ArticlesPage"));

export { ArticlesPageAsync as ArticlesPage };
