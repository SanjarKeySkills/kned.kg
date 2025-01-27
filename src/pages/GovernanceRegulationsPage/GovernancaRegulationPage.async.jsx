import { lazy } from "react";

const GovernancaRegulationPageAsync = lazy(() =>
    import("./GovernanceRegulationPage")
);

export { GovernancaRegulationPageAsync as GovernanceRegulationPage };
