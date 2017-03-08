'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')

const PROMPTS = require('../../prompts/prompts')

module.exports = Generator.extend({
  prompting: function () {
    this.log(
      `Let's make a ${chalk.cyan('react')} component!` +
      `\nThis generator will create a react component skeleton for you.\n`
    )

    const pathRoot = this.config.get('componentRoot')

    const prompts = [
      PROMPTS.NAME_COMPONENT,
      PROMPTS.IS_STATELESS,
      PROMPTS.INCLUDE_CSS,
      PROMPTS.ADDITIONAL_PATH(pathRoot)
    ]

    return this.prompt(prompts)
      .then((props) => {
        this.props = props
        this.props.componentClass = this.config.get('componentClass') || 'Component'

        this.props.filepath = this.props.filepath.replace(/^[/]*/, '')
        this.props.filepath = pathRoot + '/' + this.props.filepath
      })
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
  },

  end: function () {
    this.log(`Your component has arrived, have fun`)
  }
})
