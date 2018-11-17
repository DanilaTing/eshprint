import React, { Component } from 'react';

class SelectButton extends Component {
  constructor(props) {
    super(props)

    this.setSelected = this.setSelected.bind(this)
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

  setSelected() {
    const variant = this.props.text
    this.props.setSelected(variant)
    const custom = false
    this.props.setCustom(custom)
  }

  customText(e) {
    const variant = e.target.value
    this.props.setSelected(variant)
  }

  render() {
    if (this.state.selected == false) {
      if (this.props.custom == true) {
        return (
          <div className="selectButton" id="inactive">
            <input type="text" size="20" placeholder="Свой формат" onChange={this.customText}/>
          </div>
        )
      } else {
        return (
          <div className="selectButton" id="inactive" onClick={this.setSelected}>
            <p>{this.props.text}</p>
          </div>
        )
      }
    } else {
      if (this.props.custom == true) {
        return (
          <div className="selectButton" id="active" onClick={this.props.deselect}>
            <input type="text" size="20" placeholder="Свой формат"/>
          </div>
        )
      } else {
        return (
          <div className="selectButton" id="active" onClick={this.props.deselect}>
            <p>{this.props.text}</p>
          </div>
        )
      }
    }
  }
}

export default SelectButton;
