
import { getContent } from "../utils/function";
import { Project } from "../utils/type";

const content: any = {
    en: {
        projects: [],
    },
    fr: {
        projects: [],
    }
}

export const PROJECT: Project = getContent(content)