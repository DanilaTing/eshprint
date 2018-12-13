import React, { Component } from 'react';
import PaperColorsSelector from '../01_atoms/PaperColorsSelector';

export default class SelectPaper extends Component {
  constructor(props) {
    super(props)
    this.triggerSelected = this.triggerSelected.bind(this)
    this.triggerDeselected = this.triggerDeselected.bind(this)
    this.renderPaperColorsSelector = this.renderPaperColorsSelector.bind(this)
  }

  triggerSelected() {
    const { text, actionSelect } = this.props
    actionSelect(text)
  }

  triggerDeselected() {
    const { actionDeselect } = this.props
    actionDeselect()
  }

  renderPaperColorsSelector() {
    const { option } = this.props
    const { colors } = option
    console.log('colors= ' + colors);
    if (colors != undefined) {
      return (
        <PaperColorsSelector colors={ colors } open={ false }/>
      )
    }
  }

  render() {
    const { text, selectedOption, option } = this.props
    const { textureImage } = option

    if (selectedOption == text) {
      return (
        <div className="SelectPaper" id={ textureImage } onClick={ this.triggerDeselected }>
          { text }
          { this.renderPaperColorsSelector() }
        </div>
      )
    } else {
      return (
        <div className="SelectPaper inactive" id={ textureImage } onClick={ this.triggerSelected }>
          { text }
          { this.renderPaperColorsSelector() }
        </div>
      )
    }
  }
}
