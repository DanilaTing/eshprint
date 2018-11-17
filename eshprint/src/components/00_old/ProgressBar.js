import React, { Component } from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.renderStages = this.renderStages.bind(this)
    this.renderProgressLine = this.renderProgressLine.bind(this)

    this.state = {
      stage: this.props.stages.stage
    }
  }

  renderStages() {
    const stages = ['формат', 'бумага', 'резка', 'цвета', 'тираж', 'цветопробы']

    const trueStages = stages.map(stage => {
      if (stage == this.props.stages.stage) {
        return (
          <p>{stage}</p>
        )
      } else {
        return (
          <p id="inactive">{stage}</p>
        )
      }
    })

    return (
      <div className="progressStages">
        {trueStages}
      </div>
    )
  }

  renderProgressLine() {
    const stages = ['формат', 'бумага', 'резка', 'цвета', 'тираж', 'цветопробы']

    const progressLine = stages.map(stage => {
      const id = "stage" + stages.indexOf(stage)
      if (id == this.props.stages.stageIndex) {
        return (
          <div className="progressLine" id={id}></div>
        )
      }
    })

    return (
      <div className="progressBar">
        <div className="progressBg"></div>
        {progressLine}
      </div>
    )
  }

  render() {
    return (
      <div className="progressBarWraper">
        {this.renderStages()}
        {this.renderProgressLine()}
      </div>
    )
  }
}

export default ProgressBar;
