import { getContent } from "../../utils/function"
import { Skill } from "../../utils/type"


const content: any = {
    en: {
        title: "Skills",
        subtitle: "My technical level",
        skills: [],
    },
    fr: {
        title: "Compétences",
        subtitle: "Mon niveau technique",
        skills: [],
    }
}


export const SKILL: Skill = getContent(content)


