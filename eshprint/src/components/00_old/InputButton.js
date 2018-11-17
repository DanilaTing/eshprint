import React, { Component } from 'react';

class InputButton extends Component {
  constructor(props) {
    super(props)

    this.customText = this.customText.bind(this)

    this.state = {
      'selected': this.props.selected
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      'selected': nextProps.selected > this.props.selected
    });
  }

  customText(e) {
    const variant = e.target.value
    this.props.setSelected(variant)
    const custom = true
    this.props.setCustom(custom)
  }

  render() {
    if (this.state.selected == true) {
      return (
        <div className="selectButton customInput" id="active" onChange={this.customText} onClick={this.props.deselect}>
          <input type="text" size="20" placeholder="Свой формат"/>
        </div>
      )
    } else {
      return (
        <div className="selectButton customInput" id="inactive">
          <input type="text" size="20" placeholder="Свой формат" onChange={this.customText}/>
        </div>
      )
    }
  }
}

export default InputButton;
