import { lazy } from "react";

const MembershipPageAsync = lazy(() => import("./MembershipPage.jsx"));

export { MembershipPageAsync as MembershipPage };
