import { lazy } from "react";

const ContactPageAsync = lazy(() => import("./ContactPage"));

export { ContactPageAsync as ContactPage };
