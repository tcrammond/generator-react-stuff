import React, { <%= componentClass %>, PropTypes } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

<% if (includeCss) { %>import styles from './<%= name %>.css'<% } %>

@inject('store')
@observer
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
