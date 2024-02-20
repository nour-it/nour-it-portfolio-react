
import { getContent } from "../utils/function";
import { Project } from "../utils/type";

const content: any = {
    en: {
        projects: [
            {
                name: "portfolio",
                plateform: "web",
                periode: "Oct 2021 - Dec 2021",
                description: `
                    description
                `,
                link: "#",
                completed: true,
                style: { backgroundImage: "url(/img/logo512.png)", backgroundColor: "var(--cover)" },
                imgs: []
            },
           
        ],
    },
    fr: {
        projects: [
            {
                name: "portfolio",
                plateform: "web",
                periode: "Oct 2021 - Dec 2021",
                description: `
                description
                `,
                link: "#",
                completed: true,
                style: { backgroundImage: "url(/img/logo512.png)", backgroundColor: "var(--cover)" },
                imgs: []
            },
          
        ],
    }
}

export const PROJECT: Project = getContent(content)