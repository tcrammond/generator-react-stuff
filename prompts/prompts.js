const NAME_COMPONENT = {
  type: 'input',
  name: 'name',
  message: 'Name your component (MyComponent)',
  default: 'MyComponent'
}

const INCLUDE_CSS = {
  type: 'confirm',
  name: 'includeCss',
  message: 'Do you want a CSS file?',
  default: true
}

const IS_STATELESS = {
  type: 'confirm',
  name: 'stateless',
  message: 'Is this a stateless functional component? (i.e. just a function)',
  default: true
}

const ADDITIONAL_PATH = (pathRoot) => {
  return {
    type: 'input',
    name: 'filepath',
    message: `Enter any additional path to where the folder should go (${pathRoot}/your/path/here):`,
    default: ''
  }
}

module.exports = {
  NAME_COMPONENT,
  INCLUDE_CSS,
  IS_STATELESS,
  ADDITIONAL_PATH
}
