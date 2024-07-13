import { countCompletedProjects, getContent, getExperienceYears } from "../../utils/function";
import { HomeAbout } from "../../utils/type";

const projects = countCompletedProjects();
const years = getExperienceYears();

const content: any = {
    en: {
        title: "About Me",
        subtitle: "My Introducation",
        abouts: [
            {
                'Experience': { value: years + " years", icon: "award-svg", width: "31" },
            },
            {
                'Completed': { value: projects + " project" + (projects > 1 ? "s" : ""), icon: "cloud-svg", width: "26" },
            },
            {
                'Supports': { value: "online 24/7", icon: "hear-phone-svg", width: "20" }
            }
        ],
        previousRole: ``,
        resumeLink: ``,
        download: "Download CV"
    },
    fr: {
        title: "A propos de moi",
        subtitle: "Ma présentation",
        abouts: [
            {
                'Experience': { value: years + " ans", icon: "award-svg", width: "31" },
            },
            {
                'Completed': { value: projects + " project" + (projects > 1 ? "s" : ""), icon: "cloud-svg", width: "26" },
            },
            {
                'Supports': { value: "online 24/7", icon: "hear-phone-svg", width: "20" }
            }
        ],
        previousRole: ``,
        resumeLink: ``,
        download: "Télécharger le CV"
    }
}

export const ABOUT: HomeAbout = getContent(content)