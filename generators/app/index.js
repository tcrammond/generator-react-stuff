'use strict'
var Generator = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = Generator.extend({
  prompting: function () {

    this.log(
      `Let\'s make a ${chalk.cyan('react')} component!` +
      `\nThis generator will create a react component skeleton for you.\n`
    )

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Name your component (MyComponent)',
        default: 'MyComponent'
      },
      {
        type: 'confirm',
        name: 'stateless',
        message: 'Is this a stateless functional component? (i.e. just a function)',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeCss',
        message: 'Do you want a CSS file?',
        default: true
      },
      {
        type: 'input',
        name: 'filepath',
        message: 'Enter the path to the existing folder where your new component ' + chalk.bold('folder') + ' should be placed',
        default: './src/components'
      }
    ]

    return this.prompt(prompts)
      .then((props) => this.props = props)
  },

  writing: function () {
    this.destinationRoot(this.props.filepath + '/' + this.props.name)
    var template = this.props.stateless ? this.templatePath('__Stateless.jsx') : this.templatePath('__Component.jsx')

    this.fs.copyTpl(
      template,
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
