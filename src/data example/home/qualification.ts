import { getContent } from "../../utils/function"
import { Qualificaton } from "../../utils/type"

export const maps = []

let content: any = {
    en: {
        title: 'Qualification',
        subtitle: 'My personal journey',
        categories: [
            { name: "Education", icon: "hat-svg", width: '36', },
            { name: "Experience", icon: 'bag-svg', width: '31', },
        ],
        qualifications: [
            {
                title: 'title',
                adress: 'addres',
                icon: 'calendar',
                period: '2017-2018'
            },
           
        ]
    },
    fr: {
        title: 'Qualification',
        subtitle: 'Mon parcours personnel',
        categories: [
            { name: "Education", icon: "hat-svg", width: '36', },
            { name: "Expérience", icon: 'bag-svg', width: '31', },
        ],
        qualifications: [
            {
                title: "titre",
                adress: 'adresse',
                icon: 'calendar',
                period: '2017-2018'
            },
          
        ]
    }

}

export const QUALIFICATION: Qualificaton =  getContent(content)
