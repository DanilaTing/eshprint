import React, { Component } from 'react';

export default class PaperColorsSelector extends Component {
  constructor(props) {
    super(props)
    this.renderColors = this.renderColors.bind(this)

    this.state = {
      open: true
    }
  }

  renderColors() {
    const { colors } = this.props
    let colorsToRender = []

    colors.map((color, i) => {
      const { name, hex } = color
      const style = {
        backgroundColor: hex
      }
      colorsToRender.push(
        <div className='colorPicker' style={ style } key={ i }></div>
      )
    })

    if (this.state.open == true) {
      return (
        <div className="PaperColorsSelector open">
          { colorsToRender }
        </div>
      )
    }
  }

  render() {
    return (
      this.renderColors()
    )
  }
}
