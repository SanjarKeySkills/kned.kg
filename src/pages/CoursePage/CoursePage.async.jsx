import { lazy } from "react";

const CoursePageAsync = lazy(() => import("./CoursePage"));

export { CoursePageAsync as CoursePage };
