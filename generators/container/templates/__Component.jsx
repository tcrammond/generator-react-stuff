import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

<% if (includeCss) { %>import styles from './<%= name %>.css'<% } %>

class <%= name %> extends Component {
  static propTypes = {

  }

  render () {
    return (
      <div></div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(<%= name %>)
