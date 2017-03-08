# generator-react-stuff [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generates some react component and other stuff.

This is a tool to generate react component skeletons.

It can generate stateless function components, es6 class components, and components
that are connected to Redux store.

The format is pretty specific to a particular project I work on. Please submit an issue if you actually use this and want to be able to configure file extensions and whatnot.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-stuff. If you are unfamiliar with Yeoman, have a read.

```bash
# or npm
yarn install -g yo
yarn install -g generator-react-stuff
```

## Set up

To perform set up (**required**), run:

`yo react-stuff`

You'll be asked a couple of questions to determine where files should be placed within your project.

* Component root
* Whether you want to extend class style components from `Component` or `PureComponent`

*Please note that this will create a `.yo-rc.json` in your project root. Add this to your gitignore if you need to.*

## Usage

Please run commands in the root of your project.

#### Generate a component

`yo react-stuff:component`

Options:
* Name
* Stateless function vs class
* CSS file
* Additional path to where the component folder should be placed

E.g. if your component root was set up as `./src/components`, and you specify additional path of `pages`, the new component folder will be `./src/components/pages/MyComponent`

Output:
```
MyComponent/
  MyComponent.jsx
  MyComponent.css
```

#### Generate a 'container' component (i.e. connected to a redux store)

`yo react-stuff:container`

Options:
* Name
* CSS file
* Additional path to where the component folder should be placed

## License

MIT © [Tyler Crammond](http://tylercrammond.com)


[npm-image]: https://badge.fury.io/js/generator-react-stuff.svg
[npm-url]: https://npmjs.org/package/generator-react-stuff
[travis-image]: https://travis-ci.org/tcrammond/generator-react-stuff.svg?branch=master
[travis-url]: https://travis-ci.org/tcrammond/generator-react-stuff
[daviddm-image]: https://david-dm.org/tcrammond/generator-react-stuff.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tcrammond/generator-react-stuff
