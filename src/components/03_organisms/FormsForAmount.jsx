import React, { Component } from 'react';
import SelectAmount from '../01_atoms/SelectAmount';

export default class FormsForAmount extends Component {
  constructor(props) {
    super(props)
  }

  renderSelects() {
    const { stage, actionSelect, actionDeselect } = this.props
    const { options, selectedOption } = stage
    let selects = []

    options.map((option, i) => {
      const { optionName } = option
      selects.push (
        <SelectAmount
          text={ optionName }
          actionSelect={ actionSelect }
          actionDeselect={ actionDeselect }
          selectedOption= { selectedOption }
          key={ i }
        />
      )
    })

    return selects
  }

  render() {
    return (
      <div>
        <div className="FormsForAmount">
          { this.renderSelects() }
        </div>
        <div className="noticeWraper">
          <p className="notice">При данных настройках минимальный тираж — 100 штук.</p>
          <a className="tutorialLink">Подробнее в руководстве к печати</a>
        </div>
      </div>
    )
  }
}
