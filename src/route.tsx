
import { RouteObject } from "react-router-dom";
import HomeIndex from "./pages/home/HomeIndex";
import ExperienceIndex from "./pages/ExperienceIndex";
import { URLS } from "./data/url";
import ProjectIndex from "./pages/ProjectIndex";
import SupportIndex from "./pages/SupportIndex";

const defaults: RouteObject[] = [
    {
        path: URLS.home,
        element: <HomeIndex />,
    },
    {
        path: URLS.experience,
        element: <ExperienceIndex />,
    },
    {
        path: URLS.project,
        element: <ProjectIndex />,
    },
    {
        path: URLS.support,
        element: <SupportIndex />,
    },
]

export const routeObject: RouteObject[] = defaults.concat(defaults.map(r => ({...r, path: `/:lang${r.path}`})))

