# Pet-project messenger

In this project I'm using [Handlebars](https://handlebarsjs.com/) and [Parcel](https://parceljs.org/).

- [Description](#description)
- [Installation](#installation)
- [Code style](#code-style)

## Description

This is my pet project for yandex praktikum. I'm writting a messenger for communication like telegram, whatsapp e.t.c.

## Installation

You need to download this repo from github and run command:

```js
npm i
```

after that you can use this project 2 ways:

```js
npm run dev
```

Will run parcel build and parcel dev server

```js
npm run start
```

Will start express server with all available files after parcel build

## Code style

In that project I'm using simple CSS with postCSS modules(import, nesting, autoprefixer). All CSS styles divided in separate modules, you shouldn't write huge CSS files, create small modules instead.

Pull-request should be created after completion of the sprint, name of this PR should be "sprint_i", where i - number of sprint.

Branch "deploy" uses for project deploy on Netlify.