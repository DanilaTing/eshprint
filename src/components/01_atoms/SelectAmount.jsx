import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';

let state = { text: '' };

export default class SelectAmount extends Component {
  constructor(props) {
    super(props)
    this.triggerSelected = this.triggerSelected.bind(this)
    this.triggerDeselected = this.triggerDeselected.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = state
  }

  componentWillUnmount() {
    state = this.state;
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
    const { actionSelect } = this.props
    const { text } = this.state
    actionSelect(text)
  }

  triggerDeselected() {
    const { actionDeselect } = this.props
    actionDeselect()
  }

  render() {
    const { selectedOption } = this.props
    const { text } = this.state

    if (selectedOption != '' && selectedOption == text) {
      return (
        <div className="SelectAmount" onClick={ this.triggerDeselected }>
          <input value={ text } type="number" name="amount" size="4" onChange={ this.onChange }/>
        </div>
      )
    } else {
      return (
        <div className="SelectAmount inactive" onClick={ this.triggerSelected }>
          <input placeholder='Тираж' value={ text } type="number" name="amount" size="4" onChange={ this.onChange }/>
        </div>
      )
    }
  }
}
