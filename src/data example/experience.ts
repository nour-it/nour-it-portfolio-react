
import { getContent } from "../utils/function";
import { Experience } from "../utils/type";

const content: any = {
    en: {
        experiences: [],
    },
    fr: {
        experiences: [],
    }
}

export const EXPERIENCE: Experience = getContent(content)