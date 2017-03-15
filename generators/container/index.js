'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const PROMPTS = require('../../prompts/prompts')

// TODO some base generator with pathRoot and such.
module.exports = Generator.extend({
  prompting: function () {
    this.log(
      '\n\n' +
      `Let's make a ${chalk.cyan('react')} component!\n` +
      `This generator will create a react container component skeleton for you.\n\n`
    )

    const pathRoot = this.config.get('componentRoot')

    const prompts = [
      PROMPTS.NAME_COMPONENT,
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

    const container = this.config.get('stateContainer') || 'Redux'
    const template = `__${container}Component.jsx`

    this.fs.copyTpl(
      this.templatePath(template),
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
