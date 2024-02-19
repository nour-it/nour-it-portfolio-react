
import { getContent } from "../utils/function";
import { Project } from "../utils/type";

const content: any = {
    en: {
        projects: [
            {
                name: "Fruit Nour Matching",
                plateform: "android",
                periode: "Oct 2021 - Dec 2021",
                description: `
                    No description yet
                `,
                link: "#fruitnourmatching",
                completed: true,
                style: { backgroundImage: "url(/img/project/fruitnourmatching/logo.png)", backgroundColor: "var(--cover)" },
                imgs: ["1.jpg", "2.jpg", "3.jpg"]
            },
            {
                name: "Cosmic",
                plateform: "web",
                periode: "Oct 2021 - Dec 2021",
                description: `
                    No description yet
                `,
                link: "#cosmic",
                completed: false,
                style: { backgroundImage: "url(/img/project/cosmic/logo.png)", backgroundColor: "var(--cover)" },
                imgs:  ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
            },
            
            {
                name: "Item Pos",
                plateform: "web",
                periode: "Oct 2021 - Dec 2021",
                description: `
                    No description yet
                `,
                link: "#itempos",
                completed: false,
                style: { backgroundImage: "url(/img/project/itempos/logo.png)", backgroundColor: "var(--cover)" },
                imgs:  ["1.png"]
            },
            
        ],
    },
    fr: {
        projects: [
            {
                name: "Fruit Nour Matching",
                plateform: "android",
                periode: "Oct 2021 - Dec 2021",
                description: `
                    C'est un jeu développer avec react-native.
                    Dans ce jeu, le joueur doit miser pour ensuite gagner un gain.
                    Le joueur a la possibilté d'augmenter la vitesse de défilement pour accroître d'avantage son gain.
                `,
                link: "#fruitnourmatching",
                completed: true,
                style: { backgroundImage: "url(/img/project/fruitnourmatching/logo.png)", backgroundColor: "var(--cover)" },
                imgs: ["1.jpg", "2.jpg", "3.jpg"]
            },
            {
                name: "Cosmic",
                plateform: "web",
                periode: "Oct 2021 - Dec 2021",
                description: `
                    C'est un jeu développer avec react-native.
                    Dans ce jeu, le joueur doit miser pour ensuite gagner un gain.
                    Le joueur a la possibilté d'augmenter la vitesse de défilement pour accroître d'avantage son gain.
                `,
                link: "#cosmic",
                completed: false,
                style: { backgroundImage: "url(/img/project/cosmic/logo.png)", backgroundColor: "var(--cover)" },
                imgs: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
            },
            
            {
                name: "Item Pos",
                plateform: "web",
                periode: "Oct 2021 - Dec 2021",
                description: `
                    C'est un jeu développer avec react-native.
                    Dans ce jeu, le joueur doit miser pour ensuite gagner un gain.
                    Le joueur a la possibilté d'augmenter la vitesse de défilement pour accroître d'avantage son gain.
                `,
                link: "#itempos",
                completed: false,
                style: { backgroundImage: "url(/img/project/itempos/logo.png)", backgroundColor: "var(--cover)" },
                imgs: ["1.png"]
            },
        ],
    }
}

export const PROJECT: Project = getContent(content)