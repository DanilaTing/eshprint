import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput'

export default class SelectPaperCustom extends Component {
  constructor(props) {
    super(props)
    this.triggerSelected = this.triggerSelected.bind(this)
    this.triggerDeselected = this.triggerDeselected.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      text: this.props.text
    }
  }

  onChange(e) {
    const { actionSelect } = this.props
    const customFormat = e.target.value
    this.setState({
      text: customFormat
    })
    actionSelect(customFormat)
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
    const { selectedOption } = this.props
    const { text } = this.state

    if (selectedOption == text) {
      return (
        <div className="SelectPaperCustom" onClick={ this.triggerDeselected }>
          { text }
        </div>
      )
    } else {
      return (
        <div className="SelectPaperCustom inactive" onClick={ this.triggerSelected }>
          { text }
        </div>
      )
    }
  }
}
