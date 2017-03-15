const COMPONENT_ROOT = {
  type: 'input',
  name: 'componentRoot',
  message: 'Please enter the top-level path of where you keep your components, relative to your project root.',
  default: './src/components'
}

const STATE_CONTAINER = {
  type: 'list',
  name: 'stateContainer',
  message: 'Choose your state container:',
  choices: ['Redux', 'Mobx', 'None'],
  default: 0
}

const REDUCER_ROOT = {
  type: 'input',
  name: 'reducerRoot',
  message: `Please enter the top-level path of where you keep your reducers, relative to your project root. \n\nIf you don't keep them all in one place, use the root of your source files.`,
  default: './src'
}

const COMPONENT_CLASS = {
  type: 'list',
  name: 'componentClass',
  message: `Choose which component class you want stateful components to extend:`,
  choices: ['Component', 'PureComponent'],
  default: 0
}

module.exports = {
  STATE_CONTAINER,
  COMPONENT_ROOT,
  REDUCER_ROOT,
  COMPONENT_CLASS
}
