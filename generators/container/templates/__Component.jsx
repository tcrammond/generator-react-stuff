import React, { <%= componentClass %>, PropTypes } from 'react'
import { connect } from 'react-redux'

<% if (includeCss) { %>import styles from './<%= name %>.css'<% } %>

class <%= name %> extends <%= componentClass %> {
  static propTypes = {

  }

  render () {
    return (
      <div><%= name %></div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(<%= name %>)
