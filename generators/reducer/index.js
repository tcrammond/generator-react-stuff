'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')

module.exports = Generator.extend({
  prompting: function () {
    this.log(
      '\n\n' +
      `Let's make a ${chalk.cyan('reducer')}!\n` +
      `This generator will create a reducer skeleton file for you.\n\n` +
      `${chalk.red('Note')} - you don't need to include slashes in any responses :-).\n\n`
    )

    const pathRoot = this.config.get('reducerRoot')
    const hasCustomRoot = !!pathRoot

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Name your reducer (myReducer)',
        default: 'myReducer'
      }
    ]

    if (hasCustomRoot) {
      prompts.push({
        type: 'input',
        name: 'filepath',
        message: `Reducer will be placed in your reducer root (${pathRoot}). Enter any additional path here:`,
        default: ''
      })
    } else {
      prompts.push({
        type: 'input',
        name: 'filepath',
        message: 'Enter path to where the new reducer file should be placed:',
        default: './src/reducers'
      })
    }

    return this.prompt(prompts)
      .then((props) => {
        this.props = props
        if (hasCustomRoot) this.props.filepath = pathRoot + '/' + this.props.filepath
      })
  },

  writing: function () {
    this.destinationRoot(this.props.filepath)
    this.fs.copyTpl(
      this.templatePath('__reducer.js'),
      this.destinationPath(this.props.name + '.js'),
      this.props
    )
  }
})
