# ![logo](public/favicon.ico) Nour It Portfolio

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Description](#description)
- [Installation](#installation)
- [Utilisation](#utilisation)
  - [1-compétences](#1-compétences)
  - [2-qualifications](#2-qualifications)
  - [3-projets](#3-projets)
  - [4-services](#4-services)
  - [5-clients ou témoignages](#5-clients-ou-témoignages)
  - [6-Expériences](#6-expériences)
- [Contribuer](#contribuer)
- [Licence](#licence)
- [Auteurs](#auteurs)
- [Remerciements](#remerciements)
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

c'est un portfolio fait en utilisant la librairie

- react
- react-router
- sass
- animejs
- firebase
- [live demo](https://nour-it-portfolio.web.app/#home){:target="\_blank"}

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
{
  images: string[],
  name: string,
  category: string,
  height: string,
}
```

### 2-qualifications
Rajoutez vos qualifications dans le fichier `src/data/home/qualification.ts`
au format
```typescript
{
  title: string,
  adress: string,
  icon: string,
  period: string
}
```

### 3-projets
Rajoutez vos qualifications dans le fichier `src/data/projects.ts`
au format


### 4-services

### 5-clients ou témoignages

### 6-Expériences

## Contribuer

## Licence

## Auteurs

## Remerciements
