import { lazy } from "react";

const MembersPageAsync = lazy(() => import("./MembersPage.jsx"));

export { MembersPageAsync as MembersPage };
