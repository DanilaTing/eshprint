import React, { Component } from 'react';
import SelectColor from '../01_atoms/SelectColor';

export default class FormsForColors extends Component {
  constructor(props) {
    super(props)
  }

  renderSelects() {
    const { stage, actionSelect, actionDeselect } = this.props
    const { options, selectedOptions } = stage
    let selects = []

    options.map((option, i) => {
      const { optionName, color } = option
      selects.push (
        <SelectColor
          text={ optionName }
          color={ color }
          actionSelect={ actionSelect }
          actionDeselect={ actionDeselect }
          selectedOptions= { selectedOptions }
          key={ i }
        />
      )
    })

    return selects
  }

  render() {
    return (
      <div>
        <div className="FormsForColors">
          { this.renderSelects() }
        </div>
        <div className="noticeWraper">
          <p className="notice">При печати нескольких цветов возможны смещения в пределах 1–3 мм. Пожалуйста, учитывайте это при создании макетов.</p>
          <a className="tutorialLink">Подробнее в руководстве к печати</a>
        </div>
      </div>
    )
  }
}
