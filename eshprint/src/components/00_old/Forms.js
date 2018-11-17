import React, { Component } from 'react';
import FormsForFormat from './FormsForFormat.js';

class Forms extends Component {
  constructor(props) {
    super(props)

    this.renderFormsForStage = this.renderFormsForStage.bind(this)
  }

  renderFormsForStage() {
    if (this.props.stages.stage = "формат") {
      return (
        <FormsForFormat />
      )
    }
  }

  render() {
    return (
      <div className="formsWraper">
        {this.renderFormsForStage()}
      </div>
    )
  }
}

export default Forms;
