import { lazy } from "react";

const CharterPageAsync = lazy(() => import("./CharterPage"));

export { CharterPageAsync as CharterPage };
