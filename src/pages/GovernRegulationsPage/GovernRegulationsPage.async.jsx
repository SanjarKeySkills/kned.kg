import { lazy } from "react";

const GovernRegulationsPageAsync = lazy(() =>
    import("./GovernRegulationsPage")
);
export { GovernRegulationsPageAsync as GovernRegulationsPage };
