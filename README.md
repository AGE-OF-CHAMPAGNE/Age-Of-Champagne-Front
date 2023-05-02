# AOC FRONTEND PART

## Authors: Gleb BUSHUKIN, Axel RHUL

## Quick Start

install npm packages
```shell
npm i
```

start development server
```shell
npm run dev
```

start rendering the components in the storybook (if required)
```shell
npm run storybook
```

## Dependencies And Project Initialization

This project is based on vite react
```shell
npm init vite
```

1) framework : react,
2) variant : JavaScript.

eslint and prettier
```shell
npx eslint --init
```

1) « How would you like to use ESLint? » : « To check syntax, find problems, and enforce code style »,
2) « What type of modules does your project use? » : « JavaScript modules (import/export) »,
3) « Which framework does your project use? » : « React »,
4) « Does your project use TypeScript? » : « No »,
5) « Where does your code run? » : « Browser »,
6) « How would you like to define a style for your project? » : « Use a popular style guide »,
7) « Which style guide do you want to follow? » : « Airbnb: https://github.com/airbnb/javascript »,
8) « What format do you want your config file to be in? » : « JavaScript »,
9) « Would you like to install them now with npm? » : « Yes »,

```shell  
npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
```

prop-types
```shell
npm install --save prop-types
```

fontawesome
```shell
npm install @fortawesome/fontawesome-svg-core \
            @fortawesome/free-solid-svg-icons \
            @fortawesome/react-fontawesome
```