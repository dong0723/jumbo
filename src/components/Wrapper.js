import React, { Component } from 'react'

export default class Wrapper extends Component {
  render () {
    return (
      <div class="wrapper">
        {this.props.children}

      </div>
    )
  }
}
