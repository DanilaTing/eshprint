import React, { Component } from 'react';

export default class SelectColor extends Component {
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
    const { text, actionDeselect } = this.props
    actionDeselect(text)
  }

  render() {
    const { text, color, selectedOptions } = this.props

    if (selectedOptions.includes(text)) {
      return (
        <div className="SelectColor" id={ color } onClick={ this.triggerDeselected }>
          { text }
        </div>
      )
    } else {
      return (
        <div className="SelectColor inactive" id={ color } onClick={ this.triggerSelected }>
          { text }
        </div>
      )
    }
  }
}
