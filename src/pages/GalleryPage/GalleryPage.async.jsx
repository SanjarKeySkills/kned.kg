import { lazy } from "react";

const GalleryPageAsync = lazy(() => import("./GalleryPage"));

export { GalleryPageAsync as GalleryPage };
