'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const PROMPTS = require('../../prompts/setup')

module.exports = Generator.extend({
  prompting: function () {
    const prompts = [
      PROMPTS.STATE_CONTAINER,
      PROMPTS.COMPONENT_ROOT,
      // PROMPTS.REDUCER_ROOT,
      PROMPTS.COMPONENT_CLASS
    ]

    this.log(chalk.green(`\nHi! 🐱\n\nI need to ask a few questions to make sure files go to the right places:\n`))

    return this.prompt(prompts)
      .then((props) => {
        this.props = props

        this.props.componentRoot = this.props.componentRoot.replace(/^[/]*/, '')
        if (props.stateContainer === 'None') this.props.stateContainer = ''
      })
  },

  writing: function () {
    if (this.initialized) return

    this.config.set(this.props)
  },

  end: function () {
    this.log(chalk.green(`\nAll set up! Let's go 🐈`))
    this.log(`Try using ${chalk.green('yo react-stuff:component')} or ${chalk.green('yo react-stuff:container')}`)
    // this.log(`\n⚠️   Please remember to add ${chalk.cyan('.yo-rc.json')} to your ${chalk.cyan('.gitignore')} if you need to. \n`)
  }
})
