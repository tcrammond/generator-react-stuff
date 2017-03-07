import React, { PropTypes } from 'react'

<% if (includeCss) { %>import styles from './<%= name %>.css'<% } %>

export default function <%= name %> () {
  return (
    <div></div>
  )
}

<%= name %>.propTypes = {

}
