import React, { Component } from 'react';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.renderStages = this.renderStages.bind(this)
    this.renderProgressLine = this.renderProgressLine.bind(this)
  }

  renderStages() {
    const { stages, currentStage, setStageFromProgressBar } = this.props
    let stagesToRender = []
    let filledStages = []

    stages.map((stage, i) => {
      const indexOfStage = stages.indexOf(stage)
      const { stageName } = stage

      if (stage.selectedOption != '') {
        filledStages.push(
          indexOfStage
        )
      }

      console.log('filledStages= ' + filledStages);

      const lastFilledStage = Math.max.apply(Math, filledStages);
      const lastIndex = lastFilledStage + 1
      console.log('lastFilledStage= ' + lastFilledStage);
      console.log('lastIndex= ' + lastIndex);

      if (stageName == currentStage) {
        stagesToRender.push (
          <p key={ i }>{stageName}</p>
        )
      } else if (indexOfStage <= lastIndex) {
        stagesToRender.push (
          <p id="inactive" key={ i } onClick={ ()=>setStageFromProgressBar(stageName, indexOfStage) }>{stageName}</p>
        )
      } else {
        stagesToRender.push (
          <p id="inactive" key={ i }>{stageName}</p>
        )
      }
    })

    return (
      <div className="progressStages">
        { stagesToRender }
      </div>
    )
  }

  renderProgressLine() {
    const { stages, currentStage, currentStageIndex } = this.props

    let progressLine = []

    stages.map((stage, i) => {
      const id = stages.indexOf(stage)
      console.log(id);
      if (id == currentStageIndex) {
        progressLine.push (
          <div className="progressLine" id={"stage" + id} key={ i }></div>
        )
      }
    })

    return (
      <div className="progressBar">
        <div className="progressBg"></div>
        { progressLine }
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
