import { getContent } from "../utils/function";
import { Support } from "../utils/type";

const content: any = {
    en: {
        supports: [
            {
                title: "Design integration",
                description: "No description yet",
                illustration: "Oct 2021 - Dec 2021",
                illustrationPosition: `left`,
                img: "integration.jpg"
            },
        ],
    },
    fr: {
        supports: [
            {
                title: "Intégration de maquette",
                description: "Nous intégrons votre maquette en html/css, wordpress, react, etc...",
                illustration: "Oct 2021 - Dec 2021",
                illustrationPosition: `left`,
                img: "integration.jpg",
            },
        ],
    }
}

export const SUPPORT: Support = getContent(content)
