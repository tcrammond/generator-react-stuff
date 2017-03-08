import React, { <%= componentClass %>, PropTypes } from 'react'

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

export default <%= name %>
