import { lazy } from "react";

const GovernancePageAsync = lazy(() => import("./GovernancePage.jsx"));

export { GovernancePageAsync as GovernancePage };
