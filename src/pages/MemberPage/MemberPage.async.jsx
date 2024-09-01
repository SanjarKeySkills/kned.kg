import { lazy } from "react";

const MemberPageAsync = lazy(() => import("./MemberPage"));

export { MemberPageAsync as MemberPage };
