import React, { Component } from 'react';
import SelectButton from './SelectButton.js';
import InputButton from './InputButton.js';

class formsForFormat extends Component {
  constructor(props) {
    super(props)

    this.setSelected = this.setSelected.bind(this)
    this.setCustom = this.setCustom.bind(this)
    this.deselect = this.deselect.bind(this)
    this.createSelects = this.createSelects.bind(this)

    this.state = {
      'selectedVar': '',
      'custom': false
    }
  }

  setSelected(variant) {
    this.setState({
      'selectedVar': variant
    })
  }

  setCustom(custom) {
    this.setState({
      'custom': custom
    })
  }

  deselect() {
    this.setState({
      'selectedVar': ''
    })
  }

  createSelects() {
    const texts = ["А3 (420 x 297 мм)", "А4 (297 x 210 мм)", "А5 (420 x 297 мм)", "А6 (297 x 210 мм)"]

    const selects = texts.map(text => {
      if (this.state.selectedVar == text && this.state.custom == false) {
        return (
          <SelectButton text={text} deselect={this.deselect} selected={true}/>
        )
      } else {
        return (
          <SelectButton setCustom={this.setCustom} text={text} setSelected={this.setSelected} setSelected={this.setSelected} selected={false}/>
        )
      }
    })

    if (this.state.custom == true) {
      selects.push(
        <InputButton setCustom={this.setCustom} setSelected={this.setSelected} selected={true}/>
      )
    } else {
      selects.push(
        <InputButton setCustom={this.setCustom} setSelected={this.setSelected} selected={false}/>
      )
    }

    return (
      <div className="selects">
        {selects}
      </div>
    )
  }

  render() {
    return (
      <div className="formsForFormatWraper">
        {this.createSelects()}
      </div>
    )
  }
}

export default formsForFormat;
