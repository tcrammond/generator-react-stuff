'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')

module.exports = Generator.extend({
  prompting: function () {
    this.log(
      '\n\n' +
      `Let's make a ${chalk.cyan('react')} component!\n` +
      `This generator will create a react container component skeleton for you.\n\n` +
      `${chalk.red('Note')} - you don't need to include slashes in any responses :-).\n\n`
    )

    const pathRoot = this.config.get('componentRoot')
    const hasCustomRoot = !!pathRoot

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Name your component (MyComponent)',
        default: 'MyComponent'
      },
      {
        type: 'confirm',
        name: 'includeCss',
        message: 'Do you want a CSS file?',
        default: true
      }
    ]

    if (hasCustomRoot) {
      prompts.push({
        type: 'input',
        name: 'filepath',
        message: `Component folder will be placed in your component root (${pathRoot}). Enter any additional path here:`,
        default: ''
      })
    } else {
      prompts.push({
        type: 'input',
        name: 'filepath',
        message: 'Enter path to where the new component folder should be placed:',
        default: './src/components'
      })
    }

    return this.prompt(prompts)
      .then((props) => {
        this.props = props
        if (hasCustomRoot) this.props.filepath = pathRoot + '/' + this.props.filepath
      })
  },

  writing: function () {
    this.destinationRoot(this.props.filepath + '/' + this.props.name)
    this.fs.copyTpl(
      this.templatePath('__Component.jsx'),
      this.destinationPath(this.props.name + '.jsx'),
      this.props
    )
    if (this.props.includeCss) {
      this.fs.copy(
        this.templatePath('__Component.css'),
        this.destinationPath(this.props.name + '.css')
      )
    }
  }
})
