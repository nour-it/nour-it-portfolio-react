import { getContent } from "../../utils/function";
import { Client } from "../../utils/type";

const content: any = {
    en: {
        title: "Testimonial",
        subtitle: "My client saying",
        clients: [
          
        ],
    },
    fr: {
        title: "Témoignage",
        subtitle: "Ce que disent mes clients",
        clients: [
           
        ],
    }

}

export const CLIENT: Client = getContent(content)
