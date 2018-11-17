import React, { Component } from 'react';

export default class TextButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { active, action } = this.props

    if (active == true) {
      return (
        <div className="TextButton" onClick={ action }>
          Далее
        </div>
      )
    } else {
      return (
        <div className="TextButton inactive">
          Далее
        </div>
      )
    }
  }
}
