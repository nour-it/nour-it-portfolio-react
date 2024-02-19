<<<<<<< HEAD
<<<<<<< HEAD:src/type.ts

export type Service = {
    title: String,
    subtitle: String,
    services: Object[],
    previousRole: String,
    resumeLink: string,
    more: string,
}

export type HomeIntro = {
    title: String,
    descriptions: String[],
    say: string
}

export type AboutType = {
    value: String,
    icon: String
}

export type HomeAbout = {
    title: String,
    subtitle: String,
    abouts: Object[],
    previousRole: String,
    resumeLink: string,
    download: string
}

export type Qualificaton = {
    title: String
    subtitle: String
    categories: Object[]
    qualifications: Object[]
}

export type Client = {
    title: String,
    subtitle: String,
    clients: Object[],
}

export type Contact = {
    title: String,
    subtitle: String,
    contacts: Object[],
    write: string,
    send: string,
    talk: "string",
    with: string,  
    form: any,
    alert: string
}

export type Skill = {
    title: String,
    subtitle: String,
    skills: Object[],
}


export type Experience = {
    experiences: Object[]
}

export type project = {
    name: string,
    periode: string,
    description: string,
    link: string,
    completed: boolean,
    style: object,
    plateform: string
}
export type Project = {
    projects: project[]
}

export type support = {
    title: string,
    description: string,
    illustration: string,
    illustrationPosition: "left" | "right",
}

export type Support = {
    supports: support[]
=======
=======
>>>>>>> pro

export type Service = {
    title: String,
    subtitle: String,
    services: Object[],
    previousRole: String,
    resumeLink: string,
    more: string,
}

export type HomeIntro = {
    title: String,
    descriptions: String[],
    say: string
}

export type AboutType = {
    value: String,
    icon: String
}

export type HomeAbout = {
    title: String,
    subtitle: String,
    abouts: Object[],
    previousRole: String,
    resumeLink: string,
    download: string
}

export type Qualificaton = {
    title: String
    subtitle: String
    categories: Object[]
    qualifications: Object[]
}

export type Client = {
    title: String,
    subtitle: String,
    clients: Object[],
}

export type Contact = {
    title: String,
    subtitle: String,
    contacts: Object[],
    write: string,
    send: string,
    talk: "string",
    with: string,  
    form: any,
    alert: string
}

export type Skill = {
    title: String,
    subtitle: String,
    skills: Object[],
}


export type Experience = {
    experiences: Object[]
}

export type project = {
    name: string,
    periode: string,
    description: string,
    link: string,
    completed: boolean,
    style: object,
    plateform: string,
    imgs: string[],
}
export type Project = {
    projects: project[]
}

export type support = {
    title: string,
    description: string,
    illustration: string,
    illustrationPosition: "left" | "right",
    img: string,
}

export type Support = {
    supports: support[]
<<<<<<< HEAD
>>>>>>> pro:src/utils/type.ts
=======
>>>>>>> pro
}