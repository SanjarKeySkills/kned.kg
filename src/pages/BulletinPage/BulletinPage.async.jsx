import { lazy } from "react";

const BulletinPageAsync = lazy(() => import("./BulletinPage.jsx"));

export { BulletinPageAsync as BulletinPage };
