import { getContent } from "../utils/function";
import { Support } from "../utils/type";

const content: any = {
    en: {
        supports: [],
    },
    fr: {
        supports: [],
    }
}

export const SUPPORT: Support = getContent(content)
