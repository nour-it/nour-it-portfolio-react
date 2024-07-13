<div align='center'>
  <img src="./public/logo512.png" width="150"/>
  <h1>Nour It Portfolio</h1>
</div>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [Description](#description)
- [Installation](#installation)
- [Utilisation](#utilisation)
  - [1-compétences](#1-compétences)
  - [2-qualifications](#2-qualifications)
  - [3-projets](#3-projets)
  - [4-services](#4-support)
  - [5-clients ou témoignages](#5-clients-ou-témoignages)
  - [6-Expériences](#6-expériences)
<!-- - [Contribuer](#contribuer)
- [Licence](#licence)
- [Auteurs](#auteurs)
- [Remerciements](#remerciements) -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description
c'est un portfolio fait en utilisant la librairie
- react
- react-router
- sass
- animejs
- firebase
- [live demo](https://nour-it-portfolio.web.app)
le lien vers le template figma [figma](https://www.figma.com/design/uOIw8brVkGT0wZnfby0NfU/nourit-(Community)?node-id=0-1&t=FCtFLjZDMC7RKo2i-0)

## Installation
En téléchargeant le dépôt dans un dossier portfolio

```bash
git clone https://github.com/nour-it/nour-it-portfolio-react.git portfolio
```

Aller dans le dossier portfolio

```bash
cd portfolio
```

Installer les dépendances

```bash
npm install
```

Renommer le dossier `src/data example` en `src/data` <br/>
Renommer le fichier `src/firebase.ts.example` en `src/firebase.ts` <br/>
Renommer le fichier `firebase.json.example` en `firebase.json` <br/>

Démarrer le serveur

```bash
npm run start
```

## Utilisation

les informations vous concernant se retrouveront dans le dossier `src/data`
renommer le dossier `src/data example` en `src/data`

### 1-compétences
Rajoutez vos compétences dans le fichier `src/data/home/skills.ts`
au format
```typescript
{                                          {
  images: string[],                          images: ["img1.jpg", "img2.png"],
  name: string,                   =>         name: "skill1 + skill2",
  category: string,                          category: "category",
  height: string,                            height: "50px",
}                                          }
```

### 2-qualifications
Rajoutez vos qualifications dans le fichier `src/data/home/qualification.ts`
au format
```typescript
{                                           {
  title: string,                              title: "qualification",
  adress: string,                  =>         adress: "adress",
  icon: string,                               icon: "calendar",
  period: string                              period: "2020-2022"
}                                           }
```

### 3-projets
Rajoutez vos qualifications dans le fichier `src/data/projects.ts`
au format

```typescript
{                                           {
  name: string,                               name: "Project Title",
  plateform: string,                          plateform: "project category",
  periode: string,                            periode: "Jan 2021 - Dec 2021",
  description: string,              =>        description: `description`
  link: string,                               link: "#tag",
  completed: boolean,                         completed: true,
  style: object,                              style: { backgroundImage: "url(/logo.png)", backgroundColor: "red" },
  imgs: string[]                              imgs: ["1.jpg", "2.jpg", "3.jpg"]
}                                           }
```


### 4-support

```typescript
{                                             {
    title: string,                              title: "service",
    description: string,             =>         description: "description",
    illustrationPosition: string,               illustrationPosition: `left`,
    img: string                                 img: "integration.jpg"
},                                            },
```

### 5-clients ou témoignages
```typescript
{                                              {
    name: string,                                name: "John Doe",
    domain: string,                   =>         domain: "web development"
    image: string,                               image: "client.png",
    message: string,                             message: "what client said"
},                                              },
```
### 6-Expériences
```typescript
{                                               {
  title: string,                                  title: "Title",
  adress: string,                                 adress: "Company, City-State",
  periode: string,                     =>         periode: "Jan 2021 - Dec 2021",
  description: string                             description: `description`
}                                               }

```

<!-- ## Contribuer

## Licence

## Auteurs -->

<!-- ## Remerciements -->
