import { getContent } from "../../utils/function";
import { HomeIntro } from "../../utils/type";


const content: any = {
    en: {
        title: "Web and Mobile App developer",
        descriptions: [
            ``
        ],
        say: "say hello"

    },
    fr: {
        title: "Développeur d'applications Web et mobiles",
        descriptions: [
            ``
        ],
        say: "dire bonjour"
    }
}

export const intro: HomeIntro = getContent(content)