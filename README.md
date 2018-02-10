# e-Pricer built with Angular, ngrx and Angular Material Starter 
by [@kiranchowdhury](https://www.facebook.com/kiran.s.chowdhury)


## Table of Content

  * [Getting Started](#getting-started)
  * [Useful Commands](#useful-commands)
  * [Learning Materials](#learning-materials)
  

## Getting started
```bash
git clone https://github.com/kiranchowdhury/ibm-ui.git

Installing the app -
npm install

Development mode -
 - Start the local Liberty profile server
 - In the eprestcontroller.js configure the liberty url, userid and password
 - to start the node backend (BFF) execute: npm run node:start
 - to start the frontend execute: npm run start
 - Browser will automatically open and application will be launched

Production mode
 - In the eprestcontroller.js configure the liberty url, userid and password
 - npm run node:prod
```

## Useful Commands
  * `npm start` - starts a dev server and opens browser with running app
  * `npm run test` - runs lint and tests
  * `npm run watch` - runs tests in watch mode
  * `npm run prod` - runs full prod build and serves prod bundle
  * `npm run prettier` - runs prettier to format whole code base (`.ts` and `.scss`) 
  * `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application) 


## Learning Materials

  * [Blog post about Best Practices for Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81) used in this starter project

#### Theming 

  * [Blog post](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)


 
## Features

* custom themes support (3 themes included)
* lazy-loading of Manage quotes module
* lazy reducers
* localStorage ui state persistence
* `@ngrx/effects` for API requests
* fully responsive design
* angular-material and custom components in `SharedModule`
 

### Acknowledgements

Built with and uses [Angular CLI](https://github.com/angular/angular-cli)
