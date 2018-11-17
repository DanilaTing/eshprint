import React, { Component } from 'react';
import Presets from './Presets.js';
import Calculator from './Calculator.js';

class Calc extends Component {
  constructor(props) {
    super(props)

    this.renderCalcClosed = this.renderCalcClosed.bind(this)
    this.renderCalcOpen = this.renderCalcOpen.bind(this)
    this.openCalculator = this.openCalculator.bind(this)

    this.state = {
      'calcOpen': this.props.open,
      'presetsOpen': true,
      'calculatorOpen': false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      'calcOpen': nextProps.open > this.props.open
    });
  }

  openCalculator() {
    this.setState({
      'presetsOpen': false,
      'calculatorOpen': true
    })
  }

  renderCalcClosed() {
    return (
      <div className='calcPage' onClick={this.props.actions.openCalcPage}>
        <div className='blockHead' id="toOpen">
          <h1>КАЛЬКУЛЯТОР</h1>
        </div>
      </div>
    )
  }

  renderCalcOpen() {
    return (
      <div className='calcPage' id='open'>
        <div className='blockHead' id="toClose" onClick={this.props.actions.closeCalcPage}>
          <h1>КАЛЬКУЛЯТОР</h1>
        </div>
        {this.state.presetsOpen &&
          <Presets openCalculator={this.openCalculator}/>
        }
        {this.state.calculatorOpen &&
          <Calculator />
        }
      </div>
    )
  }

  render() {
    if (this.state.calcOpen == false) {
      return (
        this.renderCalcClosed()
      )
    }

    if (this.state.calcOpen == true) {
      return (
        this.renderCalcOpen()
      )
    }

  }
}

export default Calc;
