
import { getContent } from "../utils/function";
import { Experience } from "../utils/type";

const content: any = {
    en: {
        experiences: [
            {
                title: "title",
                adress: "Tixpros, Lome-Togo",
                periode: "Oct 2021 - Dec 2021",
                description: ` description
                
            `},
        ],
    },
    fr: {
        experiences: [
            {
                title: 'titre',
                adress: 'Tixpros, Lome-Togo',
                date: 'Oct 2021 - Dec 2021',
                description: `
                description
                `},
        ],
    }
}

export const EXPERIENCE: Experience = getContent(content)