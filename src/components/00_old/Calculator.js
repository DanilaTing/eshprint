import React, { Component } from 'react';
import ProgressBar from './ProgressBar.js';
import Checkout from './Checkout.js';
import Forms from './Forms.js';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stage: 'формат',
      stage_index: 'stage0'
    }
  }

  render() {
    const stages = {
      'stage': this.state.stage,
      'stageIndex': this.state.stage_index
    }

    return (
      <div className="calculatorWraper">
        <div>
          <ProgressBar stages={stages}/>
          <Forms stages={stages}/>
        </div>
        <Checkout />
      </div>
    )
  }
}

export default Calculator;
