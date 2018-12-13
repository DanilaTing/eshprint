import React, { Component } from 'react';

export default class PaperColorsSelector extends Component {
  constructor(props) {
    super(props)
    this.renderColors = this.renderColors.bind(this)
    this.openColorsSelector = this.openColorsSelector.bind(this)
    this.closeColorsSelector = this.closeColorsSelector.bind(this)

    this.state = {
      open: this.props.open
    }
  }

  openColorsSelector() {
    this.setState({
      open: true
    })
  }

  closeColorsSelector() {
    this.setState({
      open: false
    })
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
        <div className="colorSelectWraper" onMouseLeave={ this.closeColorsSelector }>
          <div className="colorButton">
            { colorsToRender[1] }
          </div>
          <div className="PaperColorsSelector open">
            { colorsToRender }
          </div>
        </div>
      )
    } else {
      return (
        <div className="colorSelectWraper" onMouseOver={ this.openColorsSelector }>
          <div className="colorButton">
            { colorsToRender[1] }
          </div>
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
