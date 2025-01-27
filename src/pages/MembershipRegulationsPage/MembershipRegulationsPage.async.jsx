import { lazy } from "react";

const MembershipRegulationsPageAsync = lazy(() =>
    import("./MembershipRegulationsPage")
);
export { MembershipRegulationsPageAsync as MembershipRegulationsPage };
