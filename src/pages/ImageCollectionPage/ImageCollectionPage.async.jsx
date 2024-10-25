import { lazy } from "react";

const ImageCollectionAsync = lazy(() => import("./ImageCollectionPage"));

export { ImageCollectionAsync as ImageCollectionPage };
