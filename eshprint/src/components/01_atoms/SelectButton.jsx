import React, { Component } from 'react';

export default class SelectButton extends Component {
  constructor(props) {
    super(props)
    this.triggerSelected = this.triggerSelected.bind(this)
    this.triggerDeselected = this.triggerDeselected.bind(this)
  }

  triggerSelected() {
    const { text, actionSelect } = this.props
    actionSelect(text)
  }

  triggerDeselected() {
    const { actionDeselect } = this.props
    actionDeselect()
  }

  render() {
    const { text, selectedOption } = this.props

    if (selectedOption == text) {
      return (
        <div className="selectButton" onClick={ this.triggerDeselected }>
          { text }
        </div>
      )
    } else {
      return (
        <div className="selectButton inactive" onClick={ this.triggerSelected }>
          { text }
        </div>
      )
    }
  }
}
