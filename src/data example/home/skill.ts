import { getContent } from "../../utils/function"
import { Skill } from "../../utils/type"


const content: any = {
    en: {
        title: "Skills",
        subtitle: "My technical level",
        skills: [{
            images: ["figma.png"],
            name: "Figma",
            category: "UI Design, Prototype",
            height: "50px",
        },
       ],
    },
    fr: {
        title: "Compétences",
        subtitle: "Mon niveau technique",
        skills: [{
            images: ["figma.png"],
            name: "Figma",
            category: "UI Design, Prototype",
            height: "50px",
        },],
    }
}


export const SKILL: Skill = getContent(content)


