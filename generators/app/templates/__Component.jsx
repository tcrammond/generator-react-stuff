import React, { Component, PropTypes } from 'react'

<% if (includeCss) { %>import styles from './<%= name %>.css'<% } %>

class <%= name %> extends Component {
  static propTypes = {

  }

  render () {
    return (
      <div><%= name %></div>
    )
  }
}

export default <%= name %>
