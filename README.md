# generator-react-stuff [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generates some react component and other stuff.

This is a tool to generate react component skeletons.

It can generate stateless function components, es6 class components, and components
that are connected to Redux store.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-stuff. If you are unfamiliar with Yeoman, have a read.

```bash
# or npm
yarn install -g yo
yarn install -g generator-react-stuff
```

## Usage

Run commands in the root of your project.

To generate a regular component, run:

`yo react-stuff`

To generate a container component (i.e. connected to a redux store), run:

`yo react-stuff:container`

## License

MIT © [Tyler Crammond](http://tylercrammond.com)


[npm-image]: https://badge.fury.io/js/generator-react-stuff.svg
[npm-url]: https://npmjs.org/package/generator-react-stuff
[travis-image]: https://travis-ci.org/tcrammond/generator-react-stuff.svg?branch=master
[travis-url]: https://travis-ci.org/tcrammond/generator-react-stuff
[daviddm-image]: https://david-dm.org/tcrammond/generator-react-stuff.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tcrammond/generator-react-stuff
