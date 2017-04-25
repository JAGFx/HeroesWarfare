# HeroesWarfare

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

An documentation are available here: `documentation/index.html` (Need to be generated)

## Prerequisites

* [NodeJS](https://nodejs.org/en/)
* [Bower](https://bower.io/#install-bower)
* [Compass](http://compass-style.org/install/)

## Installation

Dependencies

````bash
$ npm install
$ bower install
````

Web resources

````bash
$ compass compile -e production --force
````

Development server

````bash
$ npm start
````

Generate documentation

````bash
$ npm compodoc
````


## Build

The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

````bash
$ ng build
````

## Project structure

Entry point: `src/`

Folders:

* `app/components/` : Components use as element into view ( Hero card ) + commons class

* `app/directives/` : Class use to improve the UI comportement ( No view template need )

* `app/pipes/` : Class use to filtering array with custom function

* `app/services/` : Class use to interact with distant server (Like REST API) and provide formalized object to others class (Component, Pipes, Directives, ...)

* `app/views/` : Component use as views for end user

* `assets/` : Regroupe tous les fichiers de style (CSS et JavaScript) + image servant uniquement à ces fichiers.

* `bin/`: Resources use in app such as Hero pic
